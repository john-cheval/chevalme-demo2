/** @format */

import SaudiArabiaPage from "@/pages/Location/SaudiArabia";
import generateMetadataData from "@/util/generateMetaTitle";
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
  return await generateMetadataData(
    "web-design-company-saudi-arabia",
    "web-design-company-saudi-arabia",
    true
  );
}
function SaudiArabia() {
  const navLinks = [
    { name: "About", path: "/about" },
    { name: "Work", path: "/projects" },
    { name: "Services", path: "/services" },
    { name: "Contact", path: "/contact-us" },
  ];

  const codeLinks = { eCommerce, mobileApps, webDev, websites };
  const craftLinks = { branding, customDesign, uiUx };
  const convertLinks = { seo, socialMedia, digitalMarketing };
  return (
    <SaudiArabiaPage
      navLinks={navLinks}
      codeLinks={codeLinks}
      craftLinks={craftLinks}
      convertLinks={convertLinks}
    />
  );
}

export default SaudiArabia;
