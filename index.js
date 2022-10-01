const nav = document.querySelector(".primary-navigation");
const toggleNav = document.querySelector(".mobile-nav-toggle");

toggleNav.addEventListener("click", () => {
    const visibility = nav.getAttribute("data-visible");

    if (visibility === "false") {
        nav.setAttribute("data-visible", true);
        toggleNav.setAttribute("aria-expanded", true);
    } else {
        nav.setAttribute("data-visible", false);
        toggleNav.setAttribute("aria-expanded", false);
    }
})