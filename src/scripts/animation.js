import { TweenMax, TimelineMax, Power4 } from "gsap";

const duration = 0.5;

export default {
  show: (target, callback) => {
    const tl = new TimelineMax({
      onComplete: callback
    });

    tl.set(target, {
      x: window.innerWidth * 1.5,
      scale: 0.8,
      transformOrigin: "50% 50%"
    });

    tl.to(target, 0.5, {
      x: 0,
      ease: Power4.easeOut
    });

    tl.to(target, 1, {
      scale: 1,
      ease: Power4.easeOut
    });
  },
  hide: (target, callback) => {
    TweenMax.fromTo(
      target,
      1,
      {
        autoAlpha: 1
      },
      {
        autoAlpha: 0,
        ease: Power4.easeOut,
        onComplete: callback
      }
    );
  }
};
