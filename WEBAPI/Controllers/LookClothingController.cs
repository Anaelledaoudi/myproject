using System;
using System.Collections.Generic;
using System.Linq;
using System.Net;
using System.Net.Http;
using System.Web.Http;

namespace API.Controllers
{
    public class LookClothingController : ApiController
    {
        // GET: api/LookClothing
        public IEnumerable<string> Get()
        {
            return new string[] { "value1", "value2" };
        }

        // GET: api/LookClothing/5
        public string Get(int id)
        {
            return "value";
        }

        // POST: api/LookClothing
        public void Post([FromBody]string value)
        {
        }

        // PUT: api/LookClothing/5
        public void Put(int id, [FromBody]string value)
        {
        }

        // DELETE: api/LookClothing/5
        public void Delete(int id)
        {
        }
    }
}
