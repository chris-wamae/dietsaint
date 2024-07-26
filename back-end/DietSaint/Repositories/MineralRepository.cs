using DietSaint.Data;
using DietSaint.Interfaces;
using DietSaint.Models;

namespace DietSaint.Repositories
{
    public class MineralRepository : IMineralRepository
    {
        DataContext _dataContext;

        public MineralRepository(DataContext dataContext) 
        {
        _dataContext = dataContext;
        }

        public Mineral GetMineralByFoodId(int foodId)
        {
            return _dataContext.Minerals.Where(m => m.FoodId == foodId).FirstOrDefault();
        }

    }
}
