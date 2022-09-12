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
    public class CategoryBL
    {
        CategoryDAL categoryDAL = new CategoryDAL();
        IMapper mapper;
        public CategoryBL()
        {
            var config = new MapperConfiguration(cfg =>
            {
                cfg.AddProfile<MapperConfig>();
            });
            mapper = config.CreateMapper();
        }

        public List<CategoryDTO> GetAllCategories()
        {
            List<Category> categories = categoryDAL.GetAllCategories();
            return mapper.Map<List<Category>, List<CategoryDTO>>(categories);
        }
    }
}
