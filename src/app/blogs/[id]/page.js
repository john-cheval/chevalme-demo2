/** @format */

import generateMetadataData from "@/util/generateMetaTitle";
import BlogsInnerPage from "../../../pages/BlogsInnerPage";
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
  return await generateMetadataData(id, `blogs/${id}`, true);
}

export default async function BlogsInner({ params }) {
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
  return (
    <BlogsInnerPage
      id={dataID?.id}
      navLinks={navLinks}
      codeLinks={codeLinks}
      craftLinks={craftLinks}
      convertLinks={convertLinks}
    />
  );
}
