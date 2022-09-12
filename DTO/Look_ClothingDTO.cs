using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace DTO
{
   public class Look_ClothingDTO
    {
        public long Look_ClothingId { get; set; }
        public long Look_Id { get; set; }
        public long Clothing_Id { get; set; }
        public string LikeOrNot { get; set; }

    }
}
