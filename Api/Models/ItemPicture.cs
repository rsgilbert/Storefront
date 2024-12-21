using Microsoft.EntityFrameworkCore;
using System.ComponentModel.DataAnnotations;
using System.ComponentModel.DataAnnotations.Schema;

namespace Api.Models;


public class ItemPicture
{
    [Key]
    public required string PictureUrl { get; set; }
    public required string ItemId { get; set; }



    [ForeignKey(nameof(ItemId))]
    public virtual Item? Item { get; set; }

}