var MY_HTML = "<div class='color_v' id='color_v'>"+
    "<a href='javascript:void(0)' onclick='Color_setting()'><i class='fa fa-cog fa-spin fa-2x fa-fw'></i></a>"+
    "</div>"+
    "<div id='color_c' class='color_c'>"+
    "<ul>"+
    "<li id='Dark'><a href='javascript:void(0)' onclick='Color_picker(\"Dark\")'> <img src='../src/img/Light_dark.png' height='30' width='30' title='Light Dark'> </a></li>"+
    "<li id='Light'><a href='javascript:void(0)' onclick='Color_picker(\"Light\")'> <img src='../src/img/Dark_light.png' height='30' width='30' title='Dark Light'> </a></li>"+
    "<li id='white_blue'><a href='javascript:void(0)' onclick='Color_picker(\"White_blue\")'> <img src='../src/img/White_blue.png' height='30' width='30' title='White Blue'> </a></li>"+
    "<li id='white_red'><a href='javascript:void(0)' onclick='Color_picker(\"White_red\")'> <img src='../src/img/White_red.png' height='30' width='30' title='White Red'> </a></li>"+
    "<li id='Dark_yellow'><a href='javascript:void(0)' onclick='Color_picker(\"Dark_yellow\")'> <img src='../src/img/Dark_yellow.png' height='30' width='30' title='Dark yellow'> </a></li>"+
    "</ul>"+
    "</div>";

document.getElementById("Color").innerHTML = MY_HTML ;
var color_config = false;
function Color_setting() {
    if (color_config === false)
    {
        color_config = true;
        document.getElementById("color_v").style = 'left: 75px;transition: 0.5s;' ;
        document.getElementById("color_c").style = 'display:block;left:0;transition: 1s;' ;
    }
    else
    {
        color_config = false;
        document.getElementById("color_v").style = 'left:0;transition: 1s;' ;
        document.getElementById("color_c").style = 'display:block;left:-75;transition: 0.5s;' ;
    }
}
function Color_picker(id) {
    var head_style ;
    switch (id)
    {
        case "Dark" :
            head_style = '../src/css/color/Dark.css';
            break;
        case "Light" :
            head_style = '../src/css/color/Light.css';
            break;
        case "White_blue" :
            head_style = '../src/css/color/white_blue.css';
            break;
        case "White_red" :
            head_style = '../src/css/color/white_red.css';
            break;
        default :
            head_style = '../src/css/color/Light.css';
    }
    document.getElementById("CssStyle").href = head_style;
}
