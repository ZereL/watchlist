using Microsoft.EntityFrameworkCore;
using WatchList.Models;

namespace WatchList.Data
{
	public class ApplicationContext : DbContext
    {
        public ApplicationContext(DbContextOptions<ApplicationContext> options) : base(options)
        {
        }

        public DbSet<Rocket> Rockets { get; set; }
    }
}