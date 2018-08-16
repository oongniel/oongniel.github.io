$(function() {
  var animateHeader = function() {
    $(".strip").each(function() {
      var $t = $(this),
        rows = $.trim($t.html()).split("<br>");

      $t.html("");

      $.each(rows, function(i, val) {
        $('<span class="row"></span>').appendTo($t);

        var letters = $.trim(val).split("");

        $.each(letters, function(j, v) {
          v = v == " " ? "&nbsp;" : v;
          $("<span>" + $.trim(v) + "</span>").appendTo($(".row:last", $t));
        });
      });
    });
  };

  var toggleHeaderAnimation = function() {
    for (i = 0; i < $(".strip span").length; i++) {
      (function(ind) {
        setTimeout(function() {
          $('.strip span:not(".row")')
            .eq(ind)
            .toggleClass("animate");
        }, ind * 15);
      })(i);
    }
  };

  var windowScroll = function() {
    $(window).scroll(function() {
      $(".has-animation").each(function(index) {
        if ($(window).scrollTop() + $(window).height() > $(this).offset().top) {
          $(this)
            .delay($(this).data("delay"))
            .queue(function() {
              $(this).addClass("animate-in");
            });
        }
      });
    });
  };

  var animateImages = function() {
    $(".has-animation").each(function(index) {
      if (
        $(window).scrollTop() + $(window).height() >
        $(this).offset().top + $(this).outerHeight()
      ) {
        $(this)
          .delay($(this).data("delay"))
          .queue(function() {
            $(this).addClass("animate-in");
          });
      }
    });
  };

  var watchPageChange = function() {
    $("body").on("page-change", function() {
      // alert();
      // setTimeout(function(){
      //   animateHeader();
      //   toggleHeaderAnimation();
      // }, 1000);
    });
  };

  var removeLoader = function() {
    $('.loader').fadeOut(500);
  }
  var init = function() {
    setTimeout(function(){
      removeLoader();
      watchPageChange();
      animateImages();
      windowScroll();
      animateHeader();
      toggleHeaderAnimation();
      watchPageChange();
      Barba.Pjax.init();
      AOS.init();
      setTimeout(function() {
        $('.count').each(function () {
          $(this).prop('Counter',0).animate({
              Counter: $(this).text()
          }, {
              duration: 3500,
              easing: 'swing',
              step: function (now) {
                  $(this).text(Math.ceil(now));
              }
          });
      });
      }, 100);
    }, 1000);
    
  };

  init();
});
