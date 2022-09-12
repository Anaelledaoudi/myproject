using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;
using System.Drawing;


namespace BL
{
    public class LookBL
    {
        //ConsoleColor[,] myColorsLookArray=new ConsoleColor[2,2] 
        //{ {ConsoleColor.Red, ConsoleColor.Green },
        //    {ConsoleColor.Blue,ConsoleColor.Yellow }
        //};
       
        public string RGBToString(Int32 red, Int32 green, Int32 blue)
        {
            //המרה ממספר צבע לשם הצבע 
            Color original = Color.FromArgb(50, 120, 200);
            string colorStr = original.ToString();
            return colorStr;
        }




    }
}
