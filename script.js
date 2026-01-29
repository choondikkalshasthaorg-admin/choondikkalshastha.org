const sliderContainer = document.getElementById('hero-slider');

// 1. Array-based image management
const images = [
    'https://images.unsplash.com/photo-1548013146-72479768bbaa?auto=format&fit=crop&q=80&w=1600',
    'https://images.unsplash.com/photo-1564507592333-c60657eea523?auto=format&fit=crop&q=80&w=1600',
    'https://images.unsplash.com/photo-1517030330234-94c4fa948ebc?auto=format&fit=crop&q=80&w=1600'
];

let currentIndex = 0;

function createSlides() {
    images.forEach((src, index) => {
        const slide = document.createElement('div');
        slide.classList.add('slide');
        slide.style.backgroundImage = `url('${src}')`;
        if (index === 0) {
            slide.classList.add('active');
            slide.classList.add('active-animation');
        }
        sliderContainer.appendChild(slide);
    });
}

function nextSlide() {
    const slides = document.querySelectorAll('.slide');
    
    // Remove active state from current
    slides[currentIndex].classList.remove('active');
    // Small delay before removing animation to prevent "snapping"
    setTimeout(() => {
        slides[currentIndex].classList.remove('active-animation');
    }, 100);

    // Increment index
    currentIndex = (currentIndex + 1) % slides.length;

    // Add active state to next
    slides[currentIndex].classList.add('active');
    slides[currentIndex].classList.add('active-animation');
}

// Initialize
createSlides();
setInterval(nextSlide, 7000); // 7 seconds per slide
