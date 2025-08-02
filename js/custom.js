const carouselElement = document.querySelector('#investSlider');
const progressBars = document.querySelectorAll('.progress-bar-fill');
const carousel = new bootstrap.Carousel(carouselElement, {
   interval: 5000,
   ride: false
});

let currentSlide = 0;
let progressTimer = null;

function clearAllProgress() {
   progressBars.forEach(bar => {
      bar.classList.remove('active');
      bar.style.transition = 'none';
      bar.style.width = '0%';
      bar.offsetHeight; // force reflow
      bar.style.transition = '';
   });
}

function setProgressBar(index) {
   clearTimeout(progressTimer);
   clearAllProgress();

   const bar = progressBars[index];
   if (bar) {
      bar.classList.add('active');
      // slight delay ensures CSS transition applies
      progressTimer = setTimeout(() => {
         bar.style.width = '100%';
      }, 50);
   }
}

function carouselControl(direction) {
   carousel.pause(); // pause automatic sliding
   if (direction === 'next') {
      carousel.next();
   } else {
      carousel.prev();
   }
}

// On manual slide change
carouselElement.addEventListener('slid.bs.carousel', function (e) {
   currentSlide = e.to;
   setProgressBar(currentSlide);
});

// On initial load
window.addEventListener('load', () => {
   carousel.to(0);
   currentSlide = 0;

   setTimeout(() => {
      setProgressBar(0);
      carousel.cycle();
   }, 100);
});

// SLICK SLIDER JS

$(document).ready(function () {
   $('.slick-carousel').slick({
      dots: false,
      arrows: false,
      centerMode: true,
      infinite: true,
      speed: 300,
      slidesToShow: 4,
      slidesToScroll: 4,
      responsive: [{
            breakpoint: 1024,
            settings: {
               slidesToShow: 3,
               slidesToScroll: 3,
               infinite: true,
               dots: true
            }
         },
         {
            breakpoint: 600,
            settings: {
               slidesToShow: 2,
               slidesToScroll: 2
            }
         },
         {
            breakpoint: 480,
            settings: {
               slidesToShow: 1,
               slidesToScroll: 1
            }
         }
         // You can unslick at a given breakpoint now by adding:
         // settings: "unslick"
         // instead of a settings object
      ]
   });

   $('.testimonial-slider').slick({
      slidesToShow: 1.5, // Show 1 full + half of next
      slidesToScroll: 1,
      arrows: true,
      dots: false,
      infinite: true,
      centerMode: false,
   });

   // Article slider
   $('.article_carousel').slick({
      dots: false,
      arrows: true,
      centerMode: false,
      infinite: true,
      speed: 300,
      slidesToShow: 3,
      slidesToScroll: 3,
      responsive: [{
            breakpoint: 1024,
            settings: {
               slidesToShow: 2,
               slidesToScroll: 2,
               infinite: true,
               dots: true
            }
         },
         {
            breakpoint: 600,
            settings: {
               slidesToShow: 1,
               slidesToScroll: 1
            }
         },
         {
            breakpoint: 480,
            settings: {
               slidesToShow: 1,
               slidesToScroll: 1
            }
         }
         // You can unslick at a given breakpoint now by adding:
         // settings: "unslick"
         // instead of a settings object
      ]
   });


   // Event Carousel
   $('.event_carousel').slick({
      dots: false,
      arrows: true,
      centerMode: false,
      infinite: true,
      speed: 300,
      slidesToShow: 1,
      slidesToScroll: 1,
   });
});


// Review Slider Js