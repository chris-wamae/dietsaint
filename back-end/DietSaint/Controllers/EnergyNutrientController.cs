using DietSaint.Interfaces;
using Microsoft.AspNetCore.Mvc;

namespace DietSaint.Controllers
{
    [Route("energy-nutrient")]
    public class EnergyNutrientController : ControllerBase
    {
        private readonly IFoodRepository _foodRepository;
        private readonly IEnergyNutrientRepository _energyNutrientRepository;
        public EnergyNutrientController(IEnergyNutrientRepository energyNutrientRepository, IFoodRepository foodRepository)
        {
            _energyNutrientRepository = energyNutrientRepository;
            _foodRepository = foodRepository;
        }

        [HttpGet("by-food-id")]
        public IActionResult GetFoodEnergyNutrientById(int id)
        {
            if(!ModelState.IsValid)
               return BadRequest(ModelState);

            if(!_foodRepository.FoodExists(id))
                return NotFound("A food with that Id does not exist");

            var energyNutrient  = _energyNutrientRepository.GetFoodEnergyNutrientByFoodId(id);

            if(energyNutrient == null)
            return BadRequest(ModelState);

            return Ok(energyNutrient);
        }
    }
}
