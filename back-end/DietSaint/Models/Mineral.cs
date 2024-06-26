using Models;

namespace DietSaint.Models
{
    public class Mineral
    {

    public int Id { get; set; }

    public string Magnesium { get; set; }

    public string Calcium { get; set; }

    public string Potassium { get; set; }   

    public string Zinc {get ; set; }    

    public string Iron { get; set; }

    public int FoodId { get; set; }

    public Food Food { get; set; }

    }
}
