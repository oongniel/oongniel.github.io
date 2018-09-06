import DIFCTitleBG from "../images/difc-titlebg.jpg";
import DIFCPage1 from "../images/difc-page1.jpg";
import DIFCVideo from "../videos/difc.mp4";
import DubaiCount2BG from "../images/dubai-count2bg.jpg";
import DubaiCount3BG from "../images/dubai-count3bg.jpg";
// import IconArrow from "../images/arrow-up.svg";
import IconWorkforce from "../images/icons/businessman.png";
import IconSettings from "../images/icons/settings.png";
import IconPopulation from "../images/icons/population.png";
import IconBuilding from "../images/icons/building.png";
import IconAirport from "../images/icons/airport.png";
// import IconPrimeLocation from "../images/icons/paper_pencil.png";
import IconBed from "../images/icons/bed.png";
import IconBurj from "../images/icons/burj.png";
export default [
  {
    template: "page-title",
    route: "difc",
    hasHeader: true,
    title: "Welcome||TO DIFC",
    // image: DIFCTitleBG,
    video: DIFCVideo
  },
  {
    // Title on Left, Image on right
    template: "page-details-a",
    className: "",
    hasHeader: true,
    title: "DIFC, LIKE||No Other",
    image: DIFCPage1,
    showLogo: false,
    paragraph: [
      "DIFC is one of Dubai’s anchor institutions and a key contributor to the city’s economy.",
      "The world’s leading financial companies have chosen it as their regional home and it has also become renowned for its trendsetting cultural and food scene"
    ],
    listBottom: [
      "ABN Amro Bank",
      "AIG Insurance",
      "Bank of China",
      "Barclays Bank",
      "Citibank",
      "Credit Suisse",
      "Deutsche Bank",
      "Goldman Sachs",
      "HSBC",
      "Merrill Lynch",
      "Morgan Stanley",
      "Nasdaq",
      "Standard Chartered",
      "State Bank of India"
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
        icon: IconBed
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
        icon: IconBurj
      }
    ]
  }
];
