commands:
dotnet add package Pomelo.EntityFrameworkCore.MySql --version 8.0.0


to learn about setting up odata 
including documntation on PATCH requests see:
https://learn.microsoft.com/en-us/odata/webapi-8/fundamentals/entity-routing?tabs=net60%2Cvisual-studio




Run migrations
dotnet ef migrations add InitialCreate

// update the database to the latest migration:
// see: https://learn.microsoft.com/en-us/ef/core/managing-schemas/migrations/applying?tabs=dotnet-core-cli
dotnet ef database update

// save in caps:
https://stackoverflow.com/q/38713303/10030693




// when you're adding an ef migration and you get an error saying that Object reference not set to an instance of an object,
it can mean that one of the models you're adding to your context does not have a namespace defined for its class. 
Go to the file that has the class definition for the model and verify that the class exists within a namespace.

To learn about authentication see: https://www.c-sharpcorner.com/article/authentication-and-authorization-in-asp-net-core-web-api-with-json-web-tokens/



If you get an error saying: Only the invariant culture is supported in globalization-invariant mode. ,
Remove below line from your .csproj
   <InvariantGlobalization>true</InvariantGlobalization>
 