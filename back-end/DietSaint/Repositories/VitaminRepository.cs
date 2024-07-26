using DietSaint.Data;
using DietSaint.Interfaces;
using DietSaint.Models;

namespace DietSaint.Repositories
{
    public class VitaminRepository : IVitaminRepository 
    {
        DataContext _dataContext;

        public VitaminRepository(DataContext dataContext) 
        {
        _dataContext = dataContext;
        }

        public Vitamin GetVitaminByFoodId(int foodId) 
        {

         return _dataContext.Vitamins.Where(v => v.FoodId == foodId).FirstOrDefault();

        }   

    }
}
