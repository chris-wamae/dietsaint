using DietSaint.Interfaces;
using DietSaint.Models;
using Microsoft.AspNetCore.Mvc;

namespace DietSaint.Controllers
{

    [Route("mineral")]
    public class MineralController : ControllerBase
    {

        IMineralRepository _mineralRepository;
        IFoodRepository _foodRepository;
        public MineralController(IMineralRepository mineralRepository, IFoodRepository foodRepository)
        {
            _mineralRepository = mineralRepository;
            _foodRepository = foodRepository;
        }


        [Route("by-food-id")]
        public IActionResult GetMineralByFoodId(int id)
        {
            if (!ModelState.IsValid)
            {
                return BadRequest(ModelState);
            }

            if (!_foodRepository.FoodExists(id))
            {
                return NotFound($"Food with id of {id} does not exist");
            }

            

            Mineral mineral = _mineralRepository.GetMineralByFoodId(id);

            if (mineral == null)
            {
            return NotFound("Mineral not found");
            }

            return Ok(mineral);
          
        }
    }
}
