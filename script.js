let slideIndex = 1;

function showSlide(n) {
    const slides = document.querySelectorAll('.slide');
    slides.forEach((slide, index) => {
        if (index === n - 1) {
            slide.classList.add('active-slide');
        } else {
            slide.classList.remove('active-slide');
        }
    });

    slideIndex = n;

    if (slideIndex > slides.length) {
        slideIndex = 1;
    } else if (slideIndex < 1) {
        slideIndex = slides.length;
    }
}

function nextSlide() {
    showSlide(slideIndex + 1);
}

function previousSlide() {
    showSlide(slideIndex - 1);
}

setInterval(nextSlide, 3000);
