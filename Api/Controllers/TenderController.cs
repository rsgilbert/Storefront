using System.Security.Principal;
using Microsoft.AspNetCore.Authorization;
using Microsoft.AspNetCore.Mvc;
using Api;
using Api.Models;
using Api.Dto;
// using Api.Models;

namespace Api.Controllers;

// [Authorize]
[ApiController]
[Route("[controller]")]
public class TenderController(ApiDbContext apiDbContext) : ControllerBase
{

    [HttpGet]
    public IEnumerable<Tender> GetTenders()
    {
        return apiDbContext.Tenders;
    }

    [HttpGet]
    [Route("{No}")]
    public async Task<Tender> GetTender(string No)
    {
        Tender? tender = await apiDbContext.Tenders.FindAsync(No);
        if(tender == default) throw new Exception($"Tender ${No} Not Found");
        return tender;
    }

    [HttpPost]
    public async Task<Tender> CreateTender(CreateTenderDto createTenderDto)
    {
        Tender tender = createTenderDto.CreateTender();
        apiDbContext.Tenders.Add(tender);
        await apiDbContext.SaveChangesAsync();
        tender = (await apiDbContext.Tenders.FindAsync(tender.No))!;
        return tender;
    }

    [HttpPatch]
    [Route("{No}")]
    public Tender UpdateTender(string No, UpdateTenderDto updateTenderDto)
    {
        Tender tender = updateTenderDto.UpdateTender(apiDbContext);
        apiDbContext.SaveChanges();
        return apiDbContext.Tenders.Find(tender.No)!;
    }

    [HttpDelete]
    [Route("{No}")]
    public async Task<NoContentResult> DeleteTender(string No)
    {
        Tender? tender = await apiDbContext.Tenders.FindAsync(No);
        if(tender == default) throw new Exception($"Tender ${No} Not Found");
        apiDbContext.Tenders.Remove(tender);
        await apiDbContext.SaveChangesAsync();
        return NoContent();
    }

}