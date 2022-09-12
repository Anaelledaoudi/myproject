using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace DTO
{
    public class Clothing_StyleDTO
    {
        public long Clothing_StyleId { get; set; }
        public long Clothing_Id { get; set; }
        public long Style_Id { get; set; }
        public string Weather { get; set; }

    }
}
