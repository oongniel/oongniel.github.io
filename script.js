$(() => {
  var typed4 = new Typed("#type-animation", {
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
    typeSpeed: 60,
    backSpeed: 30,
    loop: false,
    onComplete: () => {
      console.log("Done");
    },
  });
});
