using Microsoft.AspNetCore.Mvc;
using DietSaint.Interfaces;
using DietSaint.Repositories;
using DietSaint.Models;

namespace DietSaint.Controllers
{
    [Route("food")]
    public class FoodController : ControllerBase
    {
        private readonly IFoodRepository _foodRepository;

        public FoodController(IFoodRepository foodRepository)
        {
            _foodRepository = foodRepository;
        }

        [HttpGet("search-food-by-name")]
        public IActionResult SearchFoodByName(string name)
        {
            if (!ModelState.IsValid)
                return BadRequest(ModelState);

            if (name == null || name == "")
                return BadRequest("Invalid search query");

            var searchResult = _foodRepository.SearchFoodByName(name);

            return Ok(searchResult);
        }
    }
}
