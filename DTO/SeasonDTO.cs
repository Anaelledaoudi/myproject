using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace DTO
{
   public class SeasonDTO
    {
        public long SeasonId { get; set; }
        public string SeasonName { get; set; }
        public string Icon { get; set; }
        public string MinDegree { get; set; }
        public string MaxDegree { get; set; }

    }
}
