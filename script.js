// Script para o slideshow
document.addEventListener("DOMContentLoaded", () => {
    const slideshow = document.querySelector(".slideshow");
    const slides = Array.from(document.querySelectorAll(".slideshow img"));
    const navDots = document.querySelectorAll(".slideshow-nav a");
    let currentIndex = 0;
    const slideInterval = 5000; // 5 segundos

    function updateNavDots() {
        navDots.forEach(dot => dot.classList.remove("active-dot"));
        navDots[currentIndex].classList.add("active-dot");
    }

    function goToSlide(index) {
        currentIndex = index;
        const scrollPosition = currentIndex * slideshow.clientWidth;
        slideshow.scrollTo({ left: scrollPosition, behavior: "smooth" });
        updateNavDots();
    }

    function nextSlide() {
        currentIndex = (currentIndex + 1) % slides.length;
        goToSlide(currentIndex);
    }

    navDots.forEach((dot, idx) => {
        dot.addEventListener("click", (e) => {
            e.preventDefault();
            goToSlide(idx);
        });
    });

    setInterval(nextSlide, slideInterval);
    updateNavDots();
});

// Script de fade-in para as seções
const observer = new IntersectionObserver((entries) => {
    entries.forEach((entry) => {
        console.log(entry);
        if (entry.isIntersecting)
            entry.target.classList.add("show");
        else
            entry.target.classList.remove("show");
    });
});

const hiddenElements = document.querySelectorAll(".hidden");
hiddenElements.forEach((el) => observer.observe(el));

// Script para o botão de menu
function toggleMenu() {
    const navBarItems = document.getElementsByClassName("nav-bar-items")[0];
    navBarItems.classList.toggle("show");
}