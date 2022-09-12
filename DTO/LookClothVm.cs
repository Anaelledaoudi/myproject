using DAL;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace DTO
{
    public class LookClothVm
    {
        public long LookId { get; set; }
        public long User_Id { get; set; }
        public bool LikeOrNot { get; set; }
        public List<ClothingDTO> clothingList{ get; set; }

    }
}
