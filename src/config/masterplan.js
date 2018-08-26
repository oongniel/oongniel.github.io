import MasterPlanPageTitle from "../images/masterplan-titlebg.jpg";
import MasterPlanPage2 from "../images/masterplan-page2.jpg";
export default [
  {
    template: "page-title",
    route: "masterplan",
    hasHeader: true,
    title: "A FIT and||Active||Workforce",
    image: MasterPlanPageTitle,
    paragraph: [
      "The DIFC community loves to work hard and play hard. Keeping fit is also high on their agenda. DIFC offers a range of training facilities including Barry’s Bootcamp, D5 Executive Training and a platinum level Fitness First."
    ]
  },
  {
    // Title and paragraph on left, BG Image
    template: "page-details-d",
    hasHeader: true,
    title: "DIFC||Masterplan",
    image: MasterPlanPage2
  }
];
