using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;
using System.Data.Entity;

namespace DAL
{
  public  class StyleDAL
    {
        public List<Style> GetAllClothingStyles()
        {
            using(ClothinkDBEntities db=new ClothinkDBEntities())
            {
                return db.Styles.Include(s=>s.Style_Type).ToList();
            }
        }
    }
}
