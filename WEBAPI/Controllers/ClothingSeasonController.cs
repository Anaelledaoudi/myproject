using System;
using System.Collections.Generic;
using System.Linq;
using System.Net;
using System.Net.Http;
using System.Web.Http;

namespace API.Controllers
{
    public class ClothingSeasonController : ApiController
    {
        // GET: api/ClothingSeason
        public IEnumerable<string> Get()
        {
            return new string[] { "value1", "value2" };
        }

        // GET: api/ClothingSeason/5
        public string Get(int id)
        {
            return "value";
        }

        // POST: api/ClothingSeason
        public void Post([FromBody]string value)
        {
        }

        // PUT: api/ClothingSeason/5
        public void Put(int id, [FromBody]string value)
        {
        }

        // DELETE: api/ClothingSeason/5
        public void Delete(int id)
        {
        }
    }
}
