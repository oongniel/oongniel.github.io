
import TVPage3 from "../images/tv-page3.jpg";
import TVPage4 from "../images/tv-page4.jpg";
// import IconArrow from "../images/arrow-up.svg";
import IconTag from "../images/icons/tag.png";
import IconCoins from "../images/icons/coins.png";
import IconScheme from "../images/icons/scheme.png";
import IconBadge from "../images/icons/badge.png";
import IconZero from "../images/icons/zero.png";
import IconPaperPencil from "../images/icons/paper_pencil.png";
import ThankYouBG from "../images/thankyou-bg.jpg";

export default [
  {
    // WIth Count Data
    template: "page-details-b",
    hasHeader: true,
    route: "settingup",
    title: "Setting up||Your store||With Ease",
    image: TVPage3,
    className: "",
    countData: [
      {
        prefix: "100% Foreign ownership",
        icon: IconTag
      },
      {
        prefix: "No restrictions on Capital repatriation",
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
        icon: IconZero
      },
      {
        prefix: "Independent English Common Law framework",
        icon: IconPaperPencil
      }
    ]
  },
  {
    template: "page-details-a",
    className: "title get-in-touch",
    hasHeader: true,
    title: "Get||In Touch",
    image: TVPage4,
    showLogo: true,
    boldHeaders: [
      "For more details please visit gateavenue.difc.ae",
      "Or you may contact the Gate Avenue Retail Leasing Team:"
    ],
    contacts: [
      {
        name: "Warren Krawchuk",
        position: "Senior Vice President –",
        position2: "Retail Leasing",
        number: "T: +971 4 362 2450",
        email: "Warren.Krawchuk@difc.ae"
      },
      {
        name: "Olesya Buravskaya",
        position: "Assistant Vice President –",
        position2: "Retail Leasing",
        number: "T: +971 4 362 2450",
        email: "Olesya.Buravskaya@difc.ae"
      },
    ]
  },
  {
    template: "page-details-e",
    title: "Thank you!",
    image: ThankYouBG
  },
];
