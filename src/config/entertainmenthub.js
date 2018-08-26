import EHPageTitle from "../images/eh-titlebg.jpg";
import EHPage1Small1 from "../images/eh-page1-small1.jpg";
import EHPage1Large from "../images/eh-page1-large.jpg";
import EHPage1Small2 from "../images/eh-page1-small2.jpg";
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
  }
];
