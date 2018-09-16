import React from 'react';
import $ from 'jquery';
import { TimelineMax, TweenMax, TweenLite } from 'gsap';
import config from "../config";

const delimiter = '||';
let state = {
  titleTween: null,
  slideRightTween: null,
  slideLeftTween: null,
  slideUpTween: null,
  slideDownTween: null,
};

export const getRouteList = cb => {
  const list = config.map((item, index) => {
    return item.route ? item.route : index + 1;
  });
  cb(list);
};

export const getRouteListForNav = cb => {
  let activeOn = "";
  const list = config.map((item, index) => {
    let obj = {};
    activeOn = item.route || activeOn;
    obj.activeOn = activeOn;
    obj.route = item.route ? item.route : index + 1
    return obj;
  });
  cb(list);
};

// export const pageEnterAnimation = (node, forward, handleComplete) => {
//   // Old
//   const tl = new TimelineMax();

//   tl.set(node, {
//     scale: 0.5,
//     xPercent: forward ? 100 : -100,
//     opacity: 0.5,
//   });

//   tl.to(node, 0.3, {
//     xPercent: forward ? 50 : -50,
//   });

//   tl.to(node, 0.5, {
//     xPercent: 0,
//     opacity: 1,
//   });

//   tl.to(node, 0.7, {
//     scale: 1,
//     onComplete: handleComplete,
//     onCompleteParams: [node],
//   });

// };

// export const pageExitAnimation = (node, forward) => {
//   const tl = new TimelineMax();

//   tl.set(node, {
//     xPercent: 0,
//     scale: 1,
//     transformOrigin: '50% 50%',
//   });

//   tl.to(node, 0.3, {
//     scale: 0.5,
//   });

//   tl.to(node, 1, {
//     xPercent: forward ? -100 : 100,
//   });
// };

export const pageEnterAnimation = (node, forward, handleComplete) => {
  // Old
  const tl = new TimelineMax();
  
  tl.set(node, {
    // scale: 0.5,
    xPercent: forward ? 100 : -100,
    autoAlpha: 0
  });

  // tl.to(node, 0.3, {
  //   xPercent: forward ? 50 : -50,
  // });

  tl.to(node, 0.8, {
    xPercent: 0,
    autoAlpha: 1,
    onComplete: handleComplete,
    onCompleteParams: [node],
  });

  // tl.to(node, 1, {
  //   // scale: 1,
  //   onComplete: handleComplete,
  //   onCompleteParams: [node],
  // });

};

export const pageExitAnimation = (node, forward) => {
  const tl = new TimelineMax();

  tl.set(node, {
    xPercent: 0,
    autoAlpha: 1,
  });

  // tl.to(node, 0.3, {
  //   scale: 0.5,
  // });

  tl.to(node, 0.8, {
    xPercent: forward ? -100 : 100,
    autoAlpha: 0
  });
};

export const animateCount = delay => {
  delay = delay || 300;
  $('.count').each(function(i) {
    const num = Number(
      $(this)
        .text()
        .replace(/,/g, ''),
    );
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
              $(this).text(
                String(Math.ceil(now)).replace(/\B(?=(\d{3})+(?!\d))/g, ','),
              );
            } else {
              $(this).text(
                now.toFixed(1).replace(/\B(?=(\d{3})+(?!\d))/g, ','),
              );
            }
          },
        },
      );
  });
};

export const generateHeader = title => {
  const arr = String(title).split(delimiter);
  return arr.map((item, index) => {
    return (
      <ul className="row-item" key={index}>
        {item.split('').map((letters, i) => {
          return <li key={i}>{letters}</li>;
        })}
      </ul>
    );
  });
};
export const tweenHeader = reverse => {
  var letter = document.querySelectorAll('.row-item li');
  var tl = new TimelineMax({
    onComplete: () => {
      // console.log('Hi');
    },
  });
  tl.set(letter, {
    autoAlpha: 1,
  });
  tl.from(letter, 0.8, {
    y: function(index) {
      return (index + 1) * 5;
    },
    autoAlpha: 0,
    delay: 1
  });
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
      x: -50,
    });
    const anim2 = TweenMax.to(slideRights[i], duration, {
      autoAlpha: 1,
      x: 0,
      delay: delay,
    });
    tweens = [...tweens, anim1, anim2];
  }
  state.slideRightTween = tweens;
};

export const slideLeft = () => {
  var slideLefts = document.querySelectorAll('.slide-left');
  let tweens = [];
  for (let i = 0; i < slideLefts.length; ++i) {
    const delay = slideLefts[i].dataset.delay || 0;
    const duration = slideLefts[i].dataset.duration || 0.8;
    const anim1 = TweenMax.set(slideLefts[i], {
      autoAlpha: 0,
      scale: 1,
      x: 50,
    });
    const anim2 = TweenMax.to(slideLefts[i], duration, {
      autoAlpha: 1,
      x: 0,
      delay: delay,
    });
    tweens = [...tweens, anim1, anim2];
  }
  state.slideLeftTween = tweens;
};

export const slideUp = () => {
  var slideUps = document.querySelectorAll('.slide-up');
  let tweens = [];
  for (let i = 0; i < slideUps.length; ++i) {
    const delay = slideUps[i].dataset.delay || 0;
    const duration = slideUps[i].dataset.duration || 0.8;
    const anim1 = TweenMax.set(slideUps[i], {
      autoAlpha: 0,
      scale: 1,
      y: 50,
    });
    const anim2 = TweenMax.to(slideUps[i], duration, {
      autoAlpha: 1,
      y: 0,
      delay: delay,
    });
    tweens = [...tweens, anim1, anim2];
  }
  state.slideUpTween = tweens;
};

export const slideDown = () => {
  var slideDowns = document.querySelectorAll('.slide-down');
  let tweens = [];
  for (let i = 0; i < slideDowns.length; ++i) {
    const delay = slideDowns[i].dataset.delay || 0;
    const duration = slideDowns[i].dataset.duration || 0.8;
    const anim1 = TweenMax.set(slideDowns[i], {
      autoAlpha: 0,
      scale: 1,
      y: -50,
    });
    const anim2 = TweenMax.to(slideDowns[i], duration, {
      autoAlpha: 1,
      y: 0,
      delay: delay,
    });
    tweens = [...tweens, anim1, anim2];
  }
  state.slideDownTween = tweens;
};

export const reverseTweens = name => {
  const tweenObj = state[name];
  if (!tweenObj && name !== 'all') {
    return;
  }
  switch (name) {
    case 'slideLeftTween':
    case 'slideRightTween':
    case 'slideUpTween':
    case 'slideDownTween':
      // console.log(tweenObj);
      tweenObj.map(tween => {
        tween.reverse();
        return true;
      });
      break;
    case 'titleTween':
      state.titleTween.reverse();
      state.titleTween = null;
      break;
    default:
      break;
  }
};

export const reverseAllTweens = () => {
  reverseTweens('slideLeftTween');
  reverseTweens('slideRightTween');
  reverseTweens('slideUpTween');
  reverseTweens('slideDownTween');
  reverseTweens('titleTween');
};
