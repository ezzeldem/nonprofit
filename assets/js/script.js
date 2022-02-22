$(document).ready(function(){


    $('.story-slider').slick({
        infinite: true,
        slidesToShow: 2,
        slidesToScroll: 1,
        prevArrow:false,
        nextArrow:false,
        responsive: [
            {
              breakpoint: 1024,
              settings: {
                slidesToShow: 3,
                slidesToScroll: 3,
                infinite: true,
                dots: true
              }
            },
            {
              breakpoint: 992,
              settings: {
                slidesToShow: 2,
                slidesToScroll: 2
              }
            },
            {
              breakpoint: 772,
              settings: {
                slidesToShow: 1,
                slidesToScroll: 1
              }
            }
          ]
      });

      $('.menu-icon > i').click(function(){
          $('.nav-bar, .over-lay').show();
          $('body').addClass('body-over');
      })

      $('.exite-icon > i, .over-lay').click(function(){
        $('.nav-bar, .over-lay').hide();
        $('body').removeClass('body-over');
    })
AOS.init();
});










