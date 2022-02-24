using System.ComponentModel.DataAnnotations;

namespace WatchList.Models
{
	public class Rocket
    {
        public int Id { get; set; } 
        [Required]
        public string Name { get; set; }
        public string Description { get; set; }
        public string Image { get; set; }
    }
}