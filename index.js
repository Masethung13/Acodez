// <--nav-bar-->
document.getElementById('menu-icon').addEventListener('click', function () {
    const menu = document.querySelector('.nav-menu');
    this.classList.toggle('active');
    menu.classList.toggle('active');
});

document.getElementById('menu-icon').addEventListener('click', function () {
    const menu1 = document.querySelector('.header');
    this.classList.toggle('active01');
    menu1.classList.toggle('active01');
});

// <--slider1-->

const slidesContainer = document.querySelector('.slides-container1');
const slides = document.querySelectorAll('.slide1');
const prevButton = document.querySelector('.prev-btn1');
const nextButton = document.querySelector('.next-btn1');

let currentIndex = 0;

function showSlide(index) {
    const slideWidth = slides[index].offsetWidth;
    const newPosition = -slideWidth * index;
    slidesContainer.style.transform = `translateX(${newPosition}px)`;
}

function nextSlide() {
    currentIndex++;
    if (currentIndex >= slides.length) {
        currentIndex = 0;
    }
    showSlide(currentIndex);
}

function prevSlide() {
    currentIndex--;
    if (currentIndex < 0) {
        currentIndex = slides.length - 1;
    }
    showSlide(currentIndex);
}

prevButton.addEventListener('click', prevSlide);
nextButton.addEventListener('click', nextSlide);


// <--dev-slide-->

const slides1 = document.querySelectorAll('.slide');
const prevButton1 = document.getElementById('prevButton');
const nextButton1 = document.getElementById('nextButton');
let currentIndex1 = 0;

function showSlide1(index) {
    // Hide all slides
    slides1.forEach(slide => slide.classList.remove('active'));
    // Show the slide at the given index
    slides1[index].classList.add('active');
}

prevButton1.addEventListener('click', () => {
    currentIndex1--;
    if (currentIndex1 < 0) {
        currentIndex1 = slides1.length - 1;
    }
    showSlide1(currentIndex1);
});

nextButton1.addEventListener('click', () => {
    currentIndex1++;
    if (currentIndex1 >= slides1.length) {
        currentIndex1 = 0;
    }
    showSlide1(currentIndex1);
});


// <--slideshow-infinity-->


const slidesContainer10 = document.querySelector('.slides-container10');
const slides10 = document.querySelectorAll('.slide10');

let currentIndex10 = 0;
const totalSlides10 = slides10.length;

function slideNext10() {
    currentIndex10++;
    if (currentIndex10 >= totalSlides10) {
        currentIndex10 = 0;
    }
    updateSlidePosition10();
}

function updateSlidePosition10() {
    const slideWidth10 = slides10[currentIndex10].offsetWidth;
    slidesContainer10.style.transform = `translateX(-${slideWidth10 * currentIndex10}px)`;
}

// Clone the first and last slide to create the infinite effect
const firstClone10 = slides10[0].cloneNode(true);
const lastClone10 = slides10[totalSlides10 - 1].cloneNode(true);
slidesContainer10.appendChild(firstClone10);
slidesContainer10.insertBefore(lastClone10, slides10[0]);

// Initial position to show the first image
updateSlidePosition10();

// Automatically slide to the next image every 3 seconds
setInterval(slideNext10, 3000);

// <faq-ques-->
document.querySelectorAll('.faq-question').forEach(button => {
    button.addEventListener('click', () => {
        const answer = button.nextElementSibling;
        if (answer.style.display === 'block') {
            answer.style.display = 'none';
        } else {
            answer.style.display = 'block';
        }
    });
});
// <--sentence-slides-->
const slides01 = document.querySelectorAll('.slide01');
let currentIndex01 = 0;

function showSlide01(index01) {
    // Hide all slides
    slides01.forEach(slide01 => {
        slide01.style.display = 'none';
    });

    // Show the slide at the specified index
    slides01[index01].style.display = 'block';
}

function nextSlide01() {
    currentIndex01 = (currentIndex01 + 1) % slides01.length;
    showSlide01(currentIndex01);
}

// Initial call
showSlide01(currentIndex01);

// Change slide every 3 seconds
setInterval(nextSlide01, 3000);


// <<--web-slider-->
const slidesContainer22_1 = document.querySelector('.slides-container22-1');
const slides22_1 = document.querySelectorAll('.slide22-1');
const prevButton22_1 = document.querySelector('.prev-btn22-1');
const nextButton22_1 = document.querySelector('.next-btn22-1');

let currentIndex22_1 = 0;

function showSlide22_1(index22_1) {
    const slideWidth22_1 = slides22_1[index22_1].offsetWidth;
    const newPosition22_1 = -slideWidth22_1 * index22_1;
    slidesContainer22_1.style.transform = `translateX(${newPosition22_1}px)`;
}

function nextSlide22_1() {
    currentIndex22_1++;
    if (currentIndex22_1 >= slides22_1.length) {
        currentIndex22_1 = 0;
    }
    showSlide22_1(currentIndex22_1);
}

function prevSlide22_1() {
    currentIndex22_1--;
    if (currentIndex22_1 < 0) {
        currentIndex22_1 = slides22_1.length - 1;
    }
    showSlide22_1(currentIndex22_1);
}

prevButton22_1.addEventListener('click', prevSlide22_1);
nextButton22_1.addEventListener('click', nextSlide22_1);

