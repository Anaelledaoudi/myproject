using BL;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Net;
using System.Net.Http;
using System.Web.Http;
using System.Web.Http.Cors;

namespace API.Controllers
{
    [EnableCors("*","*","*")]
    public class StyleController : ApiController
    {
        StyleBL clothingStyleBL = new StyleBL();

        public IHttpActionResult GetAllClothingStyles()
        {
            return Ok(clothingStyleBL.GetAllClothingStyles());


        }
    }
}
