var actioned = false;

function actionNav() 
{
    if (actioned == false) 
    {
        document.getElementById("mySidenav").style.top = "0px";
        document.getElementById("mySidenav").style.boxShadow = "0px 3px 10px #919191";

        actioned = true;
    }

    else
    {
        document.getElementById("mySidenav").style.top = "-208px";
        document.getElementById("mySidenav").style.boxShadow = "0px 3px 10px transparent";

        actioned = false;
    }
}
