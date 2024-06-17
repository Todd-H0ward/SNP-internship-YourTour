const header = document.querySelector(".header");
const menuLinks = document.querySelectorAll(".scroll-link");

const scrollToElem = (elem) => {
    const rect = elem.getBoundingClientRect();
    const headerHeight = header.offsetHeight;
    const top = rect.top + scrollY - headerHeight;

    scrollTo({
        top,
        behavior: "smooth"
    })
}

menuLinks.forEach(link => link.addEventListener("click", (event) => {
    event.preventDefault();
    const target = document.querySelector(event.target.hash);
    scrollToElem(target);
}))

window.addEventListener("scroll", () => {
    if (window.scrollY > 450) {
        header.classList.add("header-fixed");
    } else {
        header.classList.remove("header-fixed");
    }
})