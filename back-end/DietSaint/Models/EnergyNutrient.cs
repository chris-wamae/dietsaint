using DietSaint.Models;

namespace DietSaint.Models
{
    public class EnergyNutrient
    {

     public int Id { get; set; }    

     public string Starch { get; set; }  
        
     public string Lactose { get; set; }

     public string Calories { get; set; }   

     public string Sugars { get; set; }
        
    public string Carbohydrate { get; set; }

    public int FoodId { get; set; } 

    public Food Food { get; set; }

    }
}
