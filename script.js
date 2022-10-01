const openMenu = document.querySelector(".hamb-menu");
const openBtn = document.querySelector(".hamb");
const closeBtn = document.querySelector(".close");
const menu = document.querySelector(".primary-nav");

openBtn.addEventListener("click", () => {
    openBtn.classList.add("hamb-active");
    closeBtn.classList.add("close-active");
    menu.classList.add("opened");
});

closeBtn.addEventListener("click", () => {
    openBtn.classList.remove("hamb-active");
    closeBtn.classList.remove("close-active");
    menu.classList.remove("opened");
});

