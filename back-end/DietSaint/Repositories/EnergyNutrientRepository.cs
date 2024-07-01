using DietSaint.Data;
using DietSaint.Interfaces;
using DietSaint.Models;

namespace DietSaint.Repositories
{
    public class EnergyNutrientRepository : IEnergyNutrientRepository
    {   
        private readonly DataContext _dataContext;
        public EnergyNutrientRepository(DataContext dataContext) 
        {
        _dataContext = dataContext;
        }



        public EnergyNutrient GetFoodEnergyNutrientByFoodId(int id) 
        {
          
      
            return _dataContext.EnergyNutrients.Where(en => en.FoodId == id).FirstOrDefault();
           
        }


    }
}
