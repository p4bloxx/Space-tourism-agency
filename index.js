const nav = document.querySelector(".primary-navigation");
const toggleNav = document.querySelector(".mobile-nav-toggle");


toggleNav.addEventListener("click", (e) => {
    const visibility = nav.getAttribute("data-visible");
    const targ = e.target;

        if (visibility === "false") {
            nav.setAttribute("data-visible", true);
            toggleNav.setAttribute("aria-expanded", true);
        } else {
            nav.setAttribute("data-visible", false);
            toggleNav.setAttribute("aria-expanded", false);
        }
    
        if (visibility === 'true' && targ !== toggleNav && targ !== nav) {
            nav.setAttribute("data-visible", false);
            toggleNav.setAttribute("aria-expanded", false);
        }
});

