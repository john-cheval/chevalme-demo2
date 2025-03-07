/** @format */

import CaseStudiesInnerPage from "@/pages/CaseStudyInnerPage";
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
import { fetchData } from "@/server/getHomePageData";

export async function generateMetadata({ params }) {
  const id = (await params).id;
  return await generateMetadataData(id, `case-studies/${id}`, true);
}

export default async function CaseStudiesInner({ params }) {
  const dataID = await params;
  const navLinks = [
    { name: "About", path: "/about" },
    { name: "Work", path: "/projects" },
    { name: "Services", path: "/services" },
    { name: "Contact", path: "/contact-us" },
  ];

  const codeLinks = { eCommerce, mobileApps, webDev, websites };
  const craftLinks = { branding, customDesign, uiUx };
  const convertLinks = { seo, socialMedia, digitalMarketing };

  const data = await fetchData(
    `https://d331b20430.nxcli.net/chevalapi/wp-json/custom/v1/full_details?slug=${dataID.id}`
  );
  const data2 = await fetchData(
    `https://d331b20430.nxcli.net/chevalapi/wp-json/custom/v1/projects?type=case_study`
  );

  return (
    <CaseStudiesInnerPage
      caseId={dataID.id}
      navLinks={navLinks}
      codeLinks={codeLinks}
      craftLinks={craftLinks}
      convertLinks={convertLinks}
      data={data}
      data2={data2}
    />
  );
}
