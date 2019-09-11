var actioned = false;
var actioned2 = false;

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
        document.getElementById("myDropdownList").style.height = "0";

        if (mobile == true)
        {
            document.getElementById("myMenuMobileButton").style.display = "block";
            document.getElementById("myMenuMobileCloseButton").style.display = "none";
        }

        actioned = false;
        actioned2 = false;
    }
}

function actionDropdown()
{
    if (actioned2 == false)
    {
        document.getElementById("myDropdownList").style.height = "190px";

        actioned2 = true;
    }

    else
    {
        document.getElementById("myDropdownList").style.height = "0";

        actioned2 = false;
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

// 382px width
