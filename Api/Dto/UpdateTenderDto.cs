using Api.Models;

namespace Api.Dto;

public class UpdateTenderDto
{
    public string No { get; set; }
    public string Title { get; set; }
    public string Description { get; set; }
    public string Category { get; set; }
    public DateTime Deadline { get; set; }

    public Tender UpdateTender(ApiDbContext dbContext)
    {
        Tender tender = dbContext.Tenders.Find(No) ?? throw new Exception($"No tender found with No {No}");
        tender.Title = Title;
        tender.Deadline = Deadline;
        tender.Category = Category;
        tender.Description = Description;
        tender.UpdatedBy = "ADMIN";
        tender.UpdatedAt = DateTime.Now;
        return tender;
    }
}


