using DietSaint.Models;

namespace DietSaint.Interfaces
{
    public interface IMineralRepository
    {
        public Mineral GetMineralByFoodId(int foodId);

    }
}
