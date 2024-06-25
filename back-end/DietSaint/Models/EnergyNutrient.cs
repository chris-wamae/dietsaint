using Models;

namespace DietSaint.Models
{
    public class EnergyNutrient
    {

     public int Id { get; set; }    

     public string Starch { get; set; }  
        
     public string Lactose { get; set; }

     public string Calories { get; set; }   

     public string Sugars { get; set; }
        
    public string Carbohydrates { get; set; }

        public Food Food { get; set; }

    }
}
