$(document).ready(function(){
    //HERO SLIDER
    $('#hero-slider').owlCarousel({
        looo:true,
        margin:0,
        nav:true,
        items:1,
        dots:false,
        smartspeed:1000,
        autoplay:true,
        autoplayTimeout:5000,
        autoplayHoverPause:false,
        navText: ['PREV','NEXT'],
        responsive:{
            0:{
                nav:false

            },
            768:{
                nav:true,
            },

        }
    });

});
let index = 0;
const testimonials = document.querySelectorAll('.testimonial');
function showNextTestimonial() {
   testimonials[index].classList.remove('active');
   index = (index + 1) % testimonials.length;
   testimonials[index].classList.add('active');
}
setInterval(showNextTestimonial, 5000); // Rotate every 5 seconds
// ABOUT
// highlight current page
document.querySelectorAll('nav ul li a').forEach(link => {
    if (link.href === window.location.href) {
      link.classList.add('active');
    }
  });
  