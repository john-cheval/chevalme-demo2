/** @format */

import WorkInnerPage from "@/app/projects/[id]/WorkInner";
import { fetchData } from "@/server/getHomePageData";
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

export async function generateMetadata({ params }) {
  const id = (await params).id;
  return await generateMetadataData(id, `projects/${id}`, true);
}

export default async function WorkInner({ params }) {
  const parmasID = await params;
  const navLinks = [
    { name: "About", path: "/about" },
    { name: "Work", path: "/projects" },
    { name: "Services", path: "/services" },
    { name: "Contact", path: "/contact-us" },
  ];

  const codeLinks = { eCommerce, mobileApps, webDev, websites };
  const craftLinks = { branding, customDesign, uiUx };
  const convertLinks = { seo, socialMedia, digitalMarketing };

  const data2 = await fetchData(
    "https://d331b20430.nxcli.net/chevalapi/wp-json/custom/v1/projects"
  );

  const data = await fetchData(
    `https://d331b20430.nxcli.net/chevalapi/wp-json/custom/v1/projects_details?slug=${parmasID?.id}`
  );

  return (
    <WorkInnerPage
      innerID={parmasID}
      data2={data2}
      data={data}
      navLinks={navLinks}
      codeLinks={codeLinks}
      craftLinks={craftLinks}
      convertLinks={convertLinks}
    />
  );
}
