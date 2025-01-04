$(() => {
  const $typeWrap = $(".type-wrap");
  const $mainWrap = $(".main-wrap");
  const $viewDetails = $(".view-details");
  const $openInvite = $(".open-invite");
  const $audio = document.getElementById("my_audio");

  const bindEvents = () => {
    $viewDetails.on("click", () => {
      animateMain();
    });

    $openInvite.on("click", () => {
      initTyped();
    });
  };

  const initTyped = () => {
    $openInvite.css("opacity", 0);
    $typeWrap.css("display", "inherit");
    $(".my_audio").trigger("load");

    setTimeout(() => {
      $audio.play();
      new Typed("#type-animation", {
        strings: [
          "Hey there... 👶💖",
          "You are invited",
          "to a special moment",
          "Mark your calendar! ✨",
          "It's a celebration of love...",
          "faith...",
          "and family...",
          "Join us to celebrate 🌟",
          "our little angel's christening!",
          "Maria Isabelle C. Montesclaros",
        ],
        typeSpeed: 20,
        backSpeed: 10,
        loop: false,
        onComplete: () => {
          setTimeout(() => {
            $viewDetails.addClass("active");
          }, 500);
        },
      });
    }, 500);
  };

  const animateMain = () => {
    $typeWrap.addClass("inactive");
    $viewDetails.removeClass("active");
    $typeWrap.html();

    setTimeout(() => {
      $mainWrap.addClass("active");
      // $audio.currentTime = 80;
    }, 300);
  };
  const init = () => {
    bindEvents();
    // initTyped();
    // $viewDetails.addClass("active");
  };
  init();
});
