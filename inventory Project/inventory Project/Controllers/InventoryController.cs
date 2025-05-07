using inventory_backend.Data;
using inventory_backend.Models;
using Microsoft.AspNetCore.Mvc;
using Microsoft.EntityFrameworkCore;

using System;

[Route("api/[controller]")]
[ApiController]
public class InventoryController : ControllerBase
{
    private readonly ApplicationDbContext _context;

    public InventoryController(ApplicationDbContext context)
    {
        _context = context;
    }

    // GET: api/inventory
    [HttpGet]
    public async Task<ActionResult<IEnumerable<InventoryItem>>> GetItems()
    {
        return await _context.InventoryItems.ToListAsync();
    }

    // POST: api/inventory
    [HttpPost]
    public async Task<ActionResult<InventoryItem>> AddItem(InventoryItem item)
    {
        _context.InventoryItems.Add(item);
        await _context.SaveChangesAsync();
        return CreatedAtAction("GetItems", new { id = item.Id }, item);
    }

    [HttpPut("{id}")]
    public IActionResult UpdateItem(int id, [FromBody] InventoryItem item)
    {
        if (item == null)
        {
            return BadRequest("Item is null");
        }

        var existingItem = _context.InventoryItems.Find(id);
        if (existingItem == null)
        {
            return NotFound();
        }

        // Update the inventory item
        existingItem.Name = item.Name;
        existingItem.Quantity = item.Quantity;
        existingItem.Price = item.Price;
        existingItem.Category = item.Category;

        _context.SaveChanges();

        return NoContent(); // 204 status code
    }

    // DELETE: api/inventory/{id}
    [HttpDelete("{id}")]
    public async Task<IActionResult> DeleteItem(int id)
    {
        var item = await _context.InventoryItems.FindAsync(id);
        if (item == null)
        {
            return NotFound();
        }

        _context.InventoryItems.Remove(item);
        await _context.SaveChangesAsync();

        return NoContent();
    }
}