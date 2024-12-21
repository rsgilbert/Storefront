using System.Security.Principal;
using Microsoft.AspNetCore.Authorization;
using Microsoft.AspNetCore.Mvc;
using Api;
using Api.Models;
using Microsoft.EntityFrameworkCore;
using Mysqlx;


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
    [Route("{Id}")]
    public Item GetItem(string Id)
    {
        Item? item = apiDbContext.Items
        .Include(i => i.Pictures)
        .Where(i => i.Id == Id)
        .First();
        if (item == default) throw new Exception($"Item ${Id} Not Found");
        return item;
    }

    [HttpPost]
    public async Task<Item> CreateItem(Item item)
    {
        apiDbContext.Items.Add(item);
        await apiDbContext.SaveChangesAsync();
        item = (await apiDbContext.Items.FindAsync(item.Id))!;
        return item;
    }

    [HttpPut]
    [HttpPatch]
    [Route("{Id}")]
    public Item UpdateItem(string Id, Item updateItem)
    {
       Item item = apiDbContext.Items.Find(Id)!;
       if(updateItem.Id != Id) throw new ArgumentException("Wrong update item. Id does not match");
       item.Description = updateItem.Description;
       item.DetailedDescription = updateItem.DetailedDescription;
       item.UnitPrice = updateItem.UnitPrice;
       item.Model = updateItem.Model;
       apiDbContext.SaveChanges();
       return apiDbContext.Items.Find(Id)!;
    }

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