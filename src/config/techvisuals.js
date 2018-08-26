import TVPage1 from "../images/tv-page1.jpg";
import TVPage2 from "../images/tv-page2.jpg";
import TVPage3 from "../images/tv-page3.jpg";
import TVPage4 from "../images/tv-page4.jpg";
import IconArrow from "../images/arrow-up.svg";
export default [
  {
    template: "page-title",
    route: "techvisual",
    hasHeader: true,
    title: "Gate Avenue||TEchnical Visuals"
  },
  {
    // Title and paragraph on left, BG Image
    template: "page-details-d",
    hasHeader: true,
    title: "Final Concept",
    image: TVPage1
  },
  {
    // Title and paragraph on left, BG Image
    template: "page-details-d",
    hasHeader: true,
    title: "Vehicle &||Pedestrian Access",
    image: TVPage2
  },
  {
    // WIth Count Data
    template: "page-details-b",
    hasHeader: true,
    title: "Setting up||Your store||With Ease",
    image: TVPage3,
    className: "",
    countData: [
      {
        prefix: "Enjoy 100% No restrictions foreign ownership",
        icon: IconArrow
      },
      {
        prefix: "No restrictions foreign ownership on Capital repatriation",
        icon: IconArrow
      },
      {
        prefix: "No restrictions on foreign talent",
        icon: IconArrow
      },
      {
        prefix:
          "An independent regulator - Dubai Financial Services Authority (DFSA)",
        icon: IconArrow
      },
      {
        prefix: "No tax on profits and personal income",
        icon: IconArrow
      },
      {
        prefix: "Independent judicial system with laws issued in English",
        icon: IconArrow
      }
    ]
  },
  {
    template: "page-details-a",
    className: "title",
    hasHeader: false,
    title: "Thank||You",
    image: TVPage4,
    showLogo: true
  }
];
