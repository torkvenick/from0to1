$(function(){


  $('.slider__inner').slick({
    /* arrows: true, */
    asNavFor: '.thumbs'
  });

  $('.thumbs').slick({
    arrows: false,
    slidesToShow: 6,
    slidesToScroll: 6,
    asNavFor: '.slider__inner',
    focusOnSelect: true
  });
 

});