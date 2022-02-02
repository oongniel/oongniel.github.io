// WebGL
const {
  WebGLRenderer,
  Scene,
  PerspectiveCamera,
  Mesh,
  Color,
  Vector3,
  SplineCurve,
  Path,
  Object3D,
  MeshBasicMaterial,
  ShapeGeometry,
  FontLoader,
} = THREE;

const getRandomFloat = (min, max) => Math.random() * (max - min) + min;
const getRandomInt = (min, max) =>
  Math.floor(Math.random() * (max - min + 1)) + min;

/* --------------------------- */
/* ----------- CORE ---------- */
let windowWidth = window.innerWidth;
let windowHeight = window.innerHeight;
class Webgl {
  constructor(w, h) {
    this.meshCount = 0;
    this.meshListeners = [];
    this.renderer = new WebGLRenderer({ antialias: true, alpha: true });
    this.renderer.setPixelRatio(window.devicePixelRatio);
    this.scene = new Scene();
    this.camera = new PerspectiveCamera(50, w / h, 1, 1000);
    this.camera.position.set(0, 0, 10);
    this.dom = this.renderer.domElement;
    this.update = this.update.bind(this);
    this.resize = this.resize.bind(this);
    this.resize(w, h); // set render size
  }
  add(mesh) {
    this.scene.add(mesh);
    if (!mesh.update) return;
    this.meshListeners.push(mesh.update);
    this.meshCount++;
  }
  remove(mesh) {
    const idx = this.meshListeners.indexOf(mesh.update);
    if (idx < 0) return;
    this.scene.remove(mesh);
    this.meshListeners.splice(idx, 1);
    this.meshCount--;
  }
  update() {
    let i = this.meshCount;
    while (--i >= 0) {
      this.meshListeners[i].apply(this, null);
    }
    this.renderer.render(this.scene, this.camera);
  }
  resize(w, h) {
    this.camera.aspect = w / h;
    this.camera.updateProjectionMatrix();
    this.renderer.setSize(w, h);
  }
}
const COLORS = ["#d3b795", "#bb8b50", "#787e72", "#a56934"];

class WindLine extends Mesh {
  constructor({
    nbrOfPoints = getRandomFloat(3, 5),
    length = getRandomFloat(5, 8),
    disruptedOrientation = getRandomFloat(-0.2, 0.2),
    speed = 0.003,
    color = new Color("#000000"),
  } = {}) {
    // Create the points of the line
    const points = [];
    const segmentLength = length / nbrOfPoints;
    points.push(new Vector3(0, 0, 0));
    for (let i = 0; i < nbrOfPoints; i++) {
      const pos = segmentLength * i;
      points.push(
        new Vector3(pos - getRandomFloat(-2.1, 2.1), pos + segmentLength * i, 0)
      );
    }

    // Intance the geometry
    const curve = new SplineCurve(points);
    const path = new Path(curve.getPoints(50));
    const geometry = path.createPointsGeometry(50);

    const line = new MeshLine();
    line.setGeometry(geometry);

    // Material
    const dashArray = 2;
    const dashRatio = 0.99;
    const dashOffsetRight = 1.01;
    const dashOffsetLeft = dashArray * dashRatio;
    super(
      line.geometry,
      new MeshLineMaterial({
        lineWidth: 0.05,
        dashArray,
        dashRatio,
        dashOffset: dashOffsetLeft,
        opacity: 0,
        transparent: true,
        depthWrite: false,
        color,
      })
    );

    this.position.set(
      getRandomFloat(-10, 10),
      getRandomFloat(-6, 5),
      getRandomFloat(-2, 10)
    );

    this.speed = speed;
    this.dying = dashOffsetRight;
    this.update = this.update.bind(this);
  }

  update() {
    this.material.uniforms.dashOffset.value -= this.speed;

    const opacityTargeted =
      this.material.uniforms.dashOffset.value > this.dying + 0.25 ? 1 : 0;
    this.material.uniforms.opacity.value +=
      (opacityTargeted - this.material.uniforms.opacity.value) * 0.08;
  }

  isDied() {
    return this.material.uniforms.dashOffset.value < this.dying;
  }
}
class Wind extends Object3D {
  constructor() {
    super();

    this.lines = [];
    this.lineNbr = -1;

    this.update = this.update.bind(this);
  }

  addWindLine() {
    const line = new WindLine({
      color: new Color(COLORS[getRandomInt(0, COLORS.length - 1)]),
    });
    this.lines.push(line);
    this.add(line);
    this.lineNbr++;
  }

  removeWindLine() {
    this.remove(this.lines[0]);
    this.lines[0] = null;
    this.lines.shift();
    this.lineNbr--;
  }

  update() {
    if (Math.random() < 0.65) {
      this.addWindLine();
    }

    let i;
    for (i = this.lineNbr; i >= 0; i--) {
      this.lines[i].update();

      if (this.lines[i].isDied()) {
        this.removeWindLine();
      }
    }
  }
}
class CameraMouseControl {
  constructor(camera) {
    this.camera = camera;
    this.lookAt = new Vector3();
    this.position = { x: 0, y: 0 };
    this.handleMouseMove = this.handleMouseMove.bind(this);
    this.update = this.update.bind(this);
    document.body.addEventListener("mousemove", this.handleMouseMove);
  }
  handleMouseMove(event) {
    this.position.x = -(event.clientX / window.innerWidth - 0.5) * 8;
    this.position.y = (event.clientY / window.innerHeight - 0.5) * 4;
  }
  update() {
    this.camera.position.x += (this.position.x - this.camera.position.x) * 0.05;
    this.camera.position.y += (this.position.y - this.camera.position.y) * 0.05;
    this.camera.lookAt(this.lookAt);
  }
}

const initializeAnimation = () => {
  const webgl = new Webgl(windowWidth, windowHeight);
  document.body.appendChild(webgl.dom);

  const windLines = new Wind();
  webgl.add(windLines);

  const fontLoader = new FontLoader();
  const fontAsset = fontLoader.parse(fontFile);

  const cameraControl = new CameraMouseControl(webgl.camera);
  function _onResize() {
    windowWidth = window.innerWidth;
    windowHeight = window.innerHeight;
    webgl.resize(windowWidth, windowHeight);
  }
  window.addEventListener("resize", _onResize);
  window.addEventListener("orientationchange", _onResize);
  /* ---- LOOP ---- */
  function _loop() {
    webgl.update();
    cameraControl.update();
    requestAnimationFrame(_loop);
  }
  _loop();
};

initializeAnimation();

//  Events

const AK_AIRTABLE = "key2sVp4i7mkwGmdv";

class BuildSite {
  constructor(data) {
    this.data = data;
    this.base = new Airtable({ apiKey: AK_AIRTABLE }).base("appkYZZJoBgeZ8qqD");

    this.giftName = data?.GiftName?.length ? data.GiftName[0] : null;

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
    this.guestListAnimation = new TimelineMax();
    this.guestListAnimated = false;
    this.activeSection = "";
    this.initialise();
    this.updateGift();
    this.drawAvatar();

    this.getGiftList();
    this.getGuestList();

    this.bindEvents();
  }

  drawAvatar = () => {
    TweenMax.to(".avatar", 0.5, {
      autoAlpha: 1,
    });
    document.getElementById(
      "name"
    ).innerHTML = `<span>${this.data.Fullname}</span>`;
  };

  updateGift = () => {
    if (this.giftName) {
      document.getElementById(
        "gift-item"
      ).innerHTML = `You are bringing: ${this.giftName} <a id="remove-gift">Remove</a>`;
      localStorage.setItem("GIFT_NAME", this.giftName);
      this.bindRemoveGift();
    }
  };

  initialise = () => {
    document.getElementById("hello").innerHTML = `Hello, ${this.data.Name}!`;

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
      { y: 0, opacity: 1, ease: Back.easeOut.config(2), delay: 0.3 }
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

  animateGuestList = () => {
    this.activeSection = "guestlist";
    if (this.guestListAnimated) {
      this.guestListAnimation.restart(true, false);

      return;
    }
    this.guestListAnimated = true;
    this.guestListAnimation.set(
      document.getElementById("text-wrapper--guestlist"),
      { autoAlpha: 1 },
      0
    );

    this.guestListAnimation.staggerFromTo(
      "#text-wrapper--guestlist, #text-wrapper--guestlist h3, #text-wrapper--guestlist p",
      1,
      { x: 50, opacity: 0, ease: Back.easeOut.config(2) },
      { x: 0, opacity: 1, ease: Back.easeOut.config(2) },
      0.3
    );

    this.guestListAnimation.staggerFromTo(
      "#text-wrapper--guestlist li",
      0.5,
      { x: 20, opacity: 0, ease: Back.easeOut.config(1) },
      { x: 0, opacity: 1, ease: Back.easeOut.config(1) },
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

    document.getElementById("guestlist").addEventListener(
      "click",
      (event) => {
        this.thirdAnimation.reverse(1);

        setTimeout(() => {
          this.animateGuestList();
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
  };

  bindRemoveGift = () => {
    const node = document.getElementById("remove-gift");
    const remove = (event) => {
      let text = "Are you sure you want to remove your gift?";
      //   const gftName = event.currentTarget.dataset.name;
      if (confirm(text) == true) {
        this.base("Guest List").update(
          [
            {
              id: this.data.id,
              fields: {
                Gift: [],
              },
            },
          ],
          (err, records) => {
            if (err) {
              console.error(err);
              return;
            }
            alert(
              "No problem! If you change your mind, feel free to select a new one. See you!"
            );
            document.getElementById("gift-item").innerHTML = ``;
            const { id, fields } = records[0];
            this.data = {
              id,
              ...fields,
            };
            this.getGiftList();
          }
        );
      }
    };
    if (node) {
      node.removeEventListener("click", remove);
      node.addEventListener("click", remove);
    }
  };

  bindGiftBtn = (event) => {
    const gftName = event.currentTarget.dataset.name;
    const id = event.currentTarget.dataset.id;
    let text = `Are you sure you want to give ${gftName} to our baby?`;
    if (confirm(text) == true) {
      this.base("Gift Ideas").update(
        [
          {
            id,
            fields: {
              Guest: [this.data.id],
            },
          },
        ],
        (err, records) => {
          if (err) {
            console.error(err);
            return;
          }
          alert("Thank you! This is much appreciated! Thank you and see you!");

          this.getGiftList();
          this.giftName = gftName;
          this.updateGift();
        }
      );
    }
  };

  //   API SETUPS

  getGiftList = () => {
    const node = document.getElementById("gift-list");
    node.innerHTML = "";
    let giftHTML = "";
    this.base("Gift Ideas")
      .select({
        maxRecords: 50,
        view: "Grid view",
        sort: [{ field: "Name", direction: "asc" }],
      })
      .eachPage(
        (records, fetchNextPage) => {
          // This function (`page`) will get called for each page of records.

          records.forEach((record) => {
            // console.log("Retrieved", record);
            const hasUser = record?.fields?.Guest?.length;

            giftHTML += `<li class="${hasUser ? "hasUser" : ""}"><span>${
              record.fields.Name
            } </span> ${
              hasUser || this.data?.Gift?.length
                ? `<a>SELECTED</a>`
                : `<a class='gift-btn' data-name='${record.fields.Name}' data-id='${record.id}'>SELECT</a>`
            }</li>`;
          });
          giftHTML += `<li>Other baby essentials</li>`;
          node.innerHTML = giftHTML;

          // To fetch the next page of records, call `fetchNextPage`.
          // If there are more records, `page` will get called again.
          // If there are no more records, `done` will get called.
          fetchNextPage();

          document.querySelectorAll(".gift-btn").forEach((item) => {
            item.removeEventListener("click", this.bindGiftBtn);
            item.addEventListener("click", this.bindGiftBtn);
          });
        },
        (err) => {
          if (err) {
            console.error(err);
            return;
          }
        }
      );
  };

  getGuestList = () => {
    const node = document.getElementById("guest-list");
    node.innerHTML = "";
    let guestHTML = "";
    this.base("Guest List")
      .select({
        maxRecords: 50,
        view: "Grid view",
        sort: [{ field: "Fullname", direction: "asc" }],
      })
      .eachPage(
        (records, fetchNextPage) => {
          // This function (`page`) will get called for each page of records.

          records.forEach((record) => {
            // console.log("Retrieved", record);
            console.log(
              `${record.fields.Name} : https://oongniel.github.io?user=${record.id}`
            );
            if (!record.fields.HideFromList) {
              guestHTML += `<li ><span>${record.fields.Fullname} </span> </li>`;
            }
          });
          node.innerHTML = guestHTML;

          // To fetch the next page of records, call `fetchNextPage`.
          // If there are more records, `page` will get called again.
          // If there are no more records, `done` will get called.
          fetchNextPage();
        },
        (err) => {
          if (err) {
            console.error(err);
            return;
          }
        }
      );
  };
}

class Setup {
  constructor() {
    this.base = new Airtable({ apiKey: AK_AIRTABLE }).base("appkYZZJoBgeZ8qqD");
    this.initializeApp();
  }

  initializeApp = () => {
    const qs = location.search
      .slice(1)
      .split("&")
      .map((p) => p.split("="))
      .reduce((obj, [key, value]) => ({ ...obj, [key]: value }), {});
    if (qs.user) {
      this.getUserData(qs.user);
    } else {
      this.showInvalid();
    }
  };

  getUserData = (id) => {
    this.base("Guest List").find(id, (err, record) => {
      if (err) {
        this.showInvalid();
        return;
      }
      new BuildSite({
        ...record.fields,
        id: record.id,
      });
      console.log("Retrieved", record.fields);
    });
  };

  showInvalid = () => {
    const tl = new TimelineMax();
    tl.set(
      document.getElementById("text-wrapper--invalid"),
      { autoAlpha: 1 },
      0
    );
    let splitted = new SplitText("#invalid-user", {
        type: "words",
        wordsClass: "SplitClass",
      }),
      target2 = splitted.words;

    tl.staggerFrom(
      target2,
      0.5,
      { y: 20, autoAlpha: 0, ease: Back.easeOut.config(2), delay: 0.5 },
      0.05,
      () => {
        splitted.revert();
      }
    );
  };
}

new Setup();

class SetupAudio {
  constructor() {
    this.initialize();
  }

  initialize = () => {
    const audio = new Audio("assets/bg.mp3");
    audio.autoplay = true;
    audio.loop = true;
    audio.volume = 0.4;
    let isPlaying = false;
    document
      .getElementById("play-sound")
      .addEventListener("click", function () {
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
  };
}

new SetupAudio();
