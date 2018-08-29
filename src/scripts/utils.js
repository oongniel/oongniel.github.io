import $ from "jquery";

const delimiter = "||";
export const animateHeader = () => {
  $(".strip").each(function() {
    const $t = $(this),
      str = String($t.html());
    const rows = str.split(delimiter);
    // rows = str.split('\n');
    $t.addClass("active");
    $t.html("");
    $.each(rows, function(i, val) {
      $('<span class="row-item"></span>').appendTo($t);

      const letters = $.trim(val).split("");

      $.each(letters, function(j, v) {
        v = v === " " ? "&nbsp;" : v;
        $("<span>" + $.trim(v) + "</span>").appendTo($(".row-item:last", $t));
      });
    });
  });
  for (let i = 0; i < $(".strip span").length; i++) {
    (function(ind) {
      setTimeout(function() {
        $('.strip span:not(".row-item")')
          .eq(ind)
          .toggleClass("animate");
      }, ind * 15);
    })(i);
  }
};

export const animateCount = delay => {
  delay = delay || 300;
  $(".count").each(function(i) {
    const num = Number($(this).text());
    $(this)
      .prop("Counter", 0)
      .animate(
        {
          Counter: num
        },
        {
          duration: 2500 + delay * i,
          easing: "swing",
          step: function(now) {
            if (num % 1 === 0) {
              $(this).text(Math.ceil(now));
            } else {
              $(this).text(now.toFixed(1));
            }
          }
        }
      );
  });
};

export const animateOnScroll = function() {
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
