import React from 'react';
import $ from 'jquery';
import { TimelineMax } from 'gsap';

const delimiter = '||';
let state = {
  titleTween: null,
};

export const animateHeader = () => {
  $('.strip').each(function() {
    const $t = $(this),
      str = String($t.html());
    const rows = str.split(delimiter);
    // rows = str.split('\n');
    $t.addClass('active');
    $t.html('');
    $.each(rows, function(i, val) {
      $('<span class="row-item"></span>').appendTo($t);

      const letters = $.trim(val).split('');

      $.each(letters, function(j, v) {
        v = v === ' ' ? '&nbsp;' : v;
        $('<span>' + $.trim(v) + '</span>').appendTo($('.row-item:last', $t));
      });
    });
  });
  triggerHeaderAnimate();
};

export const triggerHeaderAnimate = () => {
  for (let i = 0; i < $('.strip span').length; i++) {
    (function(ind) {
      setTimeout(function() {
        $('.strip span:not(".row-item")')
          .eq(ind)
          .toggleClass('animate');
      }, ind * 15);
    })(i);
  }
};

export const animateCount = delay => {
  delay = delay || 300;
  $('.count').each(function(i) {
    const num = Number($(this).text().replace(/,/g, ''));
    $(this)
      .prop('Counter', 0)
      .animate(
        {
          Counter: num,
        },
        {
          duration: 2500 + delay * i,
          easing: 'swing',
          step: function(now) {
            if (num % 1 === 0) {
              $(this).text(String(Math.ceil(now)).replace(/\B(?=(\d{3})+(?!\d))/g, ","));
            } else {
              $(this).text(now.toFixed(1).replace(/\B(?=(\d{3})+(?!\d))/g, ","));
            }
          },
        },
      );
  });
};

export const animateOnScroll = function() {
  $('.has-animation').each(function(index) {
    if (
      $(window).scrollTop() + $(window).height() >
      $(this).offset().top + $(this).outerHeight()
    ) {
      $(this)
        .delay($(this).data('delay'))
        .queue(function() {
          $(this).addClass('animate-in');
        });
    }
  });
};

export const generateHeader = title => {
  const arr = String(title).split(delimiter);
  console.log(arr);
  return arr.map(item => {
    return (
      <ul className="row-item">
        {item.split('').map(letters => {
          console.log(letters.length)
          return <li>{letters}</li>;
        })}
      </ul>
    );
  });
};
export const tweenHeader = (reverse) => {
  var letter = document.querySelectorAll('.row-item li');
  var tl = new TimelineMax({
    onComplete: () => {
      console.log('Hi');
    },
  });
  state.titleTween = tl;
  tl.set(letter, {
    autoAlpha: 1
  });
  tl.from(letter, 0.8, {
    y: function(index) {
      return (index + 1) * 5;
    },
    autoAlpha: 0
  }).delay(2);
};

export const reverseTweenHeader = () => {
  if(!state.titleTween) {
    return;
  }
  state.titleTween.reverse();
  state.titleTween = null;
}
