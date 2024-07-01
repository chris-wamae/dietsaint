using DietSaint.Models;
using Microsoft.EntityFrameworkCore;

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

        //protected override void OnModelCreating(ModelBuilder modelBuilder)
        //{
        //    base.OnModelCreating(modelBuilder);

        //    //modelBuilder.Entity<Food>().HasMany(f => f.Vitamins);
        //    //modelBuilder.Entity<Food>().HasMany(f => f.Minerals);
        //    //modelBuilder.Entity<Food>().HasMany(f => f.EnergyNutrients);
        //    //modelBuilder.Entity<Food>().HasMany(f => f.UngroupedNutrients);

        //}


    }
}
