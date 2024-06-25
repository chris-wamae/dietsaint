using Models;

namespace DietSaint.Models
{
    public class UngroupedNutrient
    {

    public int Id { get; set; }

    public string Protein { get; set; }

    public string Water { get; set; }
        
    public string Fiber { get; set; }

        public Food Food { get; set; }

    }
}
