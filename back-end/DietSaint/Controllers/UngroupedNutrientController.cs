using DietSaint.Data;
using DietSaint.Interfaces;
using Microsoft.AspNetCore.Mvc;
using System.Data;

namespace DietSaint.Controllers
{

    [Route("ungrouped-nutrient")]
    public class UngroupedNutrientController : ControllerBase
    {

        DataContext _dataContext;
        IUngroupedNutrientRepository _ungroupedNutrientRepository;
        IFoodRepository _foodRepository;
    public UngroupedNutrientController(DataContext dataContext, IUngroupedNutrientRepository ungroupedNutrientRepository,IFoodRepository foodRepository) 
        {
        _dataContext = dataContext;
        _ungroupedNutrientRepository = ungroupedNutrientRepository;
                _foodRepository = foodRepository;   
        }

        [Route("by-food-id")]
        public IActionResult GetUngroupedNutrientByFoodId(int id) 
        {
            if (!ModelState.IsValid) 
            { 
            return BadRequest(ModelState);
            }

            if (!_foodRepository.FoodExists(id))
            { 
             return NotFound($"A food with id {id} does not exist"); 
            }

            var ungroupedNutrient = _ungroupedNutrientRepository.GetUngroupedNutrientByFoodId(id);

            if (ungroupedNutrient == null)
            {
                return BadRequest(ModelState);
            }

            return Ok(ungroupedNutrient);   

        }


    }
}
