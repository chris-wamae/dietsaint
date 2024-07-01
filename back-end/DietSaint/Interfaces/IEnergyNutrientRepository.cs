using DietSaint.Models;

namespace DietSaint.Interfaces
{
    public interface IEnergyNutrientRepository
    {
     
     public EnergyNutrient GetFoodEnergyNutrientByFoodId (int foodId);



    }
}
