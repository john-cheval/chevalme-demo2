/** @format */

import generateMetadataData from "@/util/generateMetaTitle";
import ServicesInnerPage from "./ServiceInnerPage";
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
export async function generateMetadata({ params }) {
  const id = (await params).id;
  return await generateMetadataData(id, `/service/${id}`, true);
}

export default async function ServicesInner({ params }) {
  const paramsId = await params;
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
    `https://d331b20430.nxcli.net/chevalapi/wp-json/custom/v1/full_details?slug=${paramsId.id}&meta_type=service`
  );
  const services = await fetchData(
    `https://d331b20430.nxcli.net/chevalapi/wp-json/custom/v1/services`
  );
  return (
    <ServicesInnerPage
      data={data}
      services={services}
      navLinks={navLinks}
      codeLinks={codeLinks}
      craftLinks={craftLinks}
      convertLinks={convertLinks}
    />
  );
}
