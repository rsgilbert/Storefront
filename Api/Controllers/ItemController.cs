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
public class ItemController(ApiDbContext apiDbContext) : ControllerBase
{

    [HttpGet]
    public IEnumerable<Item> GetItems()
    {
        return apiDbContext.Items.Include(i => i.Pictures);
    }

    [HttpGet]
    [Route("{No}")]
    public Item GetItem(string No)
    {
        Item? item = apiDbContext.Items
        .Include(i => i.Pictures)
        .Where(i => i.No == No)
        .First();
        if (item == default) throw new Exception($"Item ${No} Not Found");
        return item;
    }

    [HttpPost]
    public async Task<Item> CreateItem(Item item)
    {
        apiDbContext.Items.Add(item);
        await apiDbContext.SaveChangesAsync();
        item = (await apiDbContext.Items.FindAsync(item.No))!;
        return item;
    }

    //[HttpPatch]
    //[Route("{No}")]
    //public Item UpdateItem(string No, Item updateItem)
    //{
    //    Item item = updateItemDto.UpdateItem(apiDbContext);
    //    apiDbContext.SaveChanges();
    //    return apiDbContext.Items.Find(item.No)!;
    //}

    [HttpDelete]
    [Route("{No}")]
    public async Task<NoContentResult> DeleteItem(string No)
    {
        Item? item = await apiDbContext.Items.FindAsync(No);
        if (item == default) throw new Exception($"Item ${No} Not Found");
        apiDbContext.Items.Remove(item);
        await apiDbContext.SaveChangesAsync();
        return NoContent();
    }

}