using DietSaint.Models;

namespace DietSaint.Interfaces
{
    public interface IFoodRepository
    {

     public List<Food> SearchFoodByName(string searchQuery);

    public bool FoodExists(int id);
     public Food GetFoodByName(string foodName);

     public Food GetFoodById(int id);     

    }
}
