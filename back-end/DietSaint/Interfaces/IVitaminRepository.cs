using DietSaint.Models;

namespace DietSaint.Interfaces
{
    public interface IVitaminRepository
    {
        public Vitamin GetVitaminByFoodId(int foodId);
    }
}
