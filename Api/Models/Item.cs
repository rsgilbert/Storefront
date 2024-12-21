using Microsoft.EntityFrameworkCore;
using System.ComponentModel.DataAnnotations;
using System.ComponentModel.DataAnnotations.Schema;

namespace Api.Models;


public class Item
{
    [Key]
    public required string Id { get; set; }
    public required string Description { get; set; }
    public required string DetailedDescription {get;set;}

    public decimal UnitPrice { get; set; } 
    public required string Model {  get; set; }


    public List<ItemPicture> Pictures { get;set; } = [];

}
