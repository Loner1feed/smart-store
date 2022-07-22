$(document).ready(function() {


  let width = $('.contactBlock__phone--visible').width();
  $('.contactBlock').css('width', `${width}px`)



  $('.search__icon').click(function() {
    $('.search__row').addClass('search__row--open')
  })

  $('.search__row span ').click(function() {
    $('.search__row').removeClass('search__row--open')
  })

  $('.mainSlider').slick({
    nextArrow: '<a class="mainSlider__arrow mainSlider__arrow--next"><span class="icon-arrow"></span></a>',
    prevArrow: '<a class="mainSlider__arrow mainSlider__arrow--prev"><span class="icon-arrow"></span></a>',
    dots:true,
    // autoplay:true,
    // autoplaySpeed:3500,
  })

  // desktop catalog logics 

  $('.catalog').hover(function() {
    $(this).addClass('catalog--hovered')
  }, () => {})

  $('.category__heading').hover(function() {
    $('.category__open').removeClass('category__open--open')
    $(this).siblings('.category__open').addClass('category__open--open')
  }, () => {})

  $('.category__open').hover(() => {}, function() {
    $('.catalog').removeClass('catalog--hovered')
    $(this).removeClass('category__open--open');
  })
})