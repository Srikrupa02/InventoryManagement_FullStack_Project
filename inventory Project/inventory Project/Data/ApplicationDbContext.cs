using Microsoft.EntityFrameworkCore;
using inventory_backend.Models;
using System.Collections.Generic;

namespace inventory_backend.Data
{
    public class ApplicationDbContext : DbContext
    {
        public ApplicationDbContext(DbContextOptions<ApplicationDbContext> options) : base(options) { }

        public DbSet<InventoryItem> InventoryItems { get; set; }
    }
}