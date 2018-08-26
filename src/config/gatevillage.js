import GVPageTitle from "../images/gv-titlebg.jpg";
import GVPage1 from "../images/gv-page1.jpg";
import GVPage2 from "../images/gv-page2.jpg";
import GVPage3 from "../images/gv-page3.jpg";
import GVPage5 from "../images/gv-page5.jpg";
import GVGallery1 from "../images/gv-gallery1.jpg";
import GVGallery2 from "../images/gv-gallery2.jpg";
import GVGallery3 from "../images/gv-gallery3.jpg";
import GVGallery4 from "../images/gv-gallery4.jpg";
import GVGallery5 from "../images/gv-gallery5.jpg";
import GVGallery6 from "../images/gv-gallery6.jpg";
import GVGallery7 from "../images/gv-gallery7.jpg";
import GVGallery8 from "../images/gv-gallery8.jpg";

export default [
  {
    // Title on Left, Image on right
    template: "page-details-a",
    route: "gatevillage",
    className: "title",
    hasHeader: true,
    title: "GATE||VILLAGE||AT DIFC",
    image: GVPageTitle,
    showLogo: false,
    paragraph: [
      "Dubai’s community chooses to eat and play at the Gate Village, located at DIFC. Within intricate laneways and charming outdoor spaces, you will find a carefully curated blend of art, retail and high-end cuisine."
    ]
  },
  {
    // Title on Left, Image on right
    template: "page-details-a",
    className: "",
    hasHeader: true,
    title: "Global||Dining||Institutions",
    image: GVPage1,
    showLogo: false,
    paragraph: [
      "DIFC hosts Dubai’s trendiest restaurants, including some of the world’s top listed venues."
    ],
    listBottom: [
      "Avli by Tashas",
      "Indie",
      "BBs Social Dinning",
      "Intersect by Lexus",
      "Boca",
      "Le Petit Maison",
      "Caramel",
      "Marea, Baoli",
      "China Tang",
      "Michael Mina Bistro",
      "Cipriani’s",
      "Robertos",
      "Coming soon:",
      "Royal China",
      "Gaia, Yeeels",
      "Zuma"
    ]
  },
  {
    // Title on Left, Image on right
    template: "page-details-a",
    className: "",
    hasHeader: true,
    title: "Progressive||Art Scene",
    image: GVPage2,
    showLogo: false,
    paragraph: [
      "Explore the region’s most influential art galleries, showcasing young cutting-edge Middle Eastern and international artists."
    ],
    listBottom: [
      "Al Farjam",
      "Opera Gallery",
      "Christies",
      "Sotheby’s",
      "Cuadro",
      "Tabari Art Space",
      "Empty Quarter",
      "V – Art"
    ]
  },
  {
    // Title on Left, Image on right
    template: "page-details-a",
    className: "",
    hasHeader: true,
    title: "Dubai's||Leading||Social Events",
    image: GVPage3,
    showLogo: false,
    paragraph: [
      "DIFC Art Nights are a staple on the Dubai social calendar, where guests are immersed in a unique fusion of art, culture and entertainment.",
      "This twice-yearly event runs in synergy with Dubai’s Art Season and the infamous Art Dubai fair, now in its 12th season."
    ]
  },
  {
    // Title and paragraph on left, BG Image
    template: "page-details-d",
    hasHeader: true,
    title: "ART||Amongst||Architecture",
    paragraph:
      "The DIFC Art Integration Programme features permanent and rotating art installations by local and global artists, scattered amongst the DIFC district.",
    image: [
      {
        title: "The Warriors",
        artist: "by Antonio Signorini",
        image: GVGallery1
      },
      {
        title: "Clio Dorada",
        artist: "by Manolo Valdes",
        image: GVGallery2
      },
      {
        title: "La Mariposa",
        artist: "by Manolo Valdes",
        image: GVGallery3
      },
      {
        title: "Wild Relatives",
        artist: "by Tony Cragg",
        image: GVGallery4
      },
      {
        title: "Manolo Valdes art piece",
        artist: "in Opera Gallery",
        image: GVGallery5
      },
      {
        title: "La Mariposa",
        artist: "by Manolo Valdes",
        image: GVGallery6
      },
      {
        title: "Car on display",
        artist: "in Intersect by Lexus",
        image: GVGallery7
      },
      {
        title: "Fallen",
        artist: "by Oliviero Rainaldi",
        image: GVGallery8
      }
    ]
  },
  {
    // Title on Left, Image on right
    template: "page-details-a",
    className: "",
    hasHeader: true,
    title: "A Flow||Of Tourist",
    image: GVPage5,
    showLogo: false,
    paragraph: [
      "Immerse yourself in luxury at one of DIFC’s five-star hotels. The Ritz Carlton, Four Seasons and soon to open Waldorf Astoria have chosen to set up within the district.",
      "These premium hotels boast some of the city’s finest restaurants and event spaces, and provide a constant flow of business and leisure travellers."
    ]
  }
];
