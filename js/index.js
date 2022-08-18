$('.slider__body').slick({
  slidesToShow: 4,
  slidesToScroll: 1,
  arrows: true,
  nextArrow: '<a class="slider__arrow slider__arrow--next"><span class="icon-arrow"></span></a>',
  prevArrow: '<a class="slider__arrow slider__arrow--prev"><span class="icon-arrow"></span></a>',
  // mobileFirst:true,
  responsive: [
    {
      breakpoint: 1150,
      settings: {
        slidesToShow: 3,
        slidesToScroll: 1,
      }
    },

    {
      breakpoint: 900,
      settings: {
        slidesToShow: 2,
        slidesToScroll: 1,
      }
    },

    {
      breakpoint: 600,
      settings: {
        slidesToShow: 1,
        slidesToScroll: 1,
      }
    },
  ]
})

$(document).ready(function() {

  // let sliderWidth = $('.slider').width();
  // console.log(sliderWidth);

  // $('.slider').width(sliderWidth + 20);
  // $('.slider').width(sliderWidth);


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

  if(Number($(window).width()) >= 800) {
    $('.catalog--onPage').hover(function() {
      $(this).addClass('catalog--hovered')
    }, () => {})
  
    $('.category__heading').hover(function() {
      $('.category__open').removeClass('category__open--open')
      $(this).siblings('.category__open').addClass('category__open--open');
      let openWidth = $(this).siblings('.category__open').width();
      let underCoverWidth = $('.catalog').width() + 55;
      $('.catalog__underCover').width(`${underCoverWidth}px`);
    }, () => {})
  
    // $('.category__open').hover(() => {}, function() {
    //   $('.catalog').removeClass('catalog--hovered')
    //   $('catalog__underCover').width($('.catalog').width())
    //   $(this).removeClass('category__open--open');
    // })

    $('.catalog--onPage').hover(() => {
    }, function() {
      $('.category__open--open').removeClass('category__open--open')
      $('.catalog').removeClass('catalog--hovered')
    })

    $('.catalog--notOnPage').hover(() => {
    }, function() {
      $('.category__open--open').removeClass('category__open--open')
    })


    $('.catalogButton').click(function() {
      $('.catalog--notOnPage').toggleClass('catalog--show');
      $(document).mouseup( function(e){ // событие клика по веб-документу
        var div = $( ".catalog" ); // тут указываем ID элемента
        if ( !div.is(e.target) // если клик был не по нашему блоку
            && div.has(e.target).length === 0 ) { // и не по его дочерним элементам
          div.removeClass('catalog--show'); // скрываем его
        }
      });
    })
  } else {
    $('.headerBottom__toggler').click(function() {
      $('.cover').addClass('cover--active')
      $('.catalog').addClass('catalog--open');
    })

    $('.catalog__mobileHeading span').click(() => {
      $('.cover').removeClass('cover--active')
      $('.catalog').removeClass('catalog--open');
    })


    $('.category__heading').click(function() {
      $(this).siblings('.category__open').slideToggle();
      $(this).toggleClass('category__heading--active')
    })


    $('.dropList__heading').click(function() {
      $(this).siblings('.dropList__body').slideToggle();
      $(this).toggleClass('dropList__heading--active')
    })
  }


  // counter ligics 
  $('.counter__plus').click(function() {
    let value = Number($(this).siblings('p').text());
    value++;
    $(this).siblings('p').text(value)
  })

  $('.counter__minus').click(function() {
    let value = Number($(this).siblings('p').text());
    if(value > 1) {
      value--;
      $(this).siblings('p').text(value)
    }
  })


  // cart open/close
  $('.headerBottom__cart').click(function() {
    $('.cover').addClass('cover--active');
    $('.cart').addClass('cart--open');
  })

  $('.cart__close').click(function() {
    $('.cover').removeClass('cover--active');
    $('.cart').removeClass('cart--open');
  })




  //
  // if(+$(window).width() > 600) {
    
  // } else {
  //   $('.slider__body').slick({
  //     slidesToScroll: 1,
  //     arrows: true,
  //     nextArrow: '<a class="slider__arrow slider__arrow--next"><span class="icon-arrow"></span></a>',
  //     prevArrow: '<a class="slider__arrow slider__arrow--prev"><span class="icon-arrow"></span></a>',
  //     slidesToShow: 1,
  //   })
  // }


  


  //
  $('.colorBlock__item').click(function() {
    $(this).closest('.colorBlock').children('.colorBlock__item').removeClass('colorBlock__item--active');
    $(this).addClass('colorBlock__item--active');
  })



  //
  $('.advBlock__heading').click(function(){
    $('.advBlock__grid').slideToggle();
    $(this).toggleClass('advBlock__heading--active')
  })


  $('.footer__heading').click(function(){
    $(this).siblings('.footer__body').slideToggle();
    $(this).toggleClass('footer__heading--active')
  })


  //
  $(".numberonly").keypress(function (e) {
    if (e.which != 8 && e.which != 0 && (e.which < 48 || e.which > 57)) {
     return false;
   }
  });  

  //
  $('.priceRange__range').slider({
    range: true,
    min: 500,
    max: 83599,
    values: [ 0, 83599 ],
  });


  //
  $('.filter__heading--collapsable').click(function() {
    $(this).siblings('.filter__body').slideToggle()
  })

  //
  $('.filterButton').click(function() {
    $('.cover').addClass('cover--active');
    $('.filter').addClass('categoryBlock__filter--open')
  })


  $('.filter__mobileHeading span').click(function() {
    $('.cover').removeClass('cover--active');
    $('.filter').removeClass('categoryBlock__filter--open')
  })



  //

  $('.gallerySlider__for').slick({
    slidesToShow: 1,
    slidesToScroll: 1,
    arrows: false,
    fade: true,
    asNavFor: '.gallerySlider__nav'
  });
  $('.gallerySlider__nav').slick({
    slidesToShow: 4,
    slidesToScroll: 1,
    asNavFor: '.gallerySlider__for',
    focusOnSelect: true,
    nextArrow: '<a class="gallerySlider__arrow gallerySlider__arrow--next"><span class="icon-arrow"></span></a>',
    prevArrow: '<a class="gallerySlider__arrow gallerySlider__arrow--prev"><span class="icon-arrow"></span></a>',
  });


  $('.tabBlock__wrap').tabs();




  // up button 
  var btn = $('#up-button');

  $(window).scroll(function() {
    if ($(window).scrollTop() > 300) {
      btn.addClass('show');
    } else {
      btn.removeClass('show');
    }
  });

  btn.on('click', function(e) {
    e.preventDefault();
    $('html, body').animate({scrollTop:0}, '300');
  });



  // seo
  $('.seo__toggler').click(function() {
    $('.seo__inner p').toggleClass('seo__open');
    $(this).toggleClass('seo__toggler--active')
  })
})