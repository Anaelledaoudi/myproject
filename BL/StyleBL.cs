using AutoMapper;
using DAL;
using DTO;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace BL
{
  public class StyleBL
    {
        StyleDAL styleDAL = new StyleDAL();
        IMapper mapper;
        public StyleBL()
        {
            var config = new MapperConfiguration(cfg =>
            {
                cfg.AddProfile<MapperConfig>();
            });
            mapper = config.CreateMapper();
        }
        public Dictionary<string, List<StyleDTO>>  GetAllClothingStyles()
        {
            List<Style> allStyles = styleDAL.GetAllClothingStyles();

           return allStyles.GroupBy(s => s.Style_Type.StyleTypeName).
                ToDictionary(s => s.Key, v => v.Select(s => mapper.Map<Style, StyleDTO>(s)).ToList());
           
            

        }
    }
}
