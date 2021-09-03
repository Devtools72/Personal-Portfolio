
$(document).ready(function() {

  // humbar menu
  $('.nav-icon').click(function(){
    $(this).toggleClass('show');
    $('.menu ul').slideToggle(300);
    return false;
  });

// video Popup start 
  $('.video-play-btn').magnificPopup({
  type: 'iframe',
    iframe: {
      markup: '<div class="mfp-iframe-scaler">'+
            '<div class="mfp-close"></div>'+
            '<iframe class="mfp-iframe" frameborder="0" allowfullscreen></iframe>'+
          '</div>', 

      patterns: {
        youtube: {
        index: 'youtube.com/', 

        id: 'v=',
      
        src: 'https://www.youtube.com/embed/%id%?autoplay=1'  
        }
      
      },
      
      srcAction: 'iframe_src', 
    }


  });

   $('.menu ul li a,.scrollSectionBtn').click(function(){

          $('html,body').animate({
            scrollTop:$($(this).attr('href')).offset().top
          },1000);

          return false;
        });

});

    $(window).scroll(function(){

        var scrollValue = $(this).scrollTop();

        if(scrollValue>300){
          $('.btn').fadeIn();
        }else{
           $('.btn').fadeOut();
        }

        if(scrollValue>200){
          $('.menuarea').addClass('FixedHeader');
        }else{
           $('.menuarea').removeClass('FixedHeader');
        }

      });
