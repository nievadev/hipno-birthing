function showMobileBar(checkboxId) {
    var checkbox = document.getElementById(checkboxId);

    if (checkbox.checked) {
        document.getElementById("listMobile").style.display = "flex";
    }

    else {
        document.getElementById("listMobile").style.display = "none";
    }
}

function showDropdownList() {
    var checkboxList = document.getElementById("checkboxDropdown");
    var listDropdown = document.getElementById("listDropdown");

    if (checkboxList.checked) {
        listDropdown.style.display = "flex";
    }

    else {
        listDropdown.style.display = "none";
    }
}

function disappearDropdownMenu(screenSize) {
    if (screenSize.matches) {
        document.getElementById("checkboxList").checked = false;
    }

    showMobileBar("checkboxList");
}

var mediaQuery = window.matchMedia("(min-width: 1056px)");
mediaQuery.addListener(disappearDropdownMenu);
disappearDropdownMenu(mediaQuery);
