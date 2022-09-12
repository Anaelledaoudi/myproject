using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace DAL
{
    public class SeasonDAL
    {
        public List<Season> GetAllClothingSeasons()
        {
            using (ClothinkDBEntities db = new ClothinkDBEntities())
            {
                return db.Seasons.ToList();
            }
        }
    }
}
