using DietSaint.Data;
using DietSaint.Interfaces;
using Microsoft.AspNetCore.Mvc;

namespace DietSaint.Controllers
{

    [Route("vitamin")]
    public class VitaminController : ControllerBase
    {
        
    DataContext _dataContext;
    IFoodRepository _foodRepository;
    IVitaminRepository _vitaminRepository;
    public VitaminController(DataContext dataContext, IFoodRepository foodRepository, IVitaminRepository vitaminRepository) 
     {
            _dataContext = dataContext;
            _foodRepository = foodRepository;   
            _vitaminRepository = vitaminRepository; 
     }

        [Route("by-food-id")]
        public IActionResult GetVitaminByFoodId(int id) 
        {
            if (!ModelState.IsValid)
            { 
            return BadRequest(ModelState);
            }

            if(!_foodRepository.FoodExists(id))
            {
            return NotFound($"A food with the id {id} does not exist");
            }

            var vitamin = _vitaminRepository.GetVitaminByFoodId(id);

            if(vitamin == null)
            {
             return BadRequest(ModelState);
            }

            return Ok(vitamin); 

        }


    }
}
