using System;
using System.Collections.Generic;
using System.Data.Entity;
using System.IO;
using System.Linq;
using System.Net;
using System.Net.Http;
using System.Net.Http.Headers;
using System.Text;
using System.Threading.Tasks;
using System.Web;
using System.Web.Hosting;
using static System.Net.Mime.MediaTypeNames;

namespace DAL
{
    //git try
    public class ClothingDAL
    {
        private CorrespondingColors correspondingColors = new CorrespondingColors();

        public long AddClothing(Clothing clothing)
        {

            using (ClothinkDBEntities db = new ClothinkDBEntities())
            {
                db.Clothings.Add(clothing);
                try
                {
                    db.SaveChanges();
                    return clothing.ClothingId;

                }
                catch (Exception e)
                {
                    string x = e.Message;
                    return -1;
                }
            }
        }
        //public List<Clothing> getAllClothing()
        //{
        //    string rellocation = Path.Combine(HttpRuntime.AppDomainAppVirtualPath,
        //    string.Format("/Images/{0}", "BrownHazait.jpg"));
        //    var x = rellocation;
        //    using (ClothinkDBEntities db = new ClothinkDBEntities())
        //    {
        //        return mapper.Map<List<Clothing>, List<ClothingDTO>>(db.Clothings.ToList());
        //    }
        //}
        public List<Clothing> getAllClothing(long idUser)
        {
            string rellocation = Path.Combine(HttpRuntime.AppDomainAppVirtualPath,
            string.Format("/Images/{0}", "BrownHazait.jpg"));
            var x = rellocation;
            using (ClothinkDBEntities db = new ClothinkDBEntities())
            {
                return db.Clothings.Where(s => s.User_Id == idUser).ToList();
            }
        }
        public bool deletCloth(long id)
        {
            using (ClothinkDBEntities db = new ClothinkDBEntities())
            {
                var findClothToDelete = db.Clothings.Where(e => e.ClothingId == id).First();
                try
                {
                    db.Clothings.Remove(findClothToDelete);
                    db.SaveChanges();
                    return true;

                }
                catch (Exception e)
                {
                    return false;
                }

            }
        }
        public bool deletLook(long id)
        {
            using (ClothinkDBEntities db = new ClothinkDBEntities())
            {
                var findLookToDelete = db.Looks.Where(e => e.LookId == id).First();
                try
                {
                    db.Looks.Remove(findLookToDelete);
                    db.SaveChanges();
                    return true;

                }
                catch (Exception e)
                {
                    return false;
                }

            }
        }
        public bool lookIsFavorite(long idLook)
        {
            using (ClothinkDBEntities db = new ClothinkDBEntities())
            {
                try
                {
                    Look findLook = db.Looks.Where(e => e.LookId == idLook).FirstOrDefault();
                    if (findLook != null)
                    {
                        if (findLook.LikeOrNot == null || findLook.LikeOrNot == false)
                            findLook.LikeOrNot = true;
                        else
                            findLook.LikeOrNot = false;
                        db.Looks.Attach(findLook);
                        db.Entry(findLook).State = EntityState.Modified;
                       int s= db.SaveChanges();
                        if(s>0)
                        return true;
                        else return false;

                    }
                    else return false;

                }
                catch (Exception e)
                {
                    return false;
                }

            }
        }
        public bool clothIsFavorite(long idcloth)
        {
            using (ClothinkDBEntities db = new ClothinkDBEntities())
            {
                try
                {
                    var findcloth = db.Clothings.Where(e => e.ClothingId == idcloth).FirstOrDefault();
                    if (findcloth != null)
                    {
                        if (findcloth.Favorite == "true")
                            findcloth.Favorite = "false";
                        else if (findcloth.Favorite == "false" || findcloth.Favorite == null)
                            findcloth.Favorite = "true";
                        db.Clothings.Attach(findcloth);
                        db.Entry(findcloth).State = EntityState.Modified;
                        int c = db.SaveChanges();
                        if (c > 0)
                            return true;
                        else return false;
                    }
                    else return false;

                }
                catch (Exception e)
                {
                    return false;
                }

            }
        }

        public List<Clothing> clothink(string style, string season, long userId)
        {
            List<Clothing> temp;
            List<Clothing> clothink = new List<Clothing>();
            Random rnd = new Random();
            int x = rnd.Next(1, 4);
            CategoryDAL category = new CategoryDAL();

            switch (x)
            {
                case 1:
                    Category c = category.FindByCatName("dress");
                    temp = getClothByCategory(c, userId);
                    temp = getClothBySeason(season, temp);
                    temp = getClothByStyle(temp, style);
                    if (temp != null && temp.Count > 0)
                        clothink.Add(getRndmFirstCloth(temp));
                    break;
                case 2:
                    Category ca = category.FindByCatName("shirt");
                    temp = getClothByCategory(ca, userId);
                    temp = getClothBySeason(season, temp);
                    temp = getClothByStyle(temp, style);
                    if (temp != null && temp.Count > 0)
                        clothink.Add(getRndmFirstCloth(temp));
                    temp.Clear();

                    Category cat = category.FindByCatName("skirt");
                    temp = getClothByCategory(cat, userId);
                    temp = getClothBySeason(season, temp);
                    temp = getClothByStyle(temp, style);
                    if (temp != null && temp.Count > 0)
                        clothink.Add(findByColor(clothink[0].Color, temp));
                    break;
                case 3:
                    Category cc = category.FindByCatName("shirt");
                    temp = getClothByCategory(cc, userId);
                    temp = getClothBySeason(season, temp);
                    temp = getClothByStyle(temp, style);
                    if (temp != null && temp.Count > 0)
                        clothink.Add(getRndmFirstCloth(temp));
                    temp.Clear();

                    Category ct = category.FindByCatName("trouser");
                    temp = getClothByCategory(ct, userId);
                    temp = getClothBySeason(season, temp);
                    temp = getClothByStyle(temp, style);
                    if (temp != null && temp.Count > 0)
                        clothink.Add(findByColor(clothink[0].Color, temp));
                    break;

            }
            if (clothink.Count > 0)
                saveLook(clothink);

            return clothink;

        }
        public List<Clothing> saveLook(List<Clothing> look)
        {
            using (ClothinkDBEntities db = new ClothinkDBEntities())
            {
                Look newLook = new Look();
                newLook.User_Id = look[0].User_Id;
                newLook.Date = DateTime.Now;
                newLook.LikeOrNot = false;
                long lookId = addLook(newLook);
                foreach (Clothing item in look)
                {
                    Look_Clothing cloth = new Look_Clothing();
                    cloth.Look_Id = lookId;
                    cloth.Clothing_Id = item.ClothingId;
                    cloth.LikeOrNot = "false";
                     Random rnd = new Random();
                    cloth.Look_ClothingId = rnd.Next(1, 1000);
                    bool s = addLookClothing(cloth);
                }
                return look;
            }
        }
        public long addLook(Look look)
        {
            using (ClothinkDBEntities db = new ClothinkDBEntities())
            {
                db.Looks.Add(look);
                try
                {
                    db.SaveChanges();
                    return look.LookId;

                }
                catch (Exception e)
                {
                    string x = e.Message;
                    return -1;
                }
            }
        }
        public bool addLookClothing(Look_Clothing look)
        {
            using (ClothinkDBEntities db = new ClothinkDBEntities())
            {
                db.Look_Clothing.Add(look);
                try
                {
                    db.SaveChanges();
                    return true;

                }
                catch (Exception e)
                {
                    string x = e.Message;
                    return false;
                }
            }
        }
        public List<Look> getLooks(long userId)
        {
            using (ClothinkDBEntities db = new ClothinkDBEntities())
            {
                List<Look> looks = db.Looks.Where(x => x.User_Id == userId).ToList();
                return looks;
            }
        }
        public List<Look_Clothing> getLooksclothes(long lookId)
        {
            using (ClothinkDBEntities db = new ClothinkDBEntities())
            {
                List<Look_Clothing> looksclothes = db.Look_Clothing.Where(x => x.Look_Id == lookId).ToList();
                return looksclothes;
            }
        }
        public Clothing getclothById(long clothId)
        {
            using (ClothinkDBEntities db = new ClothinkDBEntities())
            {
                Clothing cloth = db.Clothings.Where(x => x.ClothingId == clothId).FirstOrDefault();
                return cloth;
            }
        }
        /// public add look
        /// delete look
        //return clothing list by category
        public List<Clothing> getClothByCategory(Category category, long userId)
        {
            using (ClothinkDBEntities db = new ClothinkDBEntities())
            {
                List<Clothing> CategoryCloth = db.Clothings.Where(c => c.User_Id == userId).ToList();
                foreach (Clothing item in CategoryCloth.ToList())
                {
                    if (item.Cat_Id != category.CatId)
                    {
                        CategoryCloth.Remove(item);
                    }
                }
                return CategoryCloth;
            }

        }

        public List<Clothing> getClothBySeason(string season, List<Clothing> clothings)
        {
            foreach (var item in clothings.ToList())
            {
                //foreach (var s in item.Clothing_Season)
                //{
                //    if (s.Clothing_SeasonId != season.SeasonId)
                //    {
                //        clothings.Remove(item);
                //    }
                //}
                if (item.season != season)
                {
                    clothings.Remove(item);
                }
            }
            return clothings;
        }
        public List<Clothing> getClothByFavorite()
        {
            using (ClothinkDBEntities db = new ClothinkDBEntities())
            {
                List<Clothing> FavCloth = db.Clothings.ToList();
                foreach (var item in FavCloth.ToList())
                {
                    if (item.Favorite == "true")
                    {
                        FavCloth.Add(item);
                    }
                }
                return FavCloth;
            }

        }

        public List<Clothing> getClothByStyle(List<Clothing> clothings, string style)
        {
            foreach (var item in clothings.ToList())
            {
                if (item.style != style)
                {
                    clothings.Remove(item);
                }
            }
            return clothings;
        }
        public Clothing getRndmFirstCloth(List<Clothing> clothes)
        {
            Random rnd = new Random();
            int x = rnd.Next(0, clothes.Count);
            return clothes[x];
        }
        public Clothing findByColor(string color, List<Clothing> clothes)
        {
            string secColor = correspondingColors.colors[color];
            Random rnd = new Random();
            int x = rnd.Next(0, clothes.Count);
            int i = x;
            do
            {
                if (clothes[i].Color == secColor)
                    return clothes[i];
                i++;
                if (i == clothes.Count + 1)
                {
                    i = 0;
                }
            }
            while (i != x);
            return null;
        }
        public bool AddClothingSeason(Clothing_Season clothing_Season)
        {

            using (ClothinkDBEntities db = new ClothinkDBEntities())
            {
                db.Clothing_Season.Add(clothing_Season);
                try
                {
                    db.SaveChanges();
                    return true;

                }
                catch (Exception e)
                {
                    string x = e.Message;
                    return false;
                }
            }
        }
        public bool AddClothingStyle(Clothing_Style clothing_Style)
        {

            using (ClothinkDBEntities db = new ClothinkDBEntities())
            {
                db.Clothing_Style.Add(clothing_Style);
                try
                {
                    db.SaveChanges();
                    return true;

                }
                catch (Exception e)
                {
                    string x = e.Message;
                    return false;
                }
            }
        }
    }
}
