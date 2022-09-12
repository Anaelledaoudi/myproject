using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace DTO
{
   public class LookDTO
    {
        public long LookId { get; set; }
        public long User_Id { get; set; }
        public System.DateTime Date { get; set; }
        public Nullable<bool> LikeOrNot { get; set; }
        public bool Wore { get; set; }

        public void likeLook(LookDTO lookDTO)
        {
            LikeOrNot = true;
        }



    }
}
