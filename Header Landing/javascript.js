const bar = document.getElementById("bar");
const close = document.getElementById("close");
const menu = document.getElementById("menu");
const body = document.querySelector("body");
bar.addEventListener("click", showMenu);
close.addEventListener("click", hideMenu);
function showMenu() {
    menu.classList.add("show-menu-class");
    body.classList.add("stuck-on-scroll");
}
function hideMenu() {
    menu.classList.remove("show-menu-class");
    body.classList.remove("stuck-on-scroll");
}

