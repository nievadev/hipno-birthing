var actioned = false;

function actionNav(mobile = false) 
{
    if (actioned == false) 
    {
        document.getElementById("mySidenav").style.top = "0px";
        document.getElementById("mySidenav").style.boxShadow = "0px 3px 10px #919191";

        if (mobile == true)
        {
            document.getElementById("myMenuMobileButton").style.display = "none";
            document.getElementById("myMenuMobileCloseButton").style.display = "block";
        }

        actioned = true;
    }

    else
    {
        document.getElementById("mySidenav").style.top = "-208px";
        document.getElementById("mySidenav").style.boxShadow = "0px 3px 10px transparent";

        if (mobile == true)
        {
            document.getElementById("myMenuMobileButton").style.display = "block";
            document.getElementById("myMenuMobileCloseButton").style.display = "none";
        }

        actioned = false;
    }
}

function disappear(x)
{
    if (x.matches)
    {
        document.getElementById("myMobileButton").style.display = "none";
    }

    else
    {
        document.getElementById("myMobileButton").style.display = "block";
    }
}

var x = window.matchMedia("(min-width: 533px)");
disappear(x);
x.addListener(disappear);
