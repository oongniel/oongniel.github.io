import HomeBG from "../images/home-bg.jpg";
import DubaiTitleBG from "../images/dubai-titlebg.jpg";
import DubaiCount1BG from "../images/dubai-count1bg.jpg";
import DubaiCount2BG from "../images/dubai-count2bg.jpg";
import DubaiCount3BG from "../images/dubai-count3bg.jpg";
import IconArrow from "../images/arrow-up.svg";
export default [
  {
    template: "page-details-a",
    className: "title",
    hasHeader: false,
    title: "A New||Avenue||To DIFC",
    image: HomeBG,
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
        icon: IconArrow
      },
      {
        prefix: "",
        suffix: "trillion in private wealth by 2019",
        count: 9.2,
        icon: IconArrow
      },
      {
        prefix: "",
        suffix: "million tourist arrivals in 2017",
        count: 15.7,
        icon: IconArrow
      },
      {
        prefix: "",
        suffix: "million visitors targeted by EXPO 2020",
        count: 20,
        icon: IconArrow
      },
      {
        prefix: "Half the world's population within an",
        suffix: "hour flight",
        count: 8,
        icon: IconArrow
      },
      {
        prefix: "",
        suffix: "nationalities",
        count: 200,
        icon: IconArrow
      }
    ]
  },
  {
    // WIth Count Data
    template: "page-details-b",
    hasHeader: true,
    title: "A Premium||Community||With Constant||Footfall",
    image: DubaiCount2BG,
    className: "dubai-1",
    countData: [
      {
        prefix: "Home to",
        suffix: "million residents. Set to double by 2030",
        count: 2.9,
        icon: IconArrow
      },
      {
        prefix: "",
        suffix: "trillion in private wealth by 2019",
        count: 9.2,
        icon: IconArrow
      },
      {
        prefix: "",
        suffix: "million tourist arrivals in 2017",
        count: 15.7,
        icon: IconArrow
      },
      {
        prefix: "",
        suffix: "million visitors targeted by EXPO 2020",
        count: 20,
        icon: IconArrow
      }
    ]
  },
  {
    // WIth Count Data
    template: "page-details-b",
    hasHeader: true,
    title: "Where the||LEaders do||Business",
    image: DubaiCount3BG,
    className: "dubai-1",
    countData: [
      {
        prefix: "Home to",
        suffix: "million residents. Set to double by 2030",
        count: 2.9,
        icon: IconArrow
      },
      {
        prefix: "",
        suffix: "trillion in private wealth by 2019",
        count: 9.2,
        icon: IconArrow
      },
      {
        prefix: "",
        suffix: "million tourist arrivals in 2017",
        count: 15.7,
        icon: IconArrow
      },
      {
        prefix: "",
        suffix: "million visitors targeted by EXPO 2020",
        count: 20,
        icon: IconArrow
      }
    ]
  }
];
