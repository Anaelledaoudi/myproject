using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace BL
{
    class CorespondingColors
    {
        //list shel zougot
        Dictionary<String, String> colors;

        public CorespondingColors()
        {

            colors.Add("black", "grey");
            colors.Add("pink", "red");
            colors.Add("orange", "yellow");
            colors.Add("green", "white");
            colors.Add("light-blue", "dark-blue");
            colors.Add("purple", "beige");
            colors.Add("white", "light-pink");
            colors.Add("brown", "light-pink");
        }
    }
}
