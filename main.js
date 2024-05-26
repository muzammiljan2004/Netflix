let currentSlide = 0;

function showSlide(index) {
    const slides = document.querySelectorAll('.carousel-item');
    const totalSlides = slides.length;
    const itemsVisible = 5; 

    if (index >= totalSlides - itemsVisible + 1) {
        currentSlide = totalSlides - itemsVisible;
    } else if (index < 0) {
        currentSlide = 0;
    } else {
        currentSlide = index;
    }

    const offset = -currentSlide * 100 / itemsVisible;
    document.querySelector('.carousel-inner').style.transform = `translateX(${offset}%)`;
}

function nextSlide() {
    showSlide(currentSlide + 1);
}

function prevSlide() {
    showSlide(currentSlide - 1);
}

// Initial display
showSlide(currentSlide);

// Auto slide (optional)
// setInterval(nextSlide, 3000);

//Rating System
let ratingBtn = document.getElementById('ratingBtn')
let rating = document.getElementById('rating')
let ratingInt = parseInt(rating.innerHTML);
let ratingInc = 0

ratingBtn.addEventListener('click', () => {
    if (ratingInc == 0) {
        ratingInt++
        rating.innerHTML = ratingInt
        ratingInc = 1
    }
    else if (ratingInc == 1) {
        ratingInt--
        rating.innerHTML = ratingInt
        ratingInc = 0
    }
})

