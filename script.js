$(() => {
  const $typeWrap = $(".type-wrap");
  const $mainWrap = $(".main-wrap");
  const $viewDetails = $(".view-details");

  const bindEvents = () => {
    $viewDetails.on("click", () => {
      animateMain();
    });
  };

  const initTyped = () => {
    new Typed("#type-animation", {
      strings: [
        "Hello... you there?? :)",
        "Unmute your phone... :P",
        "Pls save the date...",
        "Drinks are on US!",
        "Hold on....",
        "and oh!",
        "...",
        "WE'RE GETTING MARRIED!&lt;3",
      ],
      typeSpeed: 50,
      backSpeed: 30,
      loop: false,
      onComplete: () => {
        setTimeout(() => {
          $viewDetails.addClass("active");
        }, 500);
      },
    });
  };

  const animateMain = () => {
    $typeWrap.addClass("inactive");
    $viewDetails.removeClass("active");
    $typeWrap.html();
    $(".my_audio").trigger("load");

    setTimeout(() => {
      $mainWrap.addClass("active");
      const $audio = document.getElementById("my_audio");
      $audio.currentTime = 80;
      $audio.play();
    }, 300);
  };
  const init = () => {
    bindEvents();
    initTyped();
    // $viewDetails.addClass("active");
  };
  init();
});
