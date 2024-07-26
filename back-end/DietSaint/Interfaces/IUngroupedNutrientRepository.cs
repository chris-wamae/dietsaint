using DietSaint.Models;

namespace DietSaint.Interfaces
{
    public interface IUngroupedNutrientRepository
    {
        UngroupedNutrient GetUngroupedNutrientByFoodId(int foodId);
    }
}
