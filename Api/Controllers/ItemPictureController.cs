using System.Security.Principal;
using Microsoft.AspNetCore.Authorization;
using Microsoft.AspNetCore.Mvc;
using Api;
using Api.Models;
using Microsoft.EntityFrameworkCore;


namespace Api.Controllers;

// [Authorize]
[ApiController]
[Route("[controller]")]
public class ItemPictureController(ApiDbContext apiDbContext) : ControllerBase
{

    [HttpGet]
    public IEnumerable<ItemPicture> GetItemPictures()
    {
        return apiDbContext.ItemPictures;
    }

    [HttpGet]
    [Route("{No}")]
    public async Task<ItemPicture> GetItemPicture(string No)
    {
        ItemPicture? itemPicture = await apiDbContext.ItemPictures.FindAsync(No);
        if(itemPicture == default) throw new Exception($"ItemPicture ${No} Not Found");
        return itemPicture;
    }

    [HttpPost]
    public async Task<ItemPicture> CreateItemPicture(ItemPicture itemPicture)
    {
        apiDbContext.ItemPictures.Add(itemPicture);
        await apiDbContext.SaveChangesAsync();
        itemPicture = (await apiDbContext.ItemPictures.FindAsync(itemPicture.PictureUrl))!;
        return itemPicture;
    }

    //[HttpPatch]
    //[Route("{No}")]
    //public ItemPicture UpdateItemPicture(string No, ItemPicture updateItemPicture)
    //{
    //    ItemPicture itemPicture = updateItemPictureDto.UpdateItemPicture(apiDbContext);
    //    apiDbContext.SaveChanges();
    //    return apiDbContext.ItemPictures.Find(itemPicture.No)!;
    //}

    [HttpDelete]
    [Route("{No}")]
    public async Task<NoContentResult> DeleteItemPicture(string pictureUrl)
    {
        ItemPicture? itemPicture = await apiDbContext.ItemPictures.FindAsync(pictureUrl);
        if(itemPicture == default) throw new Exception($"ItemPicture ${pictureUrl} Not Found");
        apiDbContext.ItemPictures.Remove(itemPicture);
        await apiDbContext.SaveChangesAsync();
        return NoContent();
    }

}