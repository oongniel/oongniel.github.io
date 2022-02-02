
class AnimateText {
  constructor() {
    this.giftName = localStorage.getItem("GIFT_NAME");

    this.initialAnimation = new TimelineMax();
    this.firstAnimation = new TimelineMax();
    this.secondAnimation = new TimelineMax();
    this.thirdAnimation = new TimelineMax();
    this.thirdAnimationAnimated = false;
    this.venueAnimation = new TimelineMax();
    this.venueAnimated = false;
    this.dressCodeAnimation = new TimelineMax();
    this.dressCodeAnimated = false;
    this.wishlistAnimation = new TimelineMax();
    this.wishlistAnimated = false;
    this.activeSection = "";
    this.initialise();
    this.updateGift(true);

    this.bindEvents();
    this.base = new Airtable({ apiKey: "key2sVp4i7mkwGmdv" }).base(
      "appkYZZJoBgeZ8qqD"
    );
  }

  updateGift = (addRemove) => {
    if (this.giftName) {
      document.getElementById("gift-item").innerHTML = `You are bringing: ${
        this.giftName
      } ${addRemove ? `<a id="remove-gift">Remove</a>` : ""}`;
      localStorage.setItem("GIFT_NAME", this.giftName);
    }
  };

  initialise = () => {
    document.getElementById("hello").innerHTML = `Hello, ${localStorage.getItem(
      "NAME"
    )}!`;

    this.initialAnimation.set(
      document.getElementById("text-wrapper--initial"),
      { autoAlpha: 1 },
      0
    );
    let split2 = new SplitText("#hello", {
        type: "chars",
        charsClass: "SplitClass",
      }),
      target2 = split2.chars;

    this.initialAnimation.staggerFrom(
      target2,
      0.5,
      { y: 20, autoAlpha: 0, ease: Back.easeOut.config(2) },
      0.05,
      () => {
        split2.revert();
      }
    );
    setTimeout(() => {
      this.initialAnimation.reverse(1);
      setTimeout(() => {
        this.buildText();
      }, 1000);
    }, 3000);
  };

  buildText = () => {
    // this.firstAnimation = new TimelineLite();
    this.firstAnimation.set(
      document.getElementById("text-wrapper--first"),
      { autoAlpha: 1 },
      0
    );
    let split2 = new SplitText("#filler", {
        type: "words",
        wordsClass: "SplitClass",
      }),
      target2 = split2.words;

    this.firstAnimation.staggerFrom(
      target2,
      0.5,
      { y: 20, autoAlpha: 0, ease: Back.easeOut.config(2), delay: 0.5 },
      0.05,
      () => {
        split2.revert();
      }
    );
    setTimeout(() => {
      this.firstAnimation.reverse(1);
      setTimeout(() => {
        this.animateSecondScreen();
      }, 1000);
    }, 3000);
  };

  animateSecondScreen = () => {
    // const tl = new TimelineLite();
    this.secondAnimation.set(
      document.getElementById("text-wrapper--second"),
      { autoAlpha: 1 },
      0
    );
    let split2 = new SplitText("#join-us", {
        type: "words",
        wordsClass: "SplitClass",
      }),
      target2 = split2.words;

    let split3 = new SplitText("#gender-reveal", {
        type: "words",
        wordsClass: "SplitClass",
      }),
      target3 = split3.words;

    this.secondAnimation.staggerFrom(
      target2,
      0.5,
      { y: 20, autoAlpha: 0, ease: Back.easeOut.config(2), delay: 0.5 },
      0.05,
      function () {
        split2.revert();
      }
    );

    this.secondAnimation.staggerFrom(
      target3,
      0.5,
      { y: 20, autoAlpha: 0, ease: Back.easeOut.config(2), delay: 2 },
      0.05,
      function () {
        split3.revert();
      }
    );

    this.secondAnimation.staggerFromTo(
      "#amazing",
      0.5,
      { y: 20, opacity: 0, ease: Back.easeOut.config(2) },
      { y: 0, opacity: 1, ease: Back.easeOut.config(2), delay: 0.8 }
    );
  };

  animateThirdScreen = () => {
    if (this.thirdAnimationAnimated) {
      this.thirdAnimation.restart(true, false);

      return;
    }
    this.thirdAnimationAnimated = true;
    this.thirdAnimation.set(
      document.getElementById("text-wrapper--third"),
      { autoAlpha: 1 },
      0
    );
    let split2 = new SplitText("#details", {
        type: "words",
        wordsClass: "SplitClass",
      }),
      target2 = split2.words;

    this.thirdAnimation.staggerFrom(
      target2,
      0.5,
      { y: 20, autoAlpha: 0, ease: Back.easeOut.config(2) },
      0.05,
      function () {
        split2.revert();
      }
    );

    this.thirdAnimation.staggerFromTo(
      "#text-wrapper--third a, #text-wrapper--third p",
      0.5,
      { y: 20, opacity: 0, ease: Back.easeOut.config(2) },
      { y: 0, opacity: 1, ease: Back.easeOut.config(2) },
      0.3
    );
  };

  animateVenue = () => {
    this.activeSection = "venue";
    if (this.venueAnimated) {
      this.venueAnimation.restart(true, false);

      return;
    }
    this.venueAnimated = true;
    this.venueAnimation.set(
      document.getElementById("text-wrapper--venue"),
      { autoAlpha: 1 },
      0
    );

    this.venueAnimation.staggerFromTo(
      "#text-wrapper--venue a, #text-wrapper--venue h3, #text-wrapper--venue p",
      1,
      { x: 50, opacity: 0, ease: Back.easeOut.config(2) },
      { x: 0, opacity: 1, ease: Back.easeOut.config(2) },
      0.3
    );
  };

  animateWishlist = () => {
    this.activeSection = "wishlist";
    if (this.wishlistAnimated) {
      this.wishlistAnimation.restart(true, false);

      return;
    }
    this.wishlistAnimated = true;
    this.wishlistAnimation.set(
      document.getElementById("text-wrapper--wishlist"),
      { autoAlpha: 1 },
      0
    );

    this.wishlistAnimation.staggerFromTo(
      "#text-wrapper--wishlist, #text-wrapper--wishlist h3, #text-wrapper--wishlist p",
      1,
      { x: 50, opacity: 0, ease: Back.easeOut.config(2) },
      { x: 0, opacity: 1, ease: Back.easeOut.config(2) },
      0.3
    );

    this.wishlistAnimation.staggerFromTo(
      "#text-wrapper--wishlist li",
      0.5,
      { y: 20, opacity: 0, ease: Back.easeOut.config(1) },
      { y: 0, opacity: 1, ease: Back.easeOut.config(1) },
      0.1
    );
  };

  animateDressCode = () => {
    this.activeSection = "dresscode";
    if (this.dressCodeAnimated) {
      this.dressCodeAnimation.restart(true, false);

      return;
    }
    this.dressCodeAnimated = true;
    this.dressCodeAnimation.set(
      document.getElementById("text-wrapper--dresscode"),
      { autoAlpha: 1 },
      0
    );

    this.dressCodeAnimation.staggerFromTo(
      "#text-wrapper--dresscode a, #text-wrapper--dresscode h3, #text-wrapper--dresscode p",
      1,
      { x: 50, opacity: 0, ease: Back.easeOut.config(2) },
      { x: 0, opacity: 1, ease: Back.easeOut.config(2) },
      0.3
    );
  };

  bindEvents = () => {
    document.getElementById("switch-user").addEventListener(
      "click",
      (event) => {
        localStorage.clear();
        window.location.reload();
      },
      false
    );
    document.getElementById("amazing").addEventListener(
      "click",
      (event) => {
        this.secondAnimation.reverse(1);
        setTimeout(() => {
          this.animateThirdScreen();
        }, 1000);
      },
      false
    );

    document.getElementById("venue").addEventListener(
      "click",
      (event) => {
        this.thirdAnimation.reverse(1);

        setTimeout(() => {
          this.animateVenue();
        }, 1000);
      },
      false
    );

    document.getElementById("dresscode").addEventListener(
      "click",
      (event) => {
        this.thirdAnimation.reverse(1);

        setTimeout(() => {
          this.animateDressCode();
        }, 1000);
      },
      false
    );

    document.getElementById("wishlist").addEventListener(
      "click",
      (event) => {
        this.thirdAnimation.reverse(1);

        setTimeout(() => {
          this.animateWishlist();
        }, 1000);
      },
      false
    );

    document.getElementById("go-back").addEventListener(
      "click",
      (event) => {
        this.venueAnimation.reverse(1);
        setTimeout(() => {
          this.animateThirdScreen();
        }, 1000);
      },
      false
    );
    document.getElementById("go-back-wl").addEventListener(
      "click",
      (event) => {
        this.wishlistAnimation.reverse(1);
        setTimeout(() => {
          this.animateThirdScreen();
        }, 1000);
      },
      false
    );
    document.getElementById("go-back-dc").addEventListener(
      "click",
      (event) => {
        this.dressCodeAnimation.reverse(1);
        setTimeout(() => {
          this.animateThirdScreen();
        }, 1000);
      },
      false
    );

    document.querySelectorAll(".gift-btn").forEach((item) => {
      item.addEventListener("click", (event) => {
        let text = "Are you sure you want to give this to our baby?";
        const gftName = event.currentTarget.dataset.name;
        const id = event.currentTarget.dataset.id;
        if (confirm(text) == true) {
          this.base("Gift Ideas").update(
            [
              {
                id,
                fields: {
                  Guest: [localStorage.getItem("ID")],
                },
              },
            ],
            (err, records) => {
              if (err) {
                console.error(err);
                return;
              }
              localStorage.setItem("GIFT_ID", id);
              alert(
                "Thank you! This is much appreciated! If you change your mind and would like to change or remove the selected gift, please refresh the page. Thank you! See you!"
              );
              item.parentNode.classList.add("hasUser");
              item.remove();
              const items = document.querySelectorAll(".gift-btn");

              items.forEach((box) => {
                box.remove();
              });
              this.giftName = gftName;
              this.updateGift(false);
            }
          );
        }
      });
    });
    if (document.getElementById("remove-gift")) {
      document.getElementById("remove-gift").addEventListener(
        "click",
        (event) => {
          let text = "Are you sure you want to remove your gift?";
          const gftName = event.currentTarget.dataset.name;
          if (confirm(text) == true) {
            this.base("Gift Ideas").update(
              [
                {
                  id: localStorage.getItem("GIFT_ID"),
                  fields: {
                    Guest: [],
                  },
                },
              ],
              function (err, records) {
                if (err) {
                  console.error(err);
                  return;
                }
                alert(
                  "No problem! In case you want to select another gift, please refresh the page. See you!"
                );
                // item.parentNode.classList.add("hasUser");
                // item.remove();
                // const items = document.querySelectorAll(".gift-btn");

                // items.forEach((box) => {
                //   box.remove();
                // });
                document.getElementById("gift-item").innerHTML = ``;
                localStorage.setItem("GIFT_NAME", "");
              }
            );
          }
        },
        false
      );
    }
  };
}



// const drawAvatar = () => {
//   document.getElementById("initial-screen").remove();

//   TweenMax.to(".avatar", 0.5, {
//     autoAlpha: 1,
//   });
//   document.getElementById("name").innerHTML = `<span>${localStorage.getItem(
//     "NAME"
//   )}</span>`;
// };

// document.addEventListener(
//   "click",
//   (event) => {
//     if (event.target.matches("#proceed")) {
//       TweenMax.to("#initial-screen", 1, {
//         autoAlpha: 0,
//       });
//       setTimeout(() => {
//         drawAvatar();
//         new AnimateText();
//       }, 1000);
//     } else {
//       return;
//     }
//   },
//   false
// );

// const API_KEY = "key2sVp4i7mkwGmdv";
// const getData = async () => {
//   let activeID = localStorage.getItem("ID");
//   const response = await fetch(
//     "https://api.airtable.com/v0/appkYZZJoBgeZ8qqD/Guest%20List?sort%5B0%5D%5Bfield%5D=Fullname",
//     {
//       headers: {
//         Authorization: `Bearer ${API_KEY}`,
//       },
//     }
//   );
//   const data = await response.json();
//   console.log(data);
//   let html = "<option  selected disabled>Select your name</option>";
//   data.records.map((item) => {
//     html += `<option data-id="${item.id}" value="${item.id}">${item.fields.Fullname}</option>`;
//   });

//   var anchors = document.getElementsByTagName("a");
//   for (var i = 0; i < anchors.length; i++) {
//     var current = anchors[i];
//     current.addEventListener(
//       "click",
//       () => {
//         document.getElementById("audio").play();
//       },
//       false
//     );
//   }

//   // document.getElementById("audio--bg").play();

  let giftHTML = "";
  const giftList = await fetch(
    "https://api.airtable.com/v0/appkYZZJoBgeZ8qqD/Gift%20Ideas?maxRecords=100&view=Grid%20view&fields%5B%5D=Name&fields%5B%5D=Link&fields%5B%5D=Guest&sort%5B0%5D%5Bfield%5D=Name",
    {
      headers: {
        Authorization: `Bearer ${API_KEY}`,
      },
    }
  );
  let hasGift = localStorage.getItem("GIFT_NAME");
  const giftData = await giftList.json();
  giftData.records.map((gift) => {
    const hasUser = gift?.fields?.Guest?.length;

    giftHTML += `<li class="${hasUser ? "hasUser" : ""}"><span>${
      gift.fields.Name
    } </span> ${
      hasUser || hasGift
        ? ""
        : `<a class='gift-btn' data-name='${gift.fields.Name}' data-id='${gift.id}'>GIFT</a>`
    }</li>`;
  });
  giftHTML += `<li>Other baby essentials</li>`;
  document.getElementById("gift-list").innerHTML = giftHTML;

  const activeUser = data.records.filter((record) => record.id === activeID);
  // let userHasGift = activeUser[0]?.fields?.Gift?.length;
  // console.log(userHasGift);

  document.getElementById("select--name").innerHTML = html;
  // return;

  document.getElementById("select--name").onchange = function (e) {
    // console.log(e.currentTarget.dataset.id);
    let item = data.records.filter((record) => record.id === e.target.value);
    console.log(item);
    if (item.length) {
      activeID = e.target.value;
      localStorage.setItem("NAME", item[0].fields.Name);
      localStorage.setItem("ID", e.target.value);
      if (item[0]?.fields?.Gift?.length) {
        localStorage.setItem("GIFT_NAME", item[0]?.fields?.GiftName[0]);
        localStorage.setItem("GIFT_ID", item[0]?.fields?.Gift[0]);
      } else {
        localStorage.removeItem("GIFT_NAME");
      }
      let userHasGift = localStorage.getItem("GIFT_NAME");
      let htmlGift = "";
      giftData.records.map((gift) => {
        const hasUser = gift?.fields?.Guest?.length;

        htmlGift += `<li class="${hasUser ? "hasUser" : ""}"><span>${
          gift.fields.Name
        } </span> ${
          hasUser || userHasGift
            ? ""
            : `<a class='gift-btn' data-name='${gift.fields.Name}' data-id='${gift.id}'>GIFT</a>`
        }</li>`;
      });
      htmlGift += `<li>Other baby essentials</li>`;
      document.getElementById("gift-list").innerHTML = htmlGift;
    }
  };

  if (!localStorage.getItem("ID")) {
    TweenMax.to("#initial-screen", 0.5, {
      autoAlpha: 1,
    });
  } else {
    // $(".avatar").append();

    drawAvatar();
    new AnimateText();
  }
};
getData();

initializeAnimation();

const audio = new Audio("assets/bg.mp3");
audio.autoplay = true;
audio.loop = true;
audio.volume = 0.4;

let isPlaying = false;
document.getElementById("play-sound").addEventListener("click", function () {
  if (isPlaying) {
    audio.pause();
    this.classList.remove("active");
    isPlaying = false;
  } else {
    audio.play();
    isPlaying = true;
    this.classList.add("active");
  }
});
