const domMap = {
  intro: document.getElementById("intro"),
  welcome: document.getElementById("welcome"),
};

const animateLoader = () => {
  const player = document.querySelector("lottie-player");
  player.load("https://assets10.lottiefiles.com/packages/lf20_kd5x7unm.json");
  player.play();
  player.addEventListener("complete", () => animateSection());
};

const animateSection = () => {
  domMap.intro.classList = "hide";
  setTimeout(() => {
    domMap.intro.remove();
    document.body.className = "animate";

    domMap.welcome.classList = "active";
    let tl = gsap.timeline();

    const childSplit = new SplitText("h1", {
      type: "words",
      wordsClass: "split-child",
    });

    gsap.from(childSplit.words, {
      duration: 1.5,
      yPercent: 100,
      ease: "power4",
      stagger: 0.1,
    });
  }, 600);
};

const init = () => {
  animateLoader();
};

init();
