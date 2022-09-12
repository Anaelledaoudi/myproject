using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;
using System.Web.Http;
using DAL;
using System.Web;
using System.Web.Hosting;
using DTO;
using AutoMapper;

namespace BL
{
    public class UserBL
    {
        UserDAL userDAL = new UserDAL();
        public UserBL()
        {
            var config = new MapperConfiguration(cfg =>
                       cfg.CreateMap<User, UserDTO>()
                   );
        }

        public UserDTO GetUser(string email)
        {
            try
            {
                User user = userDAL.GetUser(email);
                if (user != null)
                {
                    UserDTO userr = new UserDTO();
                    userr.Gmail = user.Gmail;
                    userr.DateOfBorn = user.DateOfBorn;
                    userr.Name = user.Name;
                    userr.Min = user.Min;
                    userr.Password = user.Password;
                    userr.UserId = user.UserId;
                    return userr;
                }
                else
                    return null;
            }
            catch (Exception e)
            {
                return null;
                throw e;
            }

            
            // return mapper.Map<User, UserDTO>(user);
        }
        public bool Register(UserDTO user)
        {
            User userr = new User();
            userr.Gmail = user.Gmail;
            userr.DateOfBorn = user.DateOfBorn;
            userr.Name = user.Name;
            userr.Min = user.Min;
            userr.Password = user.Password; 
            userr.Tsniut = "blabla";


            return userDAL.Register(userr);
        }
    }
}
