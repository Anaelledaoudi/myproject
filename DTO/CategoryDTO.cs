using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace DTO
{
  public class CategoryDTO
    {
        public long CatId { get; set; }
        public string CatName { get; set; }
        public string Min { get; set; }
        
        public CategoryDTO(long catId, string catName)
        {
            CatId = catId;
            CatName = catName;

        }
        public CategoryDTO()
        {

        }
    }
}
