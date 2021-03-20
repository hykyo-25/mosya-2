$(function(){
  setTimeout(function(){
    $('.FirstView').hide();
  }, 2000);

  $('.off').click(function(){
    cancelFlag = 1;
    $('.here-2').addClass('active');
    $('.navigate').css({opacity: 0.0}).addClass('here-2').fadeTo(1000, 1, 'linear', function() {
      $('.active').removeClass('here-2 active');
    });
    $('.list').hide();
    $(this).hide();
    $('.on').show();
  });

  $('.on').click(function(){
    cancelFlag = 0;
    $('.here-2').addClass('active');
    $('section').eq(clickIndex).css({opacity: 0.0}).addClass('here-2').fadeTo(1000, 1, 'linear', function() {
      $('.active').removeClass('here-2 active');
    });
    $('.list').show();
    $(this).hide();
    $('.off').show();
  });


  var cancelFlag = 0;

  var clickIndex = 0;

  $('.index-btn').click(function() {

    if(cancelFlag == 0){
      cancelFlag = 1;
      if($('.index-btn').index($(this)) == clickIndex ){
        return;
      }else{
        $('.here-1').removeClass('here-1');
        clickIndex = $('.index-btn').index($(this));
        $('.index-btn').eq(clickIndex).addClass('here-1');

        $('.here-2').addClass('active');
        $('section').eq(clickIndex).css({opacity: 0.0}).addClass('here-2').fadeTo(1000, 1, 'linear', function() {
          $('.active').removeClass('here-2 active');
        });
        if(clickIndex==5){
          scrollFlag = 1;
        }
      }

      setTimeout(function(){
        cancelFlag = 0;
      }, 1000);

    }
  });

  var startPos = 0;
  var winScrollTop = 0;
  var scrollFlag = 0;

// https://www.telln.com/lesson/2016/02/12/scroll/
  var mousewheelevent = 'onwheel' in document ? 'wheel' : 'onmousewheel' in document ? 'mousewheel' : 'DOMMouseScroll';
    $(document).on(mousewheelevent,function(e){

      if(scrollFlag == 0){

        if(cancelFlag == 0){
          cancelFlag = 1;

          e.preventDefault();
          var delta = e.originalEvent.deltaY ? -(e.originalEvent.deltaY) : e.originalEvent.wheelDelta ? e.originalEvent.wheelDelta : -(e.originalEvent.detail);
          if (delta < 0){
              // マウスホイールを下にスクロールしたときの処理を記載
              $('.here-1').removeClass('here-1');
              clickIndex++;
              $('.index-btn').eq(clickIndex).addClass('here-1');

              $('.here-2').addClass('active');
              $('section').eq(clickIndex).css({opacity: 0.0}).addClass('here-2').fadeTo(1000, 1, 'linear', function() {
                $('.active').removeClass('here-2 active');
              });
              if(clickIndex==5){
                scrollFlag = 1;
              }

          } else {
              // マウスホイールを上にスクロールしたときの処理を記載
              if(clickIndex == 0){
                return;
              }else{
                $('.here-1').removeClass('here-1');
                clickIndex--;
                $('.index-btn').eq(clickIndex).addClass('here-1');

                $('.here-2').addClass('active');
                $('section').eq(clickIndex).css({opacity: 0.0}).addClass('here-2').fadeTo(1000, 1, 'linear', function() {
                  $('.active').removeClass('here-2 active');
                });
              }
          }

          setTimeout(function(){
            cancelFlag = 0;
          }, 1000);
        }

      }
    });

  $(window).scroll(function() {
    if($(this).scrollTop() == 0){
      scrollFlag = 0;
    }else{
      scrollFlag = 1;
    }
  });

  var num = 0;
  $('.illust').hover(
    function() {
      num = $('.illust').index($(this));
      $(this).fadeTo(300, 0);
      $('.illust2').eq(num).fadeIn(300);
     },
     function() {
      $('.illust2').eq(num).fadeOut(300);
      $(this).fadeTo(300, 1);
    });

});
