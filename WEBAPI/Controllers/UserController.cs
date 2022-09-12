using BL;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Net;
using System.Net.Http;
using System.Web;
using System.Web.Hosting;
using System.Web.Http;
using System.Web.Http.Cors;
using WEBAPI;
using DTO;
namespace API.Controllers
{
    [EnableCors("*", "*", "*")]

    public class UserController : ApiController
    {
        UserBL userBL = new UserBL();
        // GET: api/User
        public IEnumerable<string> Get()
        {
            return new string[] { "value1", "value2" };
        }

        // GET: api/User/5
        public string Get(int id)
        {
            return "value";
        }

        // POST api/CheckUser
        [HttpGet]
        public IHttpActionResult login(string email,string password)
        {
            UserDTO user = userBL.GetUser(email);
            if (user.Password == password)
            {
                return Ok(user);
            }
            else
            {
                return NotFound();
            }
        }

        // POST: api/User
        [HttpPost]
        public IHttpActionResult Register([FromBody]UserDTO user )
        {
            return Ok(userBL.Register(user));

        }

        // PUT: api/User/5
        public void Put(int id, [FromBody]string value)
        {
        }

        // DELETE: api/User/5
        public void Delete(int id)
        {
        }
    }
}
