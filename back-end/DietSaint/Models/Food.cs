using DietSaint.Models;

namespace Models
{

public class Food
    {
        public int Id { get; set; }

        public string Name { get; set; }

        public string Description { get; set; }

        public IEnumerable<Mineral> Minerals;

        public IEnumerable<Vitamin> Vitamins;

        public IEnumerable<EnergyNutrient> EnergyNutrients;

        public IEnumerable<UngroupedNutrient> UngroupedNutrients;


    }


}