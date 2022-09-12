using Google.Cloud.Vision.V1;
using System;

namespace WEBAPI
{
    //public class ImageCheck
    //{
       
        //public void Check(string path, string serverPath)
        //{
        //    Environment.SetEnvironmentVariable("GOOGLE_APPLICATION_CREDENTIALS", serverPath);

        //    var client = ImageAnnotatorClient.Create();
        //    var image = Image.FromFile(path);
        //    var labels = client.DetectLabels(image);
        //    var properties = client.DetectImageProperties(image);

        //    var myClothingKind = labels[3].Description;
        //    var myClothingColor = properties;
         

        //    foreach (var label in labels)
        //    {
               
        //        Console.WriteLine($"{label.Description} ({(int)(label.Score * 100)}%)");
        //    }
           

        //}
    //}
}