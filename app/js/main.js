const header = document.querySelector(".header");
window.addEventListener("scroll", () => {
    console.log(window.scrollY);
    if (window.scrollY > 450) {
        header.classList.add("header-fixed");
    } else {
        header.classList.remove("header-fixed");
    }
})