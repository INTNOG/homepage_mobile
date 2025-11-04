// sticky navbar

window.onscroll = function () { stickyFunction() };

var menu = document.getElementById("menu");
var sticky = menu.offsetTop;

function stickyFunction() {
    if (window.pageYOffset - 1 >= sticky)
        menu.classList.add("sticky");
    else
        menu.classList.remove("sticky");
}

// searchbox show/collapse

var searchDiv = document.getElementById("search");
var navbarDiv = document.getElementById("navbar")

function searchFade() {
    searchDiv.classList.toggle("display-none");
    navbarDiv.classList.toggle("display-none");
}

//big menu show/collapse in small device

var bigMenu = document.getElementsByClassName("big-menu")[0];

function showCollapseMenu() {
    bigMenu.classList.toggle("big-menu");
    bigMenu.classList.toggle("big-menu-show");
}