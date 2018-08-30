import HomeBG from "../images/home-bg.jpg";
import DubaiTitleBG from "../images/dubai-titlebg.jpg";
import DubaiCount1BG from "../images/dubai-count1bg.jpg";
import DubaiCount2BG from "../images/dubai-count2bg.jpg";
import DubaiCount3BG from "../images/dubai-count3bg.jpg";
import IconArrow from "../images/arrow-up.svg";
import IconArrowUp from "../images/icons/arrow_up.png";
import IconTarget from "../images/icons/target.png";
import IconTarget1 from "../images/icons/target1.png";
import IconPaperPlane from "../images/icons/paper_plane.png";
import IconWorld from "../images/icons/world.png";
import IconWorldWide from "../images/icons/worldwide.png";
import IconWorkforce from "../images/icons/businessman.png";
import IconSettings from "../images/icons/settings.png";
import IconPopulation from "../images/icons/population.png";
import IconBuilding from "../images/icons/building.png";
import IconAirport from "../images/icons/paper_pencil.png";
import IconPrimeLocation from "../images/icons/paper_pencil.png";
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
  },
  {
    // WIth Count Data
    template: "page-details-b",
    hasHeader: true,
    title: "A Premium||Community||With Constant||Footfall",
    image: DubaiCount2BG,
    countData: [
      {
        prefix: "DIFC’s workforce:",
        counts: [
          {
            suffix: "(2017)",
            count: "23,000",
          },
          {
            suffix: "(2024)",
            count: "50,000",
          },
        ],
        icon: IconWorkforce
      },
      {
        prefix: "DIFC’s workforce has the highest earners per capita",
        suffix: "times the national average",
        count: 6,
        icon: IconSettings
      },
      {
        prefix: "",
        counts: [
          {
            suffix: "people",
            count: "210,000",
          },
          {
            suffix: "residents",
            count: "7,200",
          },
        ],
        icon: IconPopulation
      },
      {
        prefix: "",
        suffix: "hotel rooms upon completion within DIFC",
        count: "1,300",
        icon: IconArrow
      }
    ]
  },
  {
    // WIth Count Data
    template: "page-details-b",
    hasHeader: true,
    title: "Where the||LEaders do||Business",
    className: "split-first",
    image: DubaiCount3BG,
    countData: [
      {
        prefix: "",
        counts: [
          {
            count: "2,003",
            suffix: "registered companies"
          },
          {
            count: 25,
            suffix: "of the world’s top 30 banks"
          },
          {
            count: 7,
            suffix: "of the world’s top 10 law firms"
          },
          {
            count: 12,
            suffix: "of the world’s top 25 asset and money managers"
          },
          {
            count: 6,
            suffix: "of the top 10 insurance companies"
          },
          {
            count: 4,
            suffix: "largest Chinese banks"
          }
        ],
        icon: IconBuilding
      },
      {
        prefix: "",
        suffix: "minute drive from Dubai International Airport Accessible via two metro stations",
        count: 15,
        icon: IconAirport
      },
      {
        prefix: "",
        suffix: "Prime central location with close proximity to major destinations, including the iconic Burj Khalifa",
        icon: IconPrimeLocation
      }
    ]
  }
];
