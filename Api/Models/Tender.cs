using System.ComponentModel.DataAnnotations;

namespace Api.Models;

public class Tender
{
    [Key]
    public string No { get;set;}
    public string Title { get;set;}
    public string Description { get;set;}
    public string Category { get;set;}
    public DateTime Deadline { get;set;}
    public string CreatedBy { get;set;}
    public DateTime CreatedAt { get;set; }
    public string UpdatedBy { get;set;}
    public DateTime UpdatedAt { get;set; }
}


