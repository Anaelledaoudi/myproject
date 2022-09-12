using BL;
using DAL;
using DTO;
using System;
using System.Collections;
using System.Collections.Generic;
using System.Linq;
using System.Net;
using System.Net.Http;
using System.Web.Http;
using System.Web.Http.Cors;

namespace API.Controllers
{
    [EnableCors("*", "*", "*")]
    public class ClothinkController : ApiController
    {
        ClothinkBl clothinkBl = new ClothinkBl();

 

        // POST: api/Category
        public void Post([FromBody]string value)
        {
        }

        //// get: api/Category/5
        //[HttpGet]
        //public HttpResponseMessage clothink(Style style, Season season,long userId)
        //{
        //    List<Clothing> cloth = clothinkBl.clothink(style, season, userId);

        //    return Request.CreateResponse(HttpStatusCode.OK, cloth);
        //}
        // get: api/Category/5
        [HttpGet]
        public IHttpActionResult clothink(string style, string season, long userId)
        {
            List<ClothingDTO> cloth = clothinkBl.clothink(style, season, userId);

            return Ok(cloth);
        }

        // DELETE: api/Category/5
        public void Delete(int id)
        {
        }
    }
}
