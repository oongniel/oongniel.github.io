const Airtable = require("airtable");

const API_KEY = "key2sVp4i7mkwGmdv";
const searchParams = new URLSearchParams(window.location.search);

class App {
  constructor() {
    this.record = null;
    this.uid = searchParams.get("uid");
    this.base = new Airtable({ apiKey: API_KEY }).base("apphAQubtYSAcld88");
    this.state = {
      progress: 0,
    };
    this.pop = new Audio("pop.mp3");
    this.bgMusic = new Audio("bg.mp3");
    this.greetingAnimation = new TimelineMax();
    this.invitationAnimation = new TimelineMax();
    this.detailAnimation = new TimelineMax();
    this.setDomMap();
    this.bindEvents();
    this.getUser();
  }

  setDomMap = () => {
    // sections
    this.preparing = document.getElementById("preparing");
    this.introsection = document.getElementById("introsection");
    this.greeting = document.getElementById("greeting");
    this.invitationText = document.getElementById("invitation-text");
    this.detailText = document.getElementById("detail-text");
    // specifics
    this.progressbar = document.getElementById("progress");
    this.progressbarText =
      document.getElementsByClassName("progressbartext")[0];
    this.initButton = document.getElementsByClassName("button--init")[0];
    this.greetingGoToNext =
      document.getElementsByClassName("button--greeting")[0];
    this.invitationGoToNext = document.getElementsByClassName(
      "button--invitation-text"
    )[0];

    this.greetingNickname = document.getElementById("greeting-nickname");
  };

  getUser = () => {
    this.animateProgress();
    this.base("Guest List").find(this.uid, (err, record) => {
      if (err) {
        console.error(err);
        return;
      }
      setTimeout(() => {
        this.state.progress = 100;
        this.animateProgress();
        setTimeout(() => {
          this.apiLoaded();
        }, 1000);
      }, 2000);
      this.record = record;
      this.greetingNickname.innerHTML = `Hello, ${record.fields.Nickname}!`;
      // console.log("Retrieved", record, SplitText);
    });
  };

  // events
  bindEvents = () => {
    this.initButton.addEventListener("click", this.animateIntro);
    // this.greetingGoToNext.addEventListener("click", this.animateInvitationText);
    // this.invitationGoToNext.addEventListener("click", this.animateDetailText);
  };
  // end events

  apiLoaded = () => {
    // this.progressbarText.innerHTML = "Your invitation is ready!";
    this.initButton.style.opacity = 1;
  };

  animateProgress = () => {
    var tl = new TimelineMax({ repeat: -1, yoyo: true });

    tl.to(".clip-text", 4, {
      css: { "background-position": "800px center" },
      ease: Quad.easeInOut,
    });

    if (this.state.progress > 100) {
      return;
    }
    // this.progressbar.style.width = `${this.state.progress}%`;

    this.timeout = setTimeout(() => {
      clearTimeout(this.timeout);
      this.state.progress += 25;
      // this.animateProgress();
    }, 1000);
  };

  animateIntro = () => {
    const player = document.querySelector("lottie-player");
    player.load("https://assets6.lottiefiles.com/packages/lf20_to8oip6o.json");
    player.addEventListener("load", () => {
      this.preparing.classList.add("fade-out");
      setTimeout(() => {
        this.preparing.classList.remove("active");
        this.introsection.classList.add("active");
        player.play();
        this.pop.play();
        setTimeout(() => {
          this.animateGreeting();
        }, 1000);
      }, 300);
    });
  };

  animateGreeting = () => {
    this.bgMusic.loop = true;
    this.bgMusic.volume = 0.3;

    this.bgMusic.play();
    let splitWords = new SplitText("#greeting-nickname", {
      type: "chars",
      charsClass: "SplitClass",
    });

    this.introsection.classList.add("fade-out");
    setTimeout(() => {
      this.introsection.classList.remove("active");
      this.greeting.classList.add("active");
      this.greetingAnimation.set(splitWords.chars, { y: 20, autoAlpha: 0 });
      this.greetingAnimation.to(splitWords.chars, 0.5, {
        y: 0,
        autoAlpha: 1,
        ease: "power3.out",
        stagger: 0.05,
        onComplete: function () {
          // splitWords.revert();
        },
      });

      // this.greetingAnimation.fromTo(
      //   ".button--greeting",
      //   { y: 20, autoAlpha: 0, ease: Back.easeOut.config(2) },
      //   { y: 0, autoAlpha: 1, ease: Back.easeOut.config(2), delay: 0.5 }
      // );
      setTimeout(() => {
        this.animateInvitationText();
      }, 2000);
    }, 300);
  };

  animateInvitationText = () => {
    this.greetingAnimation.reverse();
    this.greeting.classList.add("fade-out");
    let h4 = new SplitText("#invitation-text h4", {
      type: "words",
      wordsClass: "SplitClass",
    });
    let h3 = new SplitText("#invitation-text h3", {
      type: "words",
      wordsClass: "SplitClass",
    });
    let h2 = new SplitText("#invitation-text h2", {
      type: "chars",
      charsClass: "SplitClass",
    });

    let h5 = new SplitText("#invitation-text h5", {
      type: "words",
      wordsClass: "SplitClass",
    });
    setTimeout(() => {
      this.greeting.classList.remove("active");
      this.invitationText.classList.add("active");

      this.invitationAnimation.staggerFrom(
        h4.words,
        0.5,
        {
          y: 20,
          autoAlpha: 0,
          ease: "power3.out",
          stagger: 0.1,
        },
        0.1,
        () => {}
      );
      this.invitationAnimation.staggerFrom(
        h3.words,
        0.5,
        {
          y: 20,
          autoAlpha: 0,
          ease: "power3.out",
          stagger: 0.1,
          delay: 0.5,
        },
        0.05,
        () => {}
      );
      this.invitationAnimation.staggerFrom(
        h2.chars,
        0.5,
        {
          x: 20,
          autoAlpha: 0,
          ease: "power3.out",
          stagger: 0.05,
          delay: 1,
        },
        0.05,
        () => {}
      );

      this.invitationAnimation.staggerFrom(
        h5.words,
        0.5,
        {
          // y: 20,
          autoAlpha: 0,
          scale: 0,
          ease: "power3.out",
          stagger: 0.05,
          delay: 2,
        },
        0.1,
        () => {}
      );

      // this.invitationAnimation.fromTo(
      //   ".button--invitation-text",
      //   { y: 20, autoAlpha: 0, ease: Back.easeOut.config(2) },
      //   { y: 0, autoAlpha: 1, ease: Back.easeOut.config(2), delay: 1 }
      // );
      setTimeout(() => {
        this.animateDetailText();
      }, 4000);
    }, 300);
  };

  animateDetailText = () => {
    this.invitationAnimation.reverse();
    this.invitationText.classList.add("fade-out");
    let p = new SplitText("#detail-text p", {
      type: "words",
      wordsClass: "SplitClass",
    });
    // let h3 = new SplitText("#invitation-text h3", {
    //   type: "chars",
    //   charsClass: "SplitClass",
    // });
    // let h2 = new SplitText("#invitation-text h2", {
    //   type: "chars",
    //   charsClass: "SplitClass",
    // });

    setTimeout(() => {
      this.invitationText.classList.remove("active");
      this.detailText.classList.add("active");

      this.detailAnimation.staggerFrom(
        p.words,
        0.5,
        {
          y: 20,
          autoAlpha: 0,
          ease: "power3.out",
          stagger: 0.1,
          delay: 0.5,
        },
        0.08,
        () => {}
      );
      this.detailAnimation.fromTo(
        ".button--rsvp",
        { y: 20, autoAlpha: 0, ease: Back.easeOut.config(2) },
        { y: 0, autoAlpha: 1, ease: Back.easeOut.config(2) }
      );

      this.detailAnimation.fromTo(
        ".button--more",
        { y: 20, autoAlpha: 0, ease: Back.easeOut.config(2) },
        { y: 0, autoAlpha: 1, ease: Back.easeOut.config(2) }
      );

      this.detailAnimation.fromTo(
        ".button--location",
        { y: 20, autoAlpha: 0, ease: Back.easeOut.config(2) },
        { y: 0, autoAlpha: 1, ease: Back.easeOut.config(2) }
      );
    }, 300);
  };
}

new App();
