using BL;
using DAL;
using DTO;
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

namespace API.Controllers

{
    //[EnableCors(origins: "http://mywebclient.azurewebsites.net", headers: "*", methods: "*")]
    [EnableCors("*", "*", "*")]
    public class ClothingController : ApiController
    {
        ClothingBL clothingBL = new ClothingBL();
        [HttpGet]
        public IHttpActionResult GetAllClothing(long idUser)
        {
            List<ClothingDTO> clothes = clothingBL.GetAllClothing(idUser);

            if (clothes != null)
            {
                return Ok(clothes);
            }
            else
                return BadRequest();
        }

        public IHttpActionResult GetByCategory(Category category, long userId)
        {
            return Ok(clothingBL.getAllBycategory(category, userId));
        }
        public IHttpActionResult GetBySeason(string season)
        {
            return Ok(clothingBL.getAllBySeason(season));
        }
        public IHttpActionResult GetByFavorite()
        {
            return Ok(clothingBL.getAllByFavorite());
        }
        
        [HttpGet]
        public IHttpActionResult Deletecloth(long idCloth)
        {
            return Ok(clothingBL.Deletecloth(idCloth));
        }
        [HttpGet]
        public IHttpActionResult Deletelook(long idLook)
        {
            return Ok(clothingBL.DeleteLook(idLook));
        }
        [HttpGet]
        public IHttpActionResult clothIsFavorite(long idcloth)
        {
            return Ok(clothingBL.clothIsFavorite(idcloth));
        }
        [HttpGet]
        public IHttpActionResult lookIsFavorite(long idLook)
        {
            return Ok(clothingBL.lookIsFavorite(idLook));
        }
        [HttpGet]
        public IHttpActionResult getFavoriteLooks(long userId)
        {
            return Ok(clothingBL.getFavoriteLooks(userId));
        }
        [HttpPost]
        public IHttpActionResult PostFile()
        {
            ImageCheck imageCheck = new ImageCheck();
            HttpPostedFile imageData = HttpContext.Current.Request.Files[0];
            string basePath = HostingEnvironment.MapPath("/Images/" + imageData.FileName);
            imageData.SaveAs(basePath);

            //האוביקט עם שאר המידע שהמשתמש הכניס-צבע עונה וכו
            string clothDetails = HttpContext.Current.Request.Form[0];

            bool res = imageCheck.Check(basePath, HostingEnvironment.MapPath("/keys.json"), clothDetails);
            return Ok(res);
        }
        [HttpPost]
        public IHttpActionResult saveOutfit([FromBody] LookClothVm look)
        {
            return Ok(clothingBL.saveOutfit(look));
        }
        
        [HttpGet]
        public IHttpActionResult getLooks(long userId)
        {
            return Ok(clothingBL.getLooks(userId));

        }


        // POST: api/Clothing
        //public void Post([FromBody] string value)
        //{


        //}
    }

}
