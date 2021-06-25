$(() => {
  var typed4 = new Typed("#typed4", {
    strings: [
      "Hello!",
      "you there?",
      "... :)",
      "Drinks are on US!",
      "July 07, 2021",
      "Golden Sands 10 Hotel..",
      "and oh!",
      "...",
      "????",
      "WE'RE GETTING MARRIED! :)",
    ],
    typeSpeed: 70,
    backSpeed: 30,
    attr: "placeholder",
    bindInputFocusEvents: false,
    loop: false,
    onComplete: () => {
      console.log("Done");
    },
  });
});
