const toggleMenu = () => {
    document.body.classList.toggle("open");
};

const scrollRevealOption = {
    origin: "bottom",
    distance: "50px",
    duration: 1000,
}

ScrollReveal().reveal(".header__image img", {
    ...scrollRevealOption,
    origin: "right",
});
ScrollReveal().reveal(".header__content h1", {
    ...scrollRevealOption,
    delay: 500,
});
ScrollReveal().reveal(".header__content h2", {
    ...scrollRevealOption,
    delay: 1000,
});
ScrollReveal().reveal(".header__content p", {
    ...scrollRevealOption,
    delay: 1500,
});
ScrollReveal().reveal(".header__btn", {
    ...scrollRevealOption,
    delay: 2000,
});