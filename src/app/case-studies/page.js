import CaseStudies from "@/pages/CaseStudy";
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

export async function generateMetadata(parent) {
  const data = await fetch(
    `https://d331b20430.nxcli.net/chevalapi/wp-json/custom/v1/projects?type=case_study`
  ).then((res) => res.json());

  return {
    title:
      data?.meta_title ||
      "Best Web Developers in Dubai | Software Developers in Dubai",
    description:
      data?.meta_description ||
      "Partner with top Web Developers in Dubai at Cheval . We Specialize in Mobile App and Software Development, delivering cutting-edge tailored digital solutions.",
    alternates: {
      canonical: `https://chevalme.com/case-studies/`,
    },
  };
}

export default async function CaseStudy() {
  const MainNavLinks = await fetchData(
    "https://d331b20430.nxcli.net/chevalapi/wp-json/custom/v1/menu/quicklinks"
  );
  const MainFooterLinks = await fetchData(
    "https://d331b20430.nxcli.net/chevalapi/wp-json/custom/v1/menu/footer"
  );

  return (
    <CaseStudies
      MainNavLinks={MainNavLinks}
      MainFooterLinks={MainFooterLinks.menu_tree}
    />
  );
}
