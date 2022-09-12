using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;
using AutoMapper;
using DAL;
using DTO;

namespace BL
{
    public class ClothinkBl
    {

        ClothingDAL clothingDAL = new ClothingDAL();
        IMapper mapper;
        public ClothinkBl()
        {
            var config = new MapperConfiguration(cfg =>
            {
                cfg.AddProfile<MapperConfig>();
            });
            mapper = config.CreateMapper();
        }

        public List<ClothingDTO> clothink(string style, string season, long userId)
        {
            List<Clothing> clothings= clothingDAL.clothink(style,season,userId);
            List<ClothingDTO> listToReturn = new List<ClothingDTO>();
            ClothingDTO temp = new ClothingDTO();
            foreach (Clothing item in clothings)
            {
                temp = mapper.Map<ClothingDTO>(item);
                listToReturn.Add(temp);
            }

            return listToReturn;
        }


    }
}
