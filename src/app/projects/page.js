import React from "react";
import WorkPage from "../../pages/Work";
import generateMetadataData from "@/util/generateMetaTitle";
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
  return await generateMetadataData(96, `projects`, false);
}
export default async function Work() {
  const navLinks = [
    { name: "About", path: "/about" },
    { name: "Work", path: "/projects" },
    { name: "Services", path: "/services" },
    { name: "Contact", path: "/contact-us" },
  ];

  const codeLinks = { eCommerce, mobileApps, webDev, websites };
  const craftLinks = { branding, customDesign, uiUx };
  const convertLinks = { seo, socialMedia, digitalMarketing };
  const workHeaderData = await fetchData(
    "https://d331b20430.nxcli.net/chevalapi/wp-json/custom/v1/full_details?ID=96"
  );

  const data = await fetchData(
    "https://d331b20430.nxcli.net/chevalapi/wp-json/custom/v1/projects"
  );

  return (
    <WorkPage
      workHeaderData={workHeaderData}
      data={data}
      navLinks={navLinks}
      codeLinks={codeLinks}
      craftLinks={craftLinks}
      convertLinks={convertLinks}
    />
  );
}
