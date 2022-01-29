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

/* --------- CORE END -------- */
/* --------------------------- */

/* --------------------------- */
/* ------ CREATING ZONE ------ */
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

class AnimatedText extends Object3D {
  constructor(
    text,
    font,
    toReverse,
    reverseTimeout = 2000,
    useWords,
    { size = 0.3, letterSpacing = 0.03, color = "#000000" } = {}
  ) {
    super();
    this.toReverse = toReverse;
    this.basePosition = 0;
    this.size = size;
    this.reverseTimeout = reverseTimeout;

    const letters = useWords ? text.split("") : Array.from(text);
    letters.forEach((letter) => {
      if (letter === " ") {
        this.basePosition += size * 0.5;
      } else {
        const shape = font.generateShapes(letter, size, 1);
        const geom = new ShapeGeometry(shape);
        geom.mergeVertices();
        geom.computeBoundingBox();
        const mat = new MeshBasicMaterial({
          color,
          opacity: 0,
          transparent: true,
        });
        const mesh = new Mesh(geom, mat);
        mesh.position.x = this.basePosition;
        this.basePosition += geom.boundingBox.max.x + letterSpacing;
        this.add(mesh);
      }
    });
  }
  show(duration = 0.6) {
    const tm = new TimelineLite();
    tm.set({}, {}, `+=${duration * 1.1}`);
    this.children.forEach((letter) => {
      const data = {
        opacity: 0,
        position: -0.5,
      };
      tm.to(
        data,
        duration,
        {
          opacity: 1,
          position: 0,
          ease: Back.easeOut.config(2),
          onUpdate: () => {
            letter.material.opacity = data.opacity;
            letter.position.y = data.position;
            letter.position.z = data.position * 2;
            letter.rotation.x = data.position * 2;
          },
        },
        `-=${duration - 0.03}`
      );
    });
    if (this.toReverse) {
      setTimeout(() => {
        tm.reverse();
      }, this.reverseTimeout);
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

/* ----- CORE FOOTER END ----- */
/* --------------------------- */

class AnimateText {
  constructor() {
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
    this.bindEvents();
  }

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
    // setTimeout(() => {
    //   tl.reverse(1);
    //   //   this.animateSecondScreen();
    // }, 2000);
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

    this.secondAnimation.staggerFromTo(
      "#amazing",
      0.5,
      { y: 20, opacity: 0, ease: Back.easeOut.config(2) },
      { y: 0, opacity: 1, ease: Back.easeOut.config(2), delay: 1.2 }
    );
    this.secondAnimation.staggerFrom(
      target2,
      0.5,
      { y: 20, autoAlpha: 0, ease: Back.easeOut.config(2), delay: 0.5 },
      0.05,
      function () {
        split2.revert();
      }
    );

    // setTimeout(() => {
    // this.secondAnimation.reverse(1);
    //   setTimeout(() => {
    //     this.animateThirdScreen();
    //   }, 1000);
    // }, 3000);
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
      "#text-wrapper--third a",
      0.5,
      { y: 20, opacity: 0, ease: Back.easeOut.config(2) },
      { y: 0, opacity: 1, ease: Back.easeOut.config(2) },
      0.3
    );
    // this.thirdAnimation.staggerFromTo(
    //   "#dresscode",
    //   0.5,
    //   { y: 20, opacity: 0, ease: Back.easeOut.config(2) },
    //   { y: 0, opacity: 1, ease: Back.easeOut.config(2) }
    // );
    // this.thirdAnimation.staggerFromTo(
    //   "#wishlist",
    //   0.5,
    //   { y: 20, opacity: 0, ease: Back.easeOut.config(2) },
    //   { y: 0, opacity: 1, ease: Back.easeOut.config(2) }
    // );
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
  };
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

const drawAvatar = () => {
  document.getElementById("initial-screen").remove();

  TweenMax.to(".avatar", 0.5, {
    autoAlpha: 1,
  });
  document.getElementById("name").innerHTML = `<span>${localStorage.getItem(
    "NAME"
  )}</span>`;
};
document.getElementById("select--name").onchange = function (e) {
  console.log(e.target.value);
  localStorage.setItem("NAME", e.target.value);
};

document.addEventListener(
  "click",
  (event) => {
    if (event.target.matches("#proceed")) {
      TweenMax.to("#initial-screen", 1, {
        autoAlpha: 0,
      });
      setTimeout(() => {
        drawAvatar();
        new AnimateText();
      }, 1000);
    } else {
      return;
    }
  },
  false
);
const API_KEY = "key2sVp4i7mkwGmdv";
const getData = async () => {
  const response = await fetch(
    "https://api.airtable.com/v0/appkYZZJoBgeZ8qqD/Guest%20List?sort%5B0%5D%5Bfield%5D=Fullname",
    {
      headers: {
        Authorization: `Bearer ${API_KEY}`,
      },
    }
  );
  const data = await response.json();
  console.log(data);
  let html = "<option  selected disabled>Select your name</option>";
  data.records.map((item) => {
    console.log(item);
    html += `<option value="${item.fields.Name}">${item.fields.Fullname}</option>`;
  });
  document.getElementById("select--name").innerHTML = html;
  // return;
  initializeAnimation();

  if (!localStorage.getItem("NAME")) {
    TweenMax.to("#initial-screen", 0.5, {
      autoAlpha: 1,
    });
  } else {
    // $(".avatar").append();

    drawAvatar();
    new AnimateText();
  }
  var anchors = document.getElementsByTagName("a");
  for (var i = 0; i < anchors.length; i++) {
    var current = anchors[i];
    current.addEventListener(
      "click",
      () => {
        document.getElementById("audio").play();
      },
      false
    );
  }

  document.getElementById("audio--bg").play();

  let giftHTML = "";
  const giftList = await fetch(
    "https://api.airtable.com/v0/appkYZZJoBgeZ8qqD/Gift%20Ideas?maxRecords=100&view=Grid%20view&fields%5B%5D=Name&fields%5B%5D=Link&fields%5B%5D=Guest&sort%5B0%5D%5Bfield%5D=Name",
    {
      headers: {
        Authorization: `Bearer ${API_KEY}`,
      },
    }
  );
  const giftData = await giftList.json();
  // const getUser = (id) => {
  //   return data.records.filter((record) => record.id === id);
  // };
  giftData.records.map((gift) => {
    const hasUser = gift?.fields?.Guest?.length;

    giftHTML += `<li class="${hasUser ? "hasUser" : ""}"><span>${
      gift.fields.Name
    } </span> ${hasUser ? "" : "<a>GIFT</a>"}</li>`;
    // ${
    //   gift?.fields?.Guest
    //     ? `<a>@${getUser(gift?.fields?.Guest[0])[0].fields.Fullname}</a>`
    //     : ""
    // }
  });

  document.getElementById("gift-list").innerHTML = giftHTML;
};
getData();
