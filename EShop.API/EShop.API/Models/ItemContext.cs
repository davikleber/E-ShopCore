using Microsoft.EntityFrameworkCore;

namespace EShop.API.Models
{
    public class ItemContext : DbContext
    {
        public ItemContext(DbContextOptions<ItemContext> options)
            : base(options)
        {
        }
        public DbSet<Item> Items { get; set; }

        protected override void OnModelCreating(ModelBuilder modelBuilder)
        {
            modelBuilder.Entity<Item>().Property(p => p.Price).HasColumnType("decimal(18,2)");
        }
    }
}
