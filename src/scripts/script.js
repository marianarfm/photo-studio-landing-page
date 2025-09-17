// Slideshow script
document.addEventListener("DOMContentLoaded", () => {
    const slideshow = document.querySelector(".hero__slideshow");
    const slides = Array.from(document.querySelectorAll(".hero__slide"));
    const navDots = document.querySelectorAll(".hero__nav-dot");
    let currentIndex = 0;
    const slideInterval = 5000; // 5 secs

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

// Animation on scroll script
const observer = new IntersectionObserver((entries) => {
    entries.forEach((entry) => {
        console.log(entry);
        if (entry.isIntersecting)
            entry.target.classList.add("section--show");
        else
            entry.target.classList.remove("section--show");
    });
});

const hiddenElements = document.querySelectorAll(".section--hidden");
hiddenElements.forEach((el) => observer.observe(el));

// Toggle menu script
function toggleMenu() {
    const navList = document.querySelector(".nav__list");
    navList.classList.toggle("nav__list--show");
}