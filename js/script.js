AOS.init({
  offset: 400, 
  duration: 1500, 
});
$(function(){

    'use strict';

    var mixer =mixitup('.gallery',
    {
      animation: {
        duration: 1300
    }
    }
    );


    var winh=$(window).height(),
        upperh=$('.upper-nav').innerHeight(),
       navh=$('.navbar').innerHeight();

       $('.image ,.carousel-item').height(winh - (upperh+navh));

       $('.links ul li').on('click',function() {
           $(this).addClass('active').siblings().removeClass('active');
           
       })

       $('.fancy').fancybox({
        buttons : [ 
          'slideShow',
          'share',
          'zoom',
          'fullScreen',
          'close'
        ],
        thumbs : {
          autoStart : true
        }
      });

      
      $("body").niceScroll({
        cursorcolor: "#ddd"
      });


      var x=$(".sec6").offset().top;

      $(window).scroll(function() {
        if ($(document).scrollTop() < x ) {
          $('.timer').countTo( { speed: 2000});
        }
      });
  
       
  


    


});