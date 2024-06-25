using DietSaint.Models;
using DietSaint.Data;
using Models;

namespace DietSaint
{
    public class Seed
    {
     private readonly DataContext _dataContext;
     private readonly ILogger<Seed> _logger;
     public Seed(DataContext dataContext, ILogger<Seed> logger)
        {
            _dataContext = dataContext;
            _logger = logger;
        }

    public void SeedDataContext()
    {
            if (!_dataContext.Foods.Any())
            {
                var food = new Food()
                {
                 Name = "Test",
                 Description = "TestFood",
                 EnergyNutrients = new List<EnergyNutrient>()
                 {
                 new EnergyNutrient()
                 {
                  Calories = "Test",
                  Carbohydrates = "Test",
                  Sugars = "Test",

                 }
                 },
                };
            }
    }

    }
}
