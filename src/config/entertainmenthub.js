import EHPageTitle from "../images/eh-titlebg.jpg";
import EHPage1Small1 from "../images/eh-page1-small1.jpg";
import EHPage1Large from "../images/eh-page1-large.jpg";
import EHPage1Small2 from "../images/eh-page1-small2.jpg";
import EHPage2Large from "../images/eh-page2-large.jpg";
import EHPage2Small1 from "../images/eh-page2-small1.jpg";
import EHPage2Small2 from "../images/eh-page2-small2.jpg";
import EHPage2Small3 from "../images/eh-page2-small3.jpg";
import EHPage2Small4 from "../images/eh-page2-small4.jpg";
export default [
  {
    template: "page-title",
    route: "entertainmenthub",
    hasHeader: true,
    title: "Entertainment||Hub",
    image: EHPageTitle
  },
  {
    // Title on Left, Image on right
    template: "page-details-c",
    view: "vertical",
    hasHeader: true,
    title: "A Vibrant||Sensory Hub",
    Image1: EHPage1Small1,
    Image2: EHPage1Small2,
    Image3: EHPage1Large,
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
    // Title on Left, Image on right
    template: "page-details-c",
    view: "default",
    hasHeader: true,
    title: "Events to||Inspire",
    Content1:
      "Gate Avenue will be brought to life through an extensive activation programme that supports all retailers.",
    Content2:
      "A calendar of bespoke events, spread across Gate Avenue’s indoor and outdoor areas will run throughout the year.",
    Content3: EHPage2Large,
    Content4: EHPage2Small2,
    light: false,
    Content5: EHPage2Small3,
    Content6: EHPage2Small4,
    Content7: EHPage2Small1,
    Content8: "Art, fashion, food, theatre, design and music activations will keep the area buzzing throughout the seasons and ensure visitors are frequently coming back."
  },
];
