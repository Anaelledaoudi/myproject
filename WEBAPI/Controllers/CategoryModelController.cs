﻿using System;
using System.Collections.Generic;
using System.Linq;
using System.Net;
using System.Net.Http;
using System.Web.Http;

namespace API.Controllers
{
    public class CategoryModelController : ApiController
    {
        // GET: api/CategoryModel
        public IEnumerable<string> Get()
        {
            return new string[] { "value1", "value2" };
        }

        // GET: api/CategoryModel/5
        public string Get(int id)
        {
            return "value";
        }

        // POST: api/CategoryModel
        public void Post([FromBody]string value)
        {
        }

        // PUT: api/CategoryModel/5
        public void Put(int id, [FromBody]string value)
        {
        }

        // DELETE: api/CategoryModel/5
        public void Delete(int id)
        {
        }
    }
}
