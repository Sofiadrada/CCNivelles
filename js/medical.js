$(function() {


  // One page Nav

  $('#menu').onePageNav();

  // scroll à propos

  $('.go').click(function(e) {

    var elem = $('#apropos');
    $('html, body').animate({ scrollTop : elem.offset(). top}, 750 );
    e.preventDefault();

  });

  // scroll Natalia

  $('.card-01').click(function(e) {

    var elem = $('#natalia');
    $('html, body').animate({ scrollTop : elem.offset(). top}, 750 );
    e.preventDefault();

  });

  // scroll wivine

  $('.card-02').click(function(e) {

    var elem = $('#aline');
    $('html, body').animate({ scrollTop : elem.offset(). top}, 750 );
    e.preventDefault();

  });

  // scroll aline

  $('.card-03').click(function(e) {

    var elem = $('#anael');
    $('html, body').animate({ scrollTop : elem.offset(). top}, 750 );
    e.preventDefault();

  });


  // scroll Ulysse

  $('.card-05').click(function(e) {

    var elem = $('#dog');
    $('html, body').animate({ scrollTop : elem.offset(). top}, 750 );
    e.preventDefault();


  });

  $('.card-06').click(function(e) {

    var elem = $('#Celia');
    $('html, body').animate({ scrollTop : elem.offset(). top}, 750 );
    e.preventDefault();


  });

  $('.card-09').click(function(e) {

    var elem = $('#Jean-Yves');
    $('html, body').animate({ scrollTop : elem.offset(). top}, 750 );
    e.preventDefault();


  });

   $('.card-08').click(function(e) {

    var elem = $('#nolwenn');
    $('html, body').animate({ scrollTop : elem.offset(). top}, 750 );
    e.preventDefault();


  });


  // scroll contact

  $('.gocontact').click(function(e) {

    var elem = $('#contact');
    $('html, body').animate({ scrollTop : elem.offset(). top}, 750 );
    e.preventDefault();


  });

    // scroll contact low

  $('.gocontactlow').click(function(e) {

    var elem = $('#contactlow');
    $('html, body').animate({ scrollTop : elem.offset(). top}, 750 );
    e.preventDefault();


  });

  // scroll adresse

  $('.gocentre').click(function(e) {

    var elem = $('#adresse');
    $('html, body').animate({ scrollTop : elem.offset(). top}, 750 );
    e.preventDefault();


  });

  // header change
  $(window).scroll(function() {

    var Hscroll = $(this).scrollTop();
    if( Hscroll > 300 ) {
      $('header').addClass('fix-white');
    } else {
      $('header').removeClass('fix-white');
    }
    var opScroll = Hscroll / 500;
    $('.logo').css({ opacity : 1 - opScroll });

  });


});
