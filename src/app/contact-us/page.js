import ContactPage from "@/pages/ContactPage";
import generateMetadataData from "@/util/generateMetaTitle";
import React from "react";

import { fetchData } from "@/server/getHomePageData";

export async function generateMetadata() {
  return await generateMetadataData(56, `contact-us`, false);
}
export default async function Contact() {
  const MainNavLinks = await fetchData(
    "https://d331b20430.nxcli.net/chevalapi/wp-json/custom/v1/menu/quicklinks"
  );
  const MainFooterLinks = await fetchData(
    "https://d331b20430.nxcli.net/chevalapi/wp-json/custom/v1/menu/footer"
  );

  const services = await fetchData(
    "https://d331b20430.nxcli.net/chevalapi/wp-json/custom/v1/services"
  );
  return (
    <ContactPage
      MainNavLinks={MainNavLinks}
      MainFooterLinks={MainFooterLinks.menu_tree}
      services={services}
    />
  );
}
