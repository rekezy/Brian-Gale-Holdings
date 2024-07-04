let slideIndex = 0;
const slides = document.querySelectorAll('.slide');
const totalSlides = slides.length;

function showSlide(index) {
    slides.forEach((slide) => {
        slide.style.transform = `translateX(-${index * 100}%)`;
    });
}

function nextSlide() {
    if (slideIndex < totalSlides - 1) {
        slideIndex++;
    } else {
        slideIndex = 0;
    }
    showSlide(slideIndex);
}

setInterval(nextSlide, 3000); // Change slide every 3 seconds

// Corperate Quotes slides
let quoteIndex = 0;
showQuote(quoteIndex);

function showQuote(n) {
    let quotes = document.getElementsByClassName("quote");
    let dots = document.getElementsByClassName("dot");
    
    if (n >= quotes.length) {
        quoteIndex = 0;
    } else if (n < 0) {
        quoteIndex = quotes.length - 1;
    }
    
    for (let i = 0; i < quotes.length; i++) {
        quotes[i].classList.remove("active");
    }
    
    for (let i = 0; i < dots.length; i++) {
        dots[i].classList.remove("active");
    }
    
    quotes[quoteIndex].classList.add("active");
    dots[quoteIndex].classList.add("active");
}

function currentQuote(n) {
    showQuote(quoteIndex = n);
}

function nextQuote() {
    showQuote(++quoteIndex);
}

setInterval(nextQuote, 5000);



