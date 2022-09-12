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
    [EnableCors("*", "*", "*")]
    public class SeasonController : ApiController
    {
        SeasonBL seasonBL = new SeasonBL();

        public IHttpActionResult GetAllClothingSeasons()
        {
            return Ok(seasonBL.GetAllSeasons());


        }
    }
}
