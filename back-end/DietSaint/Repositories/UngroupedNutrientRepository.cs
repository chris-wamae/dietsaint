using DietSaint.Data;
using DietSaint.Interfaces;
using DietSaint.Models;

namespace DietSaint.Repositories
{
    public class UngroupedNutrientRepository : IUngroupedNutrientRepository
    {
        DataContext _dataContext;

        UngroupedNutrientRepository(DataContext dataContext) 
        {
        _dataContext = dataContext;
        }

        public UngroupedNutrient GetUngroupedNutrientByFoodId(int foodId)
        {
            return _dataContext.UngroupedNutrients.Where(u => u.FoodId == foodId).FirstOrDefault();
        }



    }
}
