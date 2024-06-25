using DietSaint.Models;
using Microsoft.EntityFrameworkCore;
using Models;

namespace DietSaint.Data
{
    public class DataContext : DbContext
    {
    public DataContext(DbContextOptions<DataContext> options) : base(options) { }

    public DbSet<Food> Foods { get; set; }

    public DbSet<EnergyNutrient> EnergyNutrients { get; set; }  

    public DbSet<Mineral> Minerals { get; set; }

    public DbSet<UngroupedNutrient> UngroupedNutrients { get; set;}

    public DbSet<Vitamin> Vitamins { get; set; }
        

    }
}
