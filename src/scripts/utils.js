import React from 'react';
import $ from 'jquery';
import { TimelineMax, TweenMax, Power3 } from 'gsap';

const delimiter = '||';
let state = {
  titleTween: null,
  slideRightTween: null,
  slideLeftTween: null,
  slideUpTween: null,
  slideDownTween: null,
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
  tl.set(letter, {
    autoAlpha: 1
  });
  tl.from(letter, 0.8, {
    y: function(index) {
      return (index + 1) * 5;
    },
    autoAlpha: 0
  }).delay(2);
  state.titleTween = tl;
};

export const slideRight = () => {
  var slideRights = document.querySelectorAll('.slide-right');
  let tweens = [];
  for (let i = 0; i < slideRights.length; ++i) {
    const delay = slideRights[i].dataset.delay || 0;
    const duration = slideRights[i].dataset.duration || 0.8;
    const anim1 = TweenMax.set(slideRights[i], {
      autoAlpha: 0,
      scale: 1,
      x: -50
    });
    const anim2 = TweenMax.to(slideRights[i], duration, {
      autoAlpha: 1,
      x: 0,
      delay: delay
    });
    tweens = [...tweens, anim1, anim2];
  }
  state.slideRightTween = tweens;
}

export const slideLeft = () => {
  var slideLefts = document.querySelectorAll('.slide-left');
  let tweens = [];
  for (let i = 0; i < slideLefts.length; ++i) {
    const delay = slideLefts[i].dataset.delay || 0;
    const duration = slideLefts[i].dataset.duration || 0.8;
    const anim1 = TweenMax.set(slideLefts[i], {
      autoAlpha: 0,
      scale: 1,
      x: 50
    });
    const anim2 = TweenMax.to(slideLefts[i], duration, {
      autoAlpha: 1,
      x: 0,
      delay: delay
    });
    tweens = [...tweens, anim1, anim2];
  }
  state.slideLeftTween = tweens;
}

export const slideUp = () => {
  var slideUps = document.querySelectorAll('.slide-up');
  let tweens = [];
  for (let i = 0; i < slideUps.length; ++i) {
    const delay = slideUps[i].dataset.delay || 0;
    const duration = slideUps[i].dataset.duration || 0.8;
    const anim1 = TweenMax.set(slideUps[i], {
      autoAlpha: 0,
      scale: 1,
      y: 50
    });
    const anim2 = TweenMax.to(slideUps[i], duration, {
      autoAlpha: 1,
      y: 0,
      delay: delay
    });
    tweens = [...tweens, anim1, anim2];
  }
  state.slideUpTween = tweens;
}

export const slideDown = () => {
  var slideDowns = document.querySelectorAll('.slide-down');
  let tweens = [];
  for (let i = 0; i < slideDowns.length; ++i) {
    const delay = slideDowns[i].dataset.delay || 0;
    const duration = slideDowns[i].dataset.duration || 0.8;
    const anim1 = TweenMax.set(slideDowns[i], {
      autoAlpha: 0,
      scale: 1,
      y: -50
    });
    const anim2 = TweenMax.to(slideDowns[i], duration, {
      autoAlpha: 1,
      y: 0,
      delay: delay
    });
    tweens = [...tweens, anim1, anim2];
  }
  state.slideDownTween = tweens;
}

export const reverseTweens = (name) => {
  const tweenObj = state[name];
  if(!tweenObj && name !== 'all') {
    return;
  }
  switch (name) {
    case 'slideLeftTween':
    case 'slideRightTween':
    case 'slideUpTween':
    case 'slideDownTween':
    console.log(tweenObj)
      tweenObj.map(tween => {
        tween.reverse();
      });
      break;
    case 'titleTween':
      state.titleTween.reverse();
      state.titleTween = null;
      break;
    default:
      break;
  }
}