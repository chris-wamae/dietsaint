using DietSaint.Interfaces;
using DietSaint.Models;
using DietSaint.Data;

namespace DietSaint.Repositories
{
    public class FoodRepository : IFoodRepository
    {
     private readonly  DataContext _dataContext;
        
    public FoodRepository(DataContext dataContext) 
    {
        _dataContext = dataContext;
    }
       
    public bool FoodExists(int id)
        {
            return _dataContext.Foods.Any(f => f.Id == id);
        }

    public List<Food> SearchFoodByName(string searchQuery)
        {
            return _dataContext.Foods.Where(f => f.Name.Substring(0,searchQuery.Length).ToLower() == searchQuery.ToLower()).ToList();
        }

        public Food GetFoodByName(string foodName)
        {
            return _dataContext.Foods.Where(f => f.Name == foodName).FirstOrDefault();
        }

        public Food GetFoodById(int id) 
        {
            return _dataContext.Foods.Where(f => f.Id == id).FirstOrDefault();
        }


    }
}
