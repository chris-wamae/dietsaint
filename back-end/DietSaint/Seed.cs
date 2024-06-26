using DietSaint.Models;
using DietSaint.Data;
using Models;
using System.Text.Json;
namespace DietSaint
{
    public class Seed
    {
        private readonly DataContext _dataContext;
        private readonly ILogger<Seed> _logger;
        private readonly string _foodDataJson;




        public Seed(DataContext dataContext, ILogger<Seed> logger)
        {
            _dataContext = dataContext;
            _logger = logger;
            _foodDataJson = File.ReadAllText("./Data/foodDescriptionsAndNutrients.json");
        }

        public void SeedDataContext()
        {   

            if (!_dataContext.Foods.Any())
            {
                List<Food> foodList = JsonSerializer.Deserialize<List<Food>>(_foodDataJson);

                _dataContext.AddRange(foodList);
                _dataContext.SaveChanges();
                //     var food = new Food()
                //     {   
                //         Name = "Test",
                //         Description = "TestFood",
                //         EnergyNutrient = 

                //             new EnergyNutrient()
                //             {      
                //                 Starch = "Test",
                //                 Lactose = "Test",
                //                 Calories = "Test",
                //                 Sugars = "Test",
                //                 Carbohydrate = "Test",
                //             }
                //         ,
                //         Mineral =

                //             new Mineral()
                //             {        
                //                 Magnesium = "Test",
                //                 Calcium = "Test",
                //                 Potassium = "Test",
                //                 Zinc = "Test",
                //                 Iron = "Test",
                //             }
                //         ,
                //         UngroupedNutrient = 
                //             new UngroupedNutrient()
                //             {

                //                 Protein = "Test",
                //                 Water = "Test",
                //                 Fiber = "Test"
                //             }
                //         ,
                //         Vitamin = 
                //             new Vitamin()
                //             {

                //                 VitaminB6 = "Test",
                //                 VitaminC = "Test",
                //                 VitaminA = "Test"
                //             }
                //     };

                //     _dataContext.Foods.Add(food);
                //     _dataContext.SaveChanges();

            }

            //else if (_dataContext.Foods.Any())
            //{
            //    var foods = _dataContext.Foods.ToList();

            //    _dataContext.Foods.RemoveRange(foods);

            //    _dataContext.SaveChanges();

            //}
        }
    }
}
