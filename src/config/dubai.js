import HomeBG from "../images/home-bg.jpg";
import HomeVideo from "../videos/gate_avenue.mp4";
import DubaiTitleBG from "../images/dubai-titlebg.jpg";
import DubaiCount1BG from "../images/dubai-count1bg.jpg";
import IconArrowUp from "../images/icons/arrow_up.png";
import IconTarget from "../images/icons/target.png";
import IconTarget1 from "../images/icons/target1.png";
import IconPaperPlane from "../images/icons/paper_plane.png";
import IconWorld from "../images/icons/world.png";
import IconWorldWide from "../images/icons/worldwide.png";

export default [
  {
    template: "page-details-a",
    className: "title",
    hasHeader: true,
    title: "A New||Avenue||To DIFC",
    // image: HomeBG,
    video: HomeVideo,
    showLogo: true
  },
  {
    template: "page-title",
    route: "dubai",
    hasHeader: true,
    title: "Dubai||A Unique,||Prosperous||City",
    image: DubaiTitleBG,
    paragraph: [
      "Dubai is a vibrant international city with an unprecedented rate of economic growth.",
      "This is your opportunity to benefit from a growing population, diverse culture and flourishing retail scene."
    ]
  },
  {
    // WIth Count Data
    template: "page-details-b",
    hasHeader: true,
    title: "Dubai's||Unprecedented||Growth",
    image: DubaiCount1BG,
    className: "dubai-1",
    countData: [
      {
        prefix: "Home to",
        suffix: "million residents. Set to double by 2030",
        count: 2.9,
        icon: IconArrowUp
      },
      {
        prefix: "",
        suffix: "trillion in private wealth by 2019",
        count: 9.2,
        icon: IconTarget
      },
      {
        prefix: "",
        suffix: "million tourist arrivals in 2017",
        count: 15.7,
        icon: IconTarget1
      },
      {
        prefix: "",
        suffix: "million visitors targeted by EXPO 2020",
        count: 20,
        icon: IconPaperPlane
      },
      {
        prefix: "Half the world's population within an",
        suffix: "hour flight",
        count: 8,
        icon: IconWorld
      },
      {
        prefix: "",
        suffix: "nationalities",
        count: 200,
        icon: IconWorldWide
      }
    ]
  }
];
