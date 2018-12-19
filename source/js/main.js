$(document).ready(function(){
  $('#header-carousel').owlCarousel({
    items : 1,
    singleItem : true,
    dots: false,
    loop: true,
    nav: true,
    navText:["<span class='header-carousel-nav header-carousel-prev'><i class='fa fa-angle-left' aria-hidden='true'></i></span>","<span class='header-carousel-nav header-carousel-next'><i class='fa fa-angle-right' aria-hidden='true'></i></span>"],
    autoplay: true,
    autoplayTimeout: 5000
  });
});