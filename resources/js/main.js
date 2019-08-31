function showMobileBar() {
    var checkboxList = document.getElementById("checkboxList");

    if (checkboxList.checked) {
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
