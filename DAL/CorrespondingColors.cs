using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace DAL
{
    public class CorrespondingColors
    {
        public Dictionary<String, String> colors;

        public CorrespondingColors()
        {
            colors = new Dictionary<string, string>();
            colors.Add("black", "white");
            colors.Add("pink", "red");
            colors.Add("orange", "yellow");
            colors.Add("green", "white");
            colors.Add("light-blue", "dark-blue");
            colors.Add("purple", "beige");
            colors.Add("white", "light-pink");
            colors.Add("light-pink", "white");
            colors.Add("brown", "light-pink");
        }
        
}
}
