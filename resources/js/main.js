function showMobileBar(checkboxId, listId) {
    var checkbox = document.getElementById(checkboxId);

    if (checkbox.checked) {
        document.getElementById(listId).style.display = "flex";
    }

    else {
        document.getElementById(listId).style.display = "none";
    }
}

function disappearDropdownMenu(screenSize) {
    if (screenSize.matches) {
        document.getElementById("checkboxList").checked = false;
    }

    showMobileBar("checkboxList", "listMobile");
}

var tabletSize = window.matchMedia("(min-width: 1056px)");
tabletSize.addListener(disappearDropdownMenu);
disappearDropdownMenu(tabletSize);

var mobileSize = window.matchMedia("(max-width: 533px)");
mobileSize.addListener(disappearDropdownMenu);
disappearDropdownMenu(mobileSize);
