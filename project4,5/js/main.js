$(function(){


 $('.slider__inner').slick({
   arrows: false,
   dots: true,
 });

 $('.works__inner').slick({
   slidesToShow: 4,
   slidesToScroll: 1,
   prevArrow: '<button class="slick-arrow slick-prev"><img src="images/slider/slide-left.svg" alt=""></button>',
   nextArrow: '<button class="slick-arrow slick-next"><img src="images/slider/slide-right.svg" alt=""></button>',
 })

 $('.header__menu-btn').on('click', function(){
  $('.header__menu ul').slideToggle();
 });

 $('.header__drop-down.drop-down').on('click', function(){
  console.log('test');
 });


}); 