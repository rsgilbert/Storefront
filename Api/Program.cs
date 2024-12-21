
using Microsoft.AspNetCore.Authentication.JwtBearer;
using Microsoft.AspNetCore.Identity;
using Microsoft.EntityFrameworkCore;
using Microsoft.IdentityModel.Tokens;
using Api;
using Api.Authentication;
using System.Text;
using System.Text.Json;
using System.Text.Json.Serialization;
using Api.Handlers;


var builder = WebApplication.CreateBuilder(args);


// Add services to the container.

builder.Services.AddDbContext<ApiDbContext>(options =>
{
    // see: https://www.nuget.org/packages/Pomelo.EntityFrameworkCore.MySql#readme-body-tab
    string connectionString = builder.Configuration.GetConnectionString("DBConnection") ?? "No DBConnection connection string found";
    //Console.WriteLine(connectionString);
     options.UseNpgsql(connectionString);
    //options.UseMySQL(connectionString);
    // The following three options help with debugging, but should
    // be changed or removed for production.
    // options.LogTo(Console.WriteLine, LogLevel.Information);
    // options.EnableSensitiveDataLogging();
    // options.EnableDetailedErrors();
});
// builder.Services.AddDatabaseDeveloperPageExceptionFilter();

// For Identity
builder.Services.AddIdentity<ApplicationUser, IdentityRole>()
    .AddEntityFrameworkStores<ApiDbContext>()
    .AddDefaultTokenProviders();

builder.Services.Configure<IdentityOptions>(options =>
{
    // override default Password settings.
    options.Password.RequireDigit = false;
    options.Password.RequireLowercase = false;
    options.Password.RequireNonAlphanumeric = false;
    options.Password.RequireUppercase = false;
    options.Password.RequiredLength = 3;
    options.Password.RequiredUniqueChars = 0;
});

// Adding Authentication
builder.Services.AddAuthentication(options =>
{
    options.DefaultAuthenticateScheme = JwtBearerDefaults.AuthenticationScheme;
    options.DefaultChallengeScheme = JwtBearerDefaults.AuthenticationScheme;
    options.DefaultScheme = JwtBearerDefaults.AuthenticationScheme;
})
.AddJwtBearer(options =>
{
    options.SaveToken = true;
    options.RequireHttpsMetadata = false;
    options.TokenValidationParameters = new TokenValidationParameters()
    {
        ValidateIssuer = true,
        ValidateAudience = false, // so that we can call our api from anywhere and not just the web app
        ValidAudience = builder.Configuration["JWT:ValidAudience"],
        ValidIssuer = builder.Configuration["JWT:ValidIssuer"],
        IssuerSigningKey = new SymmetricSecurityKey(Encoding.UTF8.GetBytes(builder.Configuration["JWT:Secret"]))
    };
});



builder.Services.AddControllers();

// see: https://stackoverflow.com/a/70054135/10030693
builder.Services.AddControllersWithViews()
    .AddJsonOptions(options =>
    {
        options.JsonSerializerOptions.ReferenceHandler = ReferenceHandler.IgnoreCycles;
        options.JsonSerializerOptions.PropertyNamingPolicy = null;
    });

// Learn more about configuring Swagger/OpenAPI at https://aka.ms/aspnetcore/swashbuckle
builder.Services.AddEndpointsApiExplorer();
// builder.Services.AddSwaggerGen();




// see: https://www.milanjovanovic.tech/blog/global-error-handling-in-aspnetcore-8
// remember to call app.UseExceptionHandler(); 
builder.Services.AddExceptionHandler<GlobalExceptionHandler>();
builder.Services.AddProblemDetails();

// setting cors is only required when the api is being called by the web browser
// if the calls are coming from the server like it is for nextjs server components, setting up cors may not be required
builder.Services.AddCors(policyBuilder =>
    policyBuilder.AddDefaultPolicy(policy =>
        policy.WithOrigins("*").AllowAnyHeader().AllowAnyMethod())
);

var app = builder.Build();
app.UseCors();



app.UseRouting();

app.UseAuthorization();

// should be called before UseEndpoints else the exception handler wont be called
app.UseExceptionHandler(); 
app.UseEndpoints(endpoints => endpoints.MapControllers());


// ensure the database is created
using (var serviceScope = app.Services.CreateScope())
{
    var salesDbContext = serviceScope.ServiceProvider.GetRequiredService<ApiDbContext>();
    await salesDbContext.Database.MigrateAsync();
}


// Configure the HTTP request pipeline.
if (app.Environment.IsDevelopment())
{
    // app.UseSwagger();
    // app.UseSwaggerUI();
}

// app.UseDeveloperExceptionPage(); // testing ssg

// app.UseHttpsRedirection();

app.MapControllers();
app.Run();
