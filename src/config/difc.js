import DIFCTitleBG from "../images/difc-titlebg.jpg";
import DIFCPage1 from "../images/difc-page1.jpg";

export default [
  {
    template: "page-title",
    route: "difc",
    hasHeader: true,
    title: "Welcome||TO DIFC",
    image: DIFCTitleBG
  },
  {
    // Title on Left, Image on right
    template: "page-details-a",
    className: "",
    hasHeader: true,
    title: "DIFC, LIKE||No Other",
    image: DIFCPage1,
    showLogo: false,
    paragraph: [
      "DIFC is one of Dubai’s anchor institutions and a key contributor to the city’s economy.",
      "The world’s leading financial companies have chosen it as their regional home and it has also become renowned for its trendsetting cultural and food scene"
    ],
    listBottom: [
      "ABN Amro Bank",
      "AIG Insurance",
      "Bank of China",
      "Barclays Bank",
      "Citibank",
      "Credit Suisse",
      "Deutsche Bank",
      "Goldman Sachs",
      "HSBC",
      "Merrill Lynch",
      "Morgan Stanley",
      "Nasdaq",
      "Standard Chartered",
      "State Bank of India"
    ]
  }
];
