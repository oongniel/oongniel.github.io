
import MasterPlanPage1 from "../images/masterplan-page1.jpg";
import MasterPlanPage2 from "../images/masterplan-page2.jpg";
export default [
  {
    // Title and paragraph on left, BG Image
    template: "page-details-d",
    route: "masterplan",
    hasHeader: true,
    className: "full-image masterplan-1",
    title: "DIFC Masterplan",
    image: MasterPlanPage1
  },
  {
    // Title and paragraph on left, BG Image
    template: "page-details-d",
    hasHeader: true,
    className: "full-image full",
    // imageClass: "height-100",
    title: "DIFC||Masterplan",
    image: MasterPlanPage2
  }
];
