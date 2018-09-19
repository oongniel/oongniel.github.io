import GAPageTitle from "../images/ga-titlebg.jpg";
import GAPage1 from "../images/ga-page1.jpg";
import GAPage2 from "../images/ga-page2.jpg";
import GAPage3 from "../images/ga-page3.jpg";
import GAPage4 from "../images/ga-page4.jpg";
import GAPage5Small from "../images/ga-page5-small.jpg";
import GAPage5Large from "../images/ga-page5-large.jpg";
import GAPage6 from "../images/ga-page6.jpg";
import GAPage7Large from "../images/ga-page7-large.jpg";
import GAPage7Small1 from "../images/ga-page7-small1.jpg";
import GAPage7Small2 from "../images/ga-page7-small2.jpg";
import GAPage7Small3 from "../images/ga-page7-small3.jpg";
import GAPage8 from "../images/ga-page8.jpg";

import EHPage1Small1 from "../images/eh-page1-small1.jpg";
import EHPage1Large from "../images/eh-page1-large.jpg";
import EHPage1Small2 from "../images/eh-page1-small2.jpg";
import EHPage2Large from "../images/eh-page2-large.jpg";
import EHPage2Small1 from "../images/eh-page2-small1.jpg";
import EHPage2Small2 from "../images/eh-page2-small2.jpg";
import EHPage2Small3 from "../images/eh-page2-small3.jpg";
import EHPage2Small4 from "../images/eh-page2-small4.jpg";

import TVPage1 from "../images/tv-page1.jpg";
import TVPage2 from "../images/tv-page2.jpg";

export default [
  {
    template: "page-title",
    route: "gateavenue",
    hasHeader: true,
    title: "Introducing||Gate Avenue",
    subTitle: "An Experience by DIFC",
    video: 289270358
  },
  {
    template: "page-details-a",
    className: "",
    hasHeader: true,
    // title: "A New||Avenue||To Retail",
    titles: ["A New||Avenue||To Retail", "A New||Avenue||To Fashion", "A New||Avenue||To DIFC"],
    image: GAPage1,
    showLogo: false
  },
  {
    template: "page-details-a",
    className: "",
    hasHeader: true,
    title: "An Avenue||Full Of||Energy",
    image: GAPage2,
    showLogo: false,
    list: [
      "<b>185</b> F&B, fashion and lifestyle stores",
      "<b>22,500</b> sqft upscale urban food hall",
      "<b>4,000</b> sqft Design House featuring local talent",
      "<b>9</b>-screen movie theatre",
      "<b>15,000</b> sqft gym by one of Dubai’s leading fitness brand",
      "<b>10,000</b> sqft DIFC FinTech Hive"
    ],
    paragraph: [
      "All within a fully connected year-round walkable destination, with outdoor promenade and urban landscaping."
    ]
  },
  {
    template: "page-details-a",
    className: "",
    hasHeader: true,
    title: "Where||DESIGN||Meets Life",
    image: GAPage3,
    showLogo: false,
    paragraph: [
      "Gate Avenue will further the Centre’s reputation for iconic architecture, with its open air promenade, DIFC Grand Mosque and eye-catching Entertainment Hub.",
      "The Gate Trilogy stretches along the full length of the avenue. The three structures take inspiration from the Gate Building and are illuminated at night. They house retail boutiques and are the perfect spots to stop and soak up the atmosphere."
    ]
  },
  {
    template: "page-details-a",
    className: "",
    hasHeader: true,
    title: "A Captive||Audience||Ready to||spend",
    image: GAPage4,
    showLogo: false,
    paragraph: [
      "Gate Avenue tenants benefit from steady footfall year round, thanks to the immediate DIFC workforce, neighbouring residents and visiting tourists.",
      "Featuring smart urban design, Gate Avenue is connected to the district’s existing business and residential towers, with direct access points into the development."
    ]
  },

  {
    template: "page-details-c",
    view: "half",
    hasHeader: true,
    title: "A Modern Day||Market",
    Content1: [
      "South Market is Gate Avenue’s urban food hall. It is a buzzing combination of gourmet food stalls and rotating artisan food kiosks offering cuisines from across the globe.",
      "This modern-day marketplace has been designed with exposed ceilings, beautiful steel beams, raw timber and concrete features, neon signage and street art murals."
    ],
    Content2:
      "It is the perfect setting for the local workforce and shoppers to take a break and be entertained by the ongoing line-up of events and activities.",
    Content3: GAPage5Small,
    light: true,
    Content4: GAPage5Large
  },
  {
    template: "page-title",
    hasHeader: true,
    title: "Supporting the||Entrepreneurs",
    paragraph: [
      "The Design House, within Gate Avenue, will attract Dubai’s up-and-coming SMEs and entrepreneurs.",
      "It is a custom-designed modular space to showcase these homegrown startup brands.",
      "The Design House builds on the Centre’s reputation for supporting the SMEs community within Dubai."
    ],
    image: GAPage6
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
    Content3: GAPage7Large,
    Content4: GAPage7Small1,
    light: false,
    Content5: GAPage7Small2,
    Content6: GAPage7Small3
  },
  {
    template: "page-details-a",
    className: "",
    hasHeader: true,
    title: "A Magnet||For Tech||Innovators",
    image: GAPage8,
    showLogo: false,
    paragraph: [
      "FinTech Hive is the region’s first FinTech accelerator. It invites and nurtures global entrepreneurs, start-ups and SMEs to craft solutions for the regional financial services industry.",
      "FinTech Hive creates a mutually beneficial symbiotic relationship between the start-ups and the financial businesses within DIFC."
    ]
  },
  // {
  //   template: "page-title",
  //   route: "entertainmenthub",
  //   hasHeader: true,
  //   title: "Entertainment||Hub",
  //   image: EHPageTitle
  // },
  // {
  //   // Title on Left, Image on right
  //   template: "page-details-c",
  //   view: "vertical",
  //   hasHeader: true,
  //   title: "A Vibrant||Sensory Hub",
  //   Image1: EHPage1Small1,
  //   Image2: EHPage1Small2,
  //   Image3: EHPage1Large,
  //   paragraph:
  //     "Keeping Gate Avenue revitalised with energy and excitement, the Entertainment Hub will be a must-visit destination and truly act as the epicentre for the district when it opens in 2021.",
  //   list: [
  //     "Progressive architectural style",
  //     "A rotating calendar of events",
  //     "Energetic night life",
  //     "9-screen cinema with Premier, Gold Class and kids-only theatre",
  //     "Themed restaurants with outdoor terrace"
  //   ]
  // },
  // {
  //   // Title on Left, Image on right
  //   template: "page-details-c",
  //   view: "default",
  //   hasHeader: true,
  //   title: "Events to||Inspire",
  //   Content1:
  //     "Gate Avenue will be brought to life through an extensive activation programme that supports all retailers.",
  //   Content2:
  //     "A calendar of bespoke events, spread across Gate Avenue’s indoor and outdoor areas will run throughout the year.",
  //   Content3: EHPage2Large,
  //   Content4: EHPage2Small2,
  //   light: false,
  //   Content5: EHPage2Small3,
  //   Content6: EHPage2Small4,
  //   Content7: EHPage2Small1,
  //   Content8: "Art, fashion, food, theatre, design and music activations will keep the area buzzing throughout the seasons and ensure visitors are frequently coming back."
  // },
  {
    // Title and paragraph on left, BG Image
    template: "page-details-d",
    hasHeader: true,
    className: "full-image",
    title: "Final Concept",
    imageClass: "height-100",
    image: TVPage1
  },
  {
    // Title and paragraph on left, BG Image
    template: "page-details-d",
    hasHeader: true,
    className: "full-image vehicle",
    imageClass: "height-100",
    title: "Vehicle &||Pedestrian Access",
    image: TVPage2
  },
];
