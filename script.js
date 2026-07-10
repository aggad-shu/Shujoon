const hamburger = document.querySelector(".hamburger");
const navLinks = document.querySelector(".nav-links");

hamburger.addEventListener("click", () => {
    navLinks.classList.toggle("active");
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