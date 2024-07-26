using DietSaint.Models;

namespace DietSaint.Interfaces
{
    public interface IVitaminRepository
    {
        Vitamin GetVitaminByFoodId(int foodId);
    }
}
