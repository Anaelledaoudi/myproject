using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace DTO
{
   public class ClothingDTO
    {
        public long ClothingId { get; set; }
        public long User_Id { get; set; }
        public long Cat_Id { get; set; }
        public string ImageLink { get; set; }
        public string Pattern { get; set; }
        public string Size { get; set; }
        public string Color { get; set; }
        public string Favorite { get; set; }
        public string season { get; set; }
        public string style { get; set; }


        public List<Clothing_StyleDTO> ClothingStyles { get; set; }
        public List<Clothing_SeasonDTO> ClothingSeasons { get; set; }


    }
}
