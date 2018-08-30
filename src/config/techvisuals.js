import TVPage1 from "../images/tv-page1.jpg";
import TVPage2 from "../images/tv-page2.jpg";
import TVPage3 from "../images/tv-page3.jpg";
import TVPage4 from "../images/tv-page4.jpg";
import IconArrow from "../images/arrow-up.svg";
import IconTag from "../images/icons/tag.png";
import IconCoins from "../images/icons/coins.png";
import IconScheme from "../images/icons/scheme.png";
import IconBadge from "../images/icons/badge.png";
import IconPaperPencil from "../images/icons/paper_pencil.png";
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
    className: "full-image",
    title: "Final Concept",
    image: TVPage1
  },
  {
    // Title and paragraph on left, BG Image
    template: "page-details-d",
    hasHeader: true,
    className: "full-image",
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
        icon: IconTag
      },
      {
        prefix: "No restrictions foreign ownership on Capital repatriation",
        icon: IconCoins
      },
      {
        prefix: "No restrictions on foreign talent",
        icon: IconScheme
      },
      {
        prefix:
          "An independent regulator - Dubai Financial Services Authority (DFSA)",
        icon: IconBadge
      },
      {
        prefix: "No tax on profits and personal income",
        icon: IconArrow
      },
      {
        prefix: "Independent judicial system with laws issued in English",
        icon: IconPaperPencil
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
