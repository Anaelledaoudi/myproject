using DAL;
using Google.Cloud.Vision.V1;
using System;
using Newtonsoft.Json;

namespace BL
{
    public class ImageCheck
    {
        ClothingDAL clothingDAL = new ClothingDAL();


        public bool Check(string path, string serverPath, string clothDetails)
        {
            ClothingVM VMmodel = JsonConvert.DeserializeObject<ClothingVM>(clothDetails);

            Environment.SetEnvironmentVariable("GOOGLE_APPLICATION_CREDENTIALS", serverPath);

            var client = ImageAnnotatorClient.Create();
            var image = Image.FromFile(path);
            var kindOfCloth = client.DetectLocalizedObjects(image)[0].Name;
            //var myClothingColor = client.DetectImageProperties(image).DominantColors.Colors;
            //int everage = myClothingColor.Count % 2 == 0 ? myClothingColor.Count / 2 : myClothingColor.Count / 2 + 1;
            //var dominateColor = myClothingColor[everage].Color;

            Clothing myClothing = new Clothing();
            //myClothing.Color = myClothingColor.ToString().Substring(0,48);
            myClothing.Color = VMmodel.Color;
            myClothing.ImageLink = path;
            myClothing.Pattern = kindOfCloth;
            myClothing.Size = "Slim";
            myClothing.style = VMmodel.ClothingStyles;
            myClothing.User_Id = VMmodel.userId;
            if(kindOfCloth=="Shirt")
                myClothing.Cat_Id = 2;
            if (kindOfCloth == "Top")
                myClothing.Cat_Id = 2;
            if (kindOfCloth == "Outerwear")
                myClothing.Cat_Id = 2;
            
            else if (kindOfCloth == "Dress")
                myClothing.Cat_Id = 1;
            else if (kindOfCloth == "Skirt")
                myClothing.Cat_Id = 3;
            else if (kindOfCloth == "Trouser")
                myClothing.Cat_Id = 6;
            else if (kindOfCloth == "Pants")
                myClothing.Cat_Id = 6;
            else if (kindOfCloth == "Jeans")
                myClothing.Cat_Id = 6;

            if (VMmodel.seasonSummer)
                myClothing.season = "sun";
            else if (VMmodel.seasonWinter)
                myClothing.season = "rain";
            else if (VMmodel.seasonWinterSummer)
                myClothing.season = "cloudsun";
            long Clothing_Id = clothingDAL.AddClothing(myClothing);

            //if (Clothing_Id != -1) //אם הרשומה נוצרה בהצלחה והבגד נוסף לדטה בייס
            //{//אז מכניסים גם את העונות והסטייל לטבלאות המקושרות
            //    if (VMmodel.seasonSummer)
            //    {
            //        Clothing_Season clothing_Season = new Clothing_Season()
            //        {
            //            Clothing_Id = Clothing_Id,
            //            Season_Id = 1
            //        };
            //        clothingDAL.AddClothingSeason(clothing_Season);
            //    }
            //    if (VMmodel.seasonWinter)
            //    {
            //        Clothing_Season clothing_Season = new Clothing_Season()
            //        {
            //            Clothing_Id = Clothing_Id,
            //            Season_Id = 2
            //        };
            //        clothingDAL.AddClothingSeason(clothing_Season);
            //    }
            //    if (VMmodel.seasonWinterSummer)
            //    {
            //        Clothing_Season clothing_Season = new Clothing_Season()
            //        {
            //            Clothing_Id = Clothing_Id,
            //            Season_Id = 3
            //        };
            //        clothingDAL.AddClothingSeason(clothing_Season);
            //    }
            //    if (VMmodel.ClothingStyles != 0)
            //    {
            //        Clothing_Style clothing_Style = new Clothing_Style()
            //        {
            //            Clothing_Id = Clothing_Id,
            //            Clothing_StyleId = VMmodel.ClothingStyles
            //        };
            //        clothingDAL.AddClothingStyle(clothing_Style);
            //    }
            //}
            if (Clothing_Id > -1)
                return true;
            else return false;
            //foreach (var label in labels)
            //{
            //    int x = (int)(label.Score * 100);
            //    var y = label.Description;
            //    Console.WriteLine($"{label.Description} ({(int)(label.Score * 100)}%)");
            //}

        }
    }
    public class ClothingVM
    {
        public string ImageLink { get; set; }
        public string Pattern { get; set; }
        public string Size { get; set; }
        public string Color { get; set; }
        public string ClothingStyles { get; set; }
        public bool seasonWinter { get; set; }
        public bool seasonSummer { get; set; }
        public bool seasonWinterSummer { get; set; }
        public long userId { get; set; }

    }
}