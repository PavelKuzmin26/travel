let searchBtn = document.querySelector('#search-btn');
let searchBar = document.querySelector('.search-bar-container');
let formBtn = document.querySelector('#login-btn');
let loginForm = document.querySelector('.login-form-container');
let formClose = document.querySelector('#form-close');
let menu = document.querySelector('#menu-bar');
let navbar = document.querySelector('.navbar');
let videoBtn = document.querySelectorAll('.vid-btn');


window.onscroll = () => {
    searchBtn.classList.remove('fa-times');
    searchBar.classList.remove('active');
    menu.classList.remove('fa-times');
    navbar.classList.remove('active');
    loginForm.classList.remove('active');
}

menu.addEventListener('click', () => {
    menu.classList.toggle('fa-times');
    navbar.classList.toggle('active');
});

searchBtn.addEventListener('click', () => {
    searchBtn.classList.toggle('fa-times');
    searchBar.classList.toggle('active');
});

formBtn.addEventListener('click', () => {
    loginForm.classList.add('active');
});

formClose.addEventListener('click', () => {
    loginForm.classList.remove('active');
});

videoBtn.forEach(btn => {
    btn.addEventListener('click', () => {
        document.querySelector('.controls .active').classList.remove('active');
        btn.classList.add('active');
        let src = btn.getAttribute('data-src');
        document.querySelector('#video-slider').src = src;
    });
});


var swiper = new Swiper(".review-slider", {
    loop: true,
    // slidesPerView: 3,
    spaceBetween: 20,
    autoplay: {
        delay: 2500,
        disableOnInteraction: false,
    },
    breakpoints: {
        480: {
            slidesPerView: 1,
            spaceBetweenSlides: 30,
        },    
        768: {
            slidesPreView: 2,
            spaceBetweenSlides: 50,
        },
        992: {
            slidesPerView: 2,
            spaceBetweenSlides: 40,
        },
    },
});

var swiper = new Swiper(".brand-slider", {
    loop: true,
    // slidesPerView: 3,
    spaceBetween: 20,
    autoplay: {
        delay: 2500,
        disableOnInteraction: false,
    },
    breakpoints: {
        480: {
            slidesPerView: 2,
            spaceBetweenSlides: 30,
        },    
        768: {
            slidesPreView: 3,
            spaceBetweenSlides: 50,
        },
        992: {
            slidesPerView: 4,
            spaceBetweenSlides: 40,
        },
        1200: {
            slidesPerView: 5,
            spaceBetweenSlides: 40,
        },
    },
});