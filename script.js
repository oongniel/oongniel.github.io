$(() => {
  const $typeWrap = $(".type-wrap");
  const $mainWrap = $(".main-wrap");
  const initTyped = () => {
    new Typed("#type-animation", {
      strings: [
        "Hello... you there?? :)",
        "Pls save the date...",
        "Drinks are on US!",
        "Hold on....",
        // "...07.07.2021",
        "and oh!",
        "...",
        "????",
        "WE'RE GETTING MARRIED!&lt;3",
      ],
      typeSpeed: 60,
      backSpeed: 30,
      loop: false,
      onComplete: () => {
        setTimeout(() => {
          animateMain();
        }, 1000);
      },
    });
  };

  const animateMain = () => {
    $typeWrap.addClass("inactive");
    $typeWrap.html();
    setTimeout(() => {
      $mainWrap.addClass("active");
    }, 300);
  };
  const init = () => {
    initTyped();
  };
  init();
});
