using System;
using DAL;
using DTO;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;
using AutoMapper;

namespace BL
{
    public class SeasonBL
    {
        SeasonDAL seasonDAL = new SeasonDAL();
        IMapper mapper;
        public SeasonBL()
        {
            var config = new MapperConfiguration(cfg =>
            {
                cfg.AddProfile<MapperConfig>();
            });
            mapper = config.CreateMapper();
        }

        public List<SeasonDTO> GetAllSeasons()
        {
            List<Season> seasons = seasonDAL.GetAllClothingSeasons();
            return mapper.Map<List<Season>, List<SeasonDTO>>(seasons);
        }
    }
}
