using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace DAL
{
    public class CategoryDAL
    {
        public List<Category> GetAllCategories()
        {
            using (ClothinkDBEntities db = new ClothinkDBEntities())
            {
                return db.Categories.ToList();
            }
        }

        public Category FindByCatName(string catName)
        {
            using (ClothinkDBEntities db = new ClothinkDBEntities())
            {
                return db.Categories.Where(c => c.CatName == catName).Single();
            }

        }
    }
}
