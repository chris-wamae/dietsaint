using Models;

namespace DietSaint.Models
{
    public class Vitamin
    {
        public int Id { get; set; } 

        public string VitaminB6 { get; set; }

        public string VitaminC { get; set; }

        public string VitaminA { get; set; }

        public Food Food { get; set; }
    }
}
