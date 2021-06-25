$(() => {
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
        console.log("Done");
      },
    });
  };
  const init = () => {
    initTyped();
  };
  init();
  // var typed4 =;
});
