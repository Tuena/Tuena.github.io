// add class to header on scroll
window.addEventListener('scroll', function() {
  const scrollTop = window.pageYOffset || document.documentElement.scrollTop;
  const htmlElement = document.documentElement;
  if (scrollTop > 5) {
    htmlElement.classList.add('fixedHeader');
  } else {
    htmlElement.classList.remove('fixedHeader');
  }
});

/*******************************************************/

$('.galleryTrigger').click(function(){
  $('html').addClass('galleryAct');
});
$('.closeGallery').click(function(){
  $('html').removeClass('galleryAct');
});

/*****************************************************/

const htmlElement = document.documentElement;
const hamburger = document.getElementById('hamburger');
const menuClose = document.querySelector('.menuCloseTrigger');
hamburger.addEventListener('click', function() {
  htmlElement.classList.toggle('actNav');
});
menuClose.addEventListener('click', function() {
  htmlElement.classList.remove('actNav');
});


$('.navLinksStyle > li > a').click(function(){
  $('html').removeClass('actNav');
});

$(document).ready(function() {
  $('.navLinksStyle li a').click(function() {
    // Remove the "active" class from all links in the list
    $('.navLinksStyle li a').removeClass('active');

    // Add the "active" class to the clicked link
    $(this).addClass('active');
  });
});


/***************************************************/

var swiper = new Swiper(".gallerySwiper", {
  slidesPerView: 1,
  spaceBetween: 10,
  navigation: {
    nextEl: ".galleryBtnNext",
    prevEl: ".galleryBtnPrev",
  },
 breakpoints: {
    320: {
      slidesPerView: 1,
      spaceBetween: 20,
    },
    485: {
      slidesPerView: 2,
      spaceBetween: 20,
    },
    992: {
      slidesPerView: 3,
      spaceBetween: 20,
    },
    1299: {
      slidesPerView: 4,
      spaceBetween: 20,
    },
    1599: {
      slidesPerView: 6,
      spaceBetween: 30,
    },
  },
});

/***************************************************/

var swiper = new Swiper(".offeringSwiper", {
  slidesPerView: 1,
  spaceBetween: 10,
  navigation: {
    nextEl: ".swiper-button-next",
    prevEl: ".swiper-button-prev",
  },
   breakpoints: {
    768: {
      slidesPerView: 2,
      spaceBetween: 20,
    },
    992: {
      slidesPerView: 3,
      spaceBetween: 25,
    },
  },
});

/***************************************************/

var swiper = new Swiper(".sLineupSwiper", {
  navigation: {
    nextEl: ".swiper-button-next",
    prevEl: ".swiper-button-prev",
  },
});


/***************************************************/

var swiper = new Swiper(".postSwiper", {
  slidesPerView: 1,
  spaceBetween: 10,
  navigation: {
    nextEl: ".swiper-button-next",
    prevEl: ".swiper-button-prev",
  },
 breakpoints: {
    320: {
      slidesPerView: 1,
      spaceBetween: 20,
    },
    385: {
      slidesPerView: 2,
      spaceBetween: 20,
    },
    992: {
      slidesPerView: 3.2,
      spaceBetween: 20,
    },
  },
});

/***************************************************/

var swiper = new Swiper(".productSwiper", {
  slidesPerView: 1,
  spaceBetween: 10,
  navigation: {
    nextEl: ".swiper-button-next",
    prevEl: ".swiper-button-prev",
  },
 breakpoints: {
    320: {
      slidesPerView: 1,
      spaceBetween: 20,
    },
    385: {
      slidesPerView: 2,
      spaceBetween: 20,
    },
    992: {
      slidesPerView: 3,
      spaceBetween: 20,
    },
    1199: {
      slidesPerView: 4,
      spaceBetween: 20,
    },
  },
});