using DietSaint.Models;

namespace DietSaint.Interfaces
{
    public interface IUngroupedNutrientRepository
    {
        public UngroupedNutrient GetUngroupedNutrientByFoodId(int foodId);
    }
}
