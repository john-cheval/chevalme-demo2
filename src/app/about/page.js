/** @format */
import generateMetadataData from "@/util/generateMetaTitle";
import AboutPage from "../../pages/About";
import { fetchData } from "@/server/getHomePageData";
import {
  eCommerce,
  mobileApps,
  webDev,
  websites,
  branding,
  customDesign,
  uiUx,
  digitalMarketing,
  seo,
  socialMedia,
} from "@/data/NavbarLinks";

export async function generateMetadata() {
  return await generateMetadataData(100, "about", false);
}

export default async function About() {
  const navLinks = [
    { name: "About", path: "/about" },
    { name: "Work", path: "/projects" },
    { name: "Services", path: "/services" },
    { name: "Contact", path: "/contact-us" },
  ];

  const codeLinks = { eCommerce, mobileApps, webDev, websites };
  const craftLinks = { branding, customDesign, uiUx };
  const convertLinks = { seo, socialMedia, digitalMarketing };

  const aboutData = await fetchData(
    "https://d331b20430.nxcli.net/chevalapi/wp-json/custom/v1/full_details?ID=100"
  );
  return (
    <AboutPage
      aboutData={aboutData}
      codeLinks={codeLinks}
      craftLinks={craftLinks}
      convertLinks={convertLinks}
      navLinks={navLinks}
    />
  );
}
