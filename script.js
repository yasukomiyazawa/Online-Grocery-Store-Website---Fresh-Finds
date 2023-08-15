let searchForm = document.querySelector('.search-form')


document.querySelector('#search-btn').onclick = () => {

    searchForm.classList.toggle('active');
    shopingCart.classList.remove('active');
    loginBtn.classList.remove('active');
    menuBtn.classList.remove("active");

}

let shopingCart = document.querySelector('.shopping-cart')


document.querySelector('#cart-btn').onclick = () => {

    shopingCart.classList.toggle('active');
    searchForm.classList.remove('active');
    loginBtn.classList.remove('active');
    menuBtn.classList.remove("active");
    

}

let loginBtn = document.querySelector('.login-form')


document.querySelector('#login-btn').onclick = () => {

    loginBtn.classList.toggle('active');
    searchForm.classList.remove('active');
    shopingCart.classList.remove('active');
    menuBtn.classList.remove("active");

}

let menuBtn = document.querySelector('.navbar')


document.querySelector('#menu-btn').onclick = () => {

    menuBtn.classList.toggle('active');
    searchForm.classList.remove('active');
    shopingCart.classList.remove('active');
    loginBtn.classList.remove('active');

}

window.onscroll = () => {

    searchForm.classList.remove('active');
    shopingCart.classList.remove('active');
    loginBtn.classList.remove('active');
    menuBtn.classList.remove("active");

}

var swiper = new Swiper(".product-slider", {
    loop: true,
    spaceBetween: 20,
    autoplay:{
        delay: 7500,
        disabledOnInteraction: false,
    },
    centeredSlides: true,
    breakpoints: {
      0: {
        slidesPerView: 1,
      },
      768: {
        slidesPerView: 2,
      },
      1020: {
        slidesPerView: 3,
      },
    },
});


var swiper = new Swiper(".review-slider", {
    loop: true,
    spaceBetween: 20,
    autoplay:{
        delay: 7500,
        disabledOnInteraction: false,
    },
    centeredSlides: true,
    breakpoints: {
      0: {
        slidesPerView: 1,
      },
      768: {
        slidesPerView: 2,
      },
      1020: {
        slidesPerView: 3,
      },
    },
});