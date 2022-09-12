using System;
using System.Collections.Generic;
using System.Linq;
using System.Net;
using System.Net.Http;
using System.Web.Http;

namespace API.Controllers
{
    public class ModelController : ApiController
    {
        // GET: api/Model
        public IEnumerable<string> Get()
        {
            return new string[] { "value1", "value2" };
        }

        // GET: api/Model/5
        public string Get(int id)
        {
            return "value";
        }

        // POST: api/Model
        public void Post([FromBody]string value)
        {
        }

        // PUT: api/Model/5
        public void Put(int id, [FromBody]string value)
        {
        }

        // DELETE: api/Model/5
        public void Delete(int id)
        {
        }
    }
}
