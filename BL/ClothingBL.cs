using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;
using System.Web.Http;
using DAL;
using System.Web;
using System.Web.Hosting;
using DTO;
using AutoMapper;

namespace BL
{
    public class ClothingBL
    {

        ClothingDAL clothingDAL = new ClothingDAL();
        IMapper mapper;
        public ClothingBL()
        {
            var config = new MapperConfiguration(cfg =>
            {
                cfg.AddProfile<MapperConfig>();
            });
            mapper = config.CreateMapper();
        }

        public List<ClothingDTO> GetAllClothing(long idUser)
        {
            List<Clothing> clothings = clothingDAL.getAllClothing(idUser);
            List<ClothingDTO> listToReturn = new List<ClothingDTO>();
            ClothingDTO temp = new ClothingDTO();
            foreach (Clothing item in clothings)
            {
                temp = mapper.Map<ClothingDTO>(item);
                listToReturn.Add(temp);
            }
            return listToReturn;
        }

        public bool Deletecloth(long idCloth)
        {
            bool isDeletSucceed = clothingDAL.deletCloth(idCloth);
            return isDeletSucceed;
        }
        public bool DeleteLook(long idLook)
        {
            bool isDeletSucceed = clothingDAL.deletLook(idLook);
            return isDeletSucceed;
        }
        public bool clothIsFavorite(long idCloth)
        {
            bool clothIsFavorite = clothingDAL.clothIsFavorite(idCloth);
            return clothIsFavorite;
        }
        public bool lookIsFavorite(long idLook)
        {
            bool lookIsFavorite = clothingDAL.lookIsFavorite(idLook);
            return lookIsFavorite;
        }

        public List<Clothing> getAllBycategory(Category category, long userId)
        {
            return clothingDAL.getClothByCategory(category, userId);

        }
        public List<Clothing> getAllBySeason(string season)
        {
            List<Clothing> clothesBySeason = new List<Clothing>();
            return clothingDAL.getClothBySeason(season, clothesBySeason);
        }

        public List<Clothing> getAllByFavorite()
        {
            List<Clothing> clothesByFav = new List<Clothing>();
            return clothingDAL.getClothByFavorite();
        }
        public List<LookClothVm> getFavoriteLooks(long userId)
        {
            List<LookClothVm> LookClothVmList = new List<LookClothVm>();
            LookClothVmList = getLooks(userId);
            foreach (LookClothVm item in LookClothVmList.ToList())
            {
                if (!item.LikeOrNot)
                    LookClothVmList.Remove(item);
            }
            return LookClothVmList;
        }
        public bool saveOutfit(LookClothVm look)
        {
            //bool res= clothingDAL.saveLook(look);
            //return res;
            return true;
        }


        public List<LookClothVm> getLooks(long userId)
        {
            List<LookClothVm> LookClothVmList = new List<LookClothVm>();
            List<Look> looks = new List<Look>();
            looks = clothingDAL.getLooks(userId);

            foreach (Look lookItem in looks)
            {
                LookClothVm tempLookClothVm = new LookClothVm();
                List<Look_Clothing> looksClothes = new List<Look_Clothing>();

                tempLookClothVm.LookId = lookItem.LookId;
                tempLookClothVm.User_Id = lookItem.User_Id;
                tempLookClothVm.clothingList = new List<ClothingDTO>();
                looksClothes = clothingDAL.getLooksclothes(lookItem.LookId);
                if (looksClothes != null && looksClothes.Count > 0)
                {
                    foreach (Look_Clothing lookClothItem in looksClothes)
                    {
                        Clothing tempCloth = new Clothing();
                        tempCloth = clothingDAL.getclothById(lookClothItem.Clothing_Id);
                        tempLookClothVm.clothingList.Add(mapper.Map<ClothingDTO>(tempCloth));
                    }
                    LookClothVmList.Add(tempLookClothVm);
                }
            }
            return LookClothVmList;

        }
    }
}
