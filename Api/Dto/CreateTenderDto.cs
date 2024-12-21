using Api.Models;

namespace Api.Dto;

public class CreateTenderDto 
{
    public string No { get;set; }
    public string Title { get;set;}
    public string Description { get;set;}
    public string Category { get;set;}
    public DateTime Deadline { get;set;}

    public Tender CreateTender()
    {
        return new()
        {
            No = No,
            Title = Title,
            Description = Description,
            Category = Category,
            Deadline = Deadline,
            CreatedAt = DateTime.Now,
            CreatedBy = "ADMIN",
            UpdatedAt = DateTime.Now,
            UpdatedBy = "ADMIN"
        };
    }
}


