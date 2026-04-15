import { createBrowserRouter } from "react-router";
import Layout from "./components/Layout";
import Home from "./pages/Home";
import AboutTheOrder from "./pages/AboutTheOrder";
import SupremeCouncil from "./pages/SupremeCouncil";
import RoseCroixMasonry from "./pages/RoseCroixMasonry";
import FAQ from "./pages/FAQ";
import WessexDistrict from "./pages/WessexDistrict";
import WessexCenters from "./pages/WessexCenters";
import WessexChapters from "./pages/WessexChapters";
import WessexHistory from "./pages/WessexHistory";
import SolentDistrict from "./pages/SolentDistrict";
import SolentCenters from "./pages/SolentCenters";
import SolentChapters from "./pages/SolentChapters";
import SolentHistory from "./pages/SolentHistory";
import LatestNews from "./pages/LatestNews";
import Events from "./pages/Events";
import UsefulLinks from "./pages/UsefulLinks";
import ContactUs from "./pages/ContactUs";
import DataProtection from "./pages/DataProtection";

export const router = createBrowserRouter([
  {
    path: "/",
    element: <Layout />,
    children: [
      { index: true, element: <Home /> },
      { path: "about-the-order", element: <AboutTheOrder /> },
      { path: "about-the-order/supreme-council", element: <SupremeCouncil /> },
      { path: "about-the-order/rose-croix-masonry", element: <RoseCroixMasonry /> },
      { path: "about-the-order/faq", element: <FAQ /> },
      { path: "wessex-district", element: <WessexDistrict /> },
      { path: "wessex-district/centers", element: <WessexCenters /> },
      { path: "wessex-district/chapters", element: <WessexChapters /> },
      { path: "wessex-district/history", element: <WessexHistory /> },
      { path: "solent-district", element: <SolentDistrict /> },
      { path: "solent-district/centers", element: <SolentCenters /> },
      { path: "solent-district/chapters", element: <SolentChapters /> },
      { path: "solent-district/history", element: <SolentHistory /> },
      { path: "latest-news", element: <LatestNews /> },
      { path: "events", element: <Events /> },
      { path: "useful-links", element: <UsefulLinks /> },
      { path: "contact-us", element: <ContactUs /> },
      { path: "data-protection", element: <DataProtection /> },
    ],
  },
]);
