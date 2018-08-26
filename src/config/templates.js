import Page2BG from "../images/dubai-titlebg.jpg";
import Page3BG from "../images/page3-bg.jpg";
import HomeBG from "../images/home-bg.jpg";
import DIFCMasterPlan from "../images/difc-masterplan.jpg";
import DIFCGateVillage from "../images/difc-gatevillage.jpg";
import IconArrow from "../images/arrow-up.svg";

export default [
  {
    // Title on Left, Image on right
    template: "page-details-a",
    className: "home",
    hasHeader: false,
    title: "A New||Avenue||To DIFC",
    image: HomeBG,
    showLogo: true
  },
  {
    // WIth Count Data
    template: "page-details-b",
    hasHeader: true,
    title: "Dubai's||Unprecedented||Growth",
    image: Page3BG,
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
    // Title on Left, Image on right
    template: "page-details-c",
    view: "default",
    hasHeader: true,
    title: "An Eclectic||Retail Mix",
    Content1:
      "Retailers in The Design House will rotate regularly, to entice customers to experience new wonders.",
    Content2:
      "Mixing homegrown brands with established retailers creates a unique experience for customers and a fresh reason to regularly visit Gate Avenue.",
    Content3: Page2BG,
    Content4: Page2BG,
    light: false,
    Content5: Page3BG,
    Content6: Page3BG
  },
  {
    // Title on Left, Image on right
    template: "page-details-c",
    view: "vertical",
    hasHeader: true,
    title: "A Vibrant||Sensory Hub",
    Image1: Page2BG,
    Image2: Page2BG,
    Image3: Page3BG,
    paragraph:
      "Keeping Gate Avenue revitalised with energy and excitement, the Entertainment Hub will be a must-visit destination and truly act as the epicentre for the district when it opens in 2021.",
    list: [
      "Progressive architectural style",
      "A rotating calendar of events",
      "Energetic night life",
      "9-screen cinema with Premier, Gold Class and kids-only theatre",
      "Themed restaurants with outdoor terrace"
    ]
  },
  {
    // Title and paragraph on left, BG Image
    template: "page-details-d",
    hasHeader: true,
    title: "DIFC||Masterplan",
    image: DIFCMasterPlan
  },
  {
    // Title on Left, Image on right
    template: "page-details-a",
    className: "",
    hasHeader: true,
    title: "Gate||Village||At DIFC",
    image: DIFCGateVillage,
    showLogo: false,
    paragraph:
      "Keeping Gate Avenue revitalised with energy and excitement, the Entertainment Hub will be a must-visit destination and truly act as the epicentre for the district when it opens in 2021."
  },
  {
    // Title and paragraph on left, BG Image
    template: "page-title",
    hasHeader: true,
    title: "Dubai||A Unique,||Prosperous||City",
    image: Page2BG,
    paragraph: [
      "Dubai is a vibrant international city with an unprecedented rate of economic growth.",
      "This is your opportunity to benefit from a growing population, diverse culture and flourishing retail scene."
    ]
  }
];
