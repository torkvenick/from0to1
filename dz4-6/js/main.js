$(function(){


  $('.slider__inner').slick({
    asNavFor: '.thumbs'
  });

  $('.thumbs').slick({
    arrows: false,
    slidesToShow: 6,
    slidesToScroll: 1,
    asNavFor: '.slider__inner',
    focusOnSelect: true, 
  });

 


  $('.header__menu-btn').on('click', function(){
    $('.menu').slideToggle();
  });
 

});