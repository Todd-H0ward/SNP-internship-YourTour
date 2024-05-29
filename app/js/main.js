const header = document.querySelector(".header");
const menu = document.querySelector(".menu__list");

const scrollToElem = (elem) => {
    const rect = elem.getBoundingClientRect();
    const headerHeight = header.offsetHeight;
    const top = rect.top + scrollY - headerHeight;

    scrollTo({
        top,
        behavior: "smooth"
    })
}

menu.addEventListener("click", (event) => {
    event.preventDefault();
    const elem = event.target;
    if (elem !== null && elem.classList.contains("menu__link")) {
        const target = document.querySelector(elem.hash);
        scrollToElem(target);
    }
})


window.addEventListener("scroll", () => {
    if (window.scrollY > 450) {
        header.classList.add("header-fixed");
    } else {
        header.classList.remove("header-fixed");
    }
})

