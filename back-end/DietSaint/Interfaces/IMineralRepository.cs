using DietSaint.Models;

namespace DietSaint.Interfaces
{
    public interface IMineralRepository
    {
        Mineral GetMineralByFoodId(int foodId);

    }
}
