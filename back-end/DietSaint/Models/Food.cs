using DietSaint.Models;

namespace Models
{

public class Food
    {
        public int Id { get; set; }

        public string Name { get; set; }

        public string Description { get; set; }

        public Mineral Mineral { get; set;}

        public Vitamin Vitamin {get; set;}    

        public EnergyNutrient EnergyNutrient { get; set;} 

        public UngroupedNutrient UngroupedNutrient { get; set;}


    }


}