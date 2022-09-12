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
    public class MapperConfig : AutoMapper.Profile
    {
        public MapperConfig()
        {
            // Clothing

            CreateMap<Clothing, ClothingDTO>();

            CreateMap<ClothingDTO, Clothing>();


            //User

            CreateMap<User, UserDTO>();

            CreateMap<UserDTO, User>();


            //Look


            CreateMap<Look, LookDTO>();

            CreateMap<LookDTO, Look>();


            //Look_Clothing


            CreateMap<Look_Clothing, Look_ClothingDTO>();

            CreateMap<Look_ClothingDTO, Look_Clothing>();


            //Category


            CreateMap<Category, CategoryDTO>();

            CreateMap<CategoryDTO, Category>();


            //Category_Model
           

            CreateMap<Category_Model, Category_ModelDTO>();

            CreateMap<Category_ModelDTO, Category_Model>();


            //Model


            CreateMap<Model, ModelDTO>();

            CreateMap<ModelDTO, Model>();


            // Clothing_Season


            CreateMap<Clothing_Season, Clothing_SeasonDTO>();

            CreateMap<Clothing_SeasonDTO, Clothing_Season>();


            // Clothing_Style

            
                CreateMap<Clothing_Style, Clothing_StyleDTO>();

                CreateMap<Clothing_StyleDTO, Clothing_Style>();

            
                // Style


                CreateMap<Style, StyleDTO>();

                CreateMap<StyleDTO, Style>();


                // Season


                CreateMap<Season, SeasonDTO>();

                CreateMap<SeasonDTO, Season>();







            
        }
    }
}
