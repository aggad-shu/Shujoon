const hamburger = document.querySelector(".hamburger");
const navLinks = document.querySelector(".nav-links");

hamburger.addEventListener("click", () => {
    navLinks.classList.toggle("active");
    hamburger.classList.toggle("active");
});

document.querySelectorAll('.scroll-wrapper').forEach(wrapper => {

    const row = wrapper.querySelector('.category-row');

    wrapper.querySelector('.left').addEventListener('click', () => {
        row.scrollBy({
            left: -400,
            behavior: 'smooth'
        });
    });

    wrapper.querySelector('.right').addEventListener('click', () => {
        row.scrollBy({
            left: 400,
            behavior: 'smooth'
        });
    });

});

let lastScrollY = window.scrollY;
const navbar = document.querySelector(".navbar");

window.addEventListener("scroll", () => {
    const currentScrollY = window.scrollY;

    if (currentScrollY > lastScrollY && currentScrollY > 80) {
        // Scrolling down
        navbar.classList.add("navbar-hidden");
    } else {
        // Scrolling up
        navbar.classList.remove("navbar-hidden");
    }

    lastScrollY = currentScrollY;
});