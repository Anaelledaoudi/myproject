using System;
using System.Collections.Generic;
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
    public class UserDAL
    {
        public User GetUser(string email)
        {
            using (ClothinkDBEntities db = new ClothinkDBEntities())
            {
                return db.Users.Where(u => u.Gmail == email).FirstOrDefault();
            }
        }
        public bool Register(User user)
        {
            using (ClothinkDBEntities db = new ClothinkDBEntities())
            {
                db.Users.Add(user);
                try
                {
                    db.SaveChanges();
                    return true;
                }
                catch (Exception e)
                {
                    throw e;
                }
            }
        }
    }
}
