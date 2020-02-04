function themeChange()
{
    var x = document.getElementById('theTheme').value;
    document.documentElement.style.setProperty('--themeColor',x);
}

function dropdown()
{
    var y = document.getElementById('submenu');
    if( y.style.opacity == 1)
    {
        y.style.opacity = 0
        document.getElementById('dd-arrow').style.transform="rotate(360deg)";
       

    }
    else{
        y.style.opacity = 1
        document.getElementById('dd-arrow').style.transform="rotate(180deg)";
       
    }
   

    
}