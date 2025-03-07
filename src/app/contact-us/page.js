import ContactPage from "@/pages/ContactPage";
import generateMetadataData from "@/util/generateMetaTitle";
import React from "react";
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
import { fetchData } from "@/server/getHomePageData";

export async function generateMetadata() {
  return await generateMetadataData(56, `contact-us`, false);
}
export default async function Contact() {
  const navLinks = [
    { name: "About", path: "/about" },
    { name: "Work", path: "/projects" },
    { name: "Services", path: "/services" },
    { name: "Contact", path: "/contact-us" },
  ];

  const codeLinks = { eCommerce, mobileApps, webDev, websites };
  const craftLinks = { branding, customDesign, uiUx };
  const convertLinks = { seo, socialMedia, digitalMarketing };

  const services = await fetchData(
    "https://d331b20430.nxcli.net/chevalapi/wp-json/custom/v1/services"
  );
  return (
    <ContactPage
      navLinks={navLinks}
      codeLinks={codeLinks}
      craftLinks={craftLinks}
      convertLinks={convertLinks}
      services={services}
    />
  );
}
