using Microsoft.AspNetCore.Identity.EntityFrameworkCore;
using Microsoft.EntityFrameworkCore;
using Api.Authentication;
using Api.Models;

namespace Api;

public class ApiDbContext(DbContextOptions<ApiDbContext> options) : IdentityDbContext<ApplicationUser>(options)
{

    protected override void ConfigureConventions(ModelConfigurationBuilder configurationBuilder)
    {
        configurationBuilder.Properties<decimal>()
            .HavePrecision(9, 2)
            .HaveAnnotation("DefaultValue", 0);

        configurationBuilder.Properties<int>()
                  .HaveAnnotation("DefaultValue", 0);

        configurationBuilder.Properties<string>()
        .HaveAnnotation("DefaultValue", "");

        configurationBuilder.Properties<bool>()
            .HaveAnnotation("DefaultValue", false);

    }


    public DbSet<Tender> Tenders { get; set; }

}