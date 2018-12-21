$(document).ready(function(){
  $('#header-carousel').owlCarousel({
    items : 1,
    singleItem : true,
    dots : false,
    loop : true,
    nav : true,
    navText : [
      '<span class=\'header-carousel-nav header-carousel-prev\'><i class=\'fa fa-angle-left\' aria-hidden=\'true\'></i></span>',
      '<span class=\'header-carousel-nav header-carousel-next\'><i class=\'fa fa-angle-right\' aria-hidden=\'true\'></i></span>',
    ],
    autoplay : true,
    autoplayTimeout : 5000,
  });

  $('#consultation').click(function(){
    $('.popup').show();
  });

  $('.form__close').click(function(){
    $('.popup').hide();
  });

  inputEvents();

  function inputEvents(){
    var inp = 'form input';

    $(inp).focusin(function(){

      var th    = $(this),
          label = th.parent().find('label');

      label.addClass('has-content');

    });
    $(inp).focusout(function(){

      var th    = $(this),
          label = th.parent().find('label');

      if (th.val().trim().length === 0)
        label.removeClass('has-content');
    });
  }

  $('form select').change(function(){
    var th = $(this),
        label = th.parent().find('label');

    if(!label.hasClass('has-content')){
      label.addClass('has-content')
    }
  })

});