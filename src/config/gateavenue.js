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

export default [
  {
    template: "page-title",
    route: "gateavenue",
    hasHeader: true,
    title: "Introducing||Gate Avenue",
    subTitle: "An Experience by DIFC",
    image: GAPageTitle
  },
  {
    template: "page-details-a",
    className: "",
    hasHeader: true,
    title: "A New||Avenue||To Retail",
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
      "185 F&B, fashion and lifestyle stores",
      "22,500 sqft upscale urban food hall",
      "4,000 sqft Design House featuring local talent",
      "9-screen movie theatre",
      "15,000 sqft gym by one of Dubai’s leading fitness brand",
      "10,000 sqft DIFCF in Tech Hive"
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
      "The Gate Trilogy stretch along the full length of the avenue. The three structures take inspiration from the Gate Building and are illuminated at night. They house retail boutiques and are the perfect spots to stop and soak up the atmosphere."
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
      "Featuring smart urban design, Gate Avenue is connected to the district’s existing business and residential towers, with direct access points into the mall."
    ]
  },

  {
    template: "page-details-c",
    view: "half",
    hasHeader: true,
    title: "A Modern Day||Market",
    Content1: [
      "South Market is Gate Avenue’s urban food hall. Its a buzzing combination of gourmet food stalls and rotating artisan food kiosks offering cuisines from across the globe.",
      "This modern-day marketplace has been designed with exposed ceilings, beautiful steel beams, raw timber and concrete features, neon signage and street art murals."
    ],
    Content2:
      "It’s the perfect setting for the local workforce and shoppers to take a break and be entertained by the ongoing line-up of events and activities.",
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
      "The Design House builds on the Centre’s reputation for supporting the SME’s community within Dubai."
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
      "FinTech Hive in Gate Avenue is the region’s first FinTech accelerator. It invites and nurtures global entrepreneurs, start-ups and SMEs to craft solutions for the regional financial services industry.",
      "FinTech Hive creates a mutually beneficial symbiotic relationship between the start-ups and the financial businesses within DIFC."
    ]
  }
];
