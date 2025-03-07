/** @format */

import DammamPage from "@/pages/Location/Dammam";
import generateMetadataData from "@/util/generateMetaTitle";

import { fetchData } from "@/server/getHomePageData";

export async function generateMetadata() {
  return await generateMetadataData(
    "web-development-company-dammam",
    "web-development-company-dammam",
    true
  );
}

export default async function Dammam() {
  const MainNavLinks = await fetchData(
    "https://d331b20430.nxcli.net/chevalapi/wp-json/custom/v1/menu/quicklinks"
  );
  const MainFooterLinks = await fetchData(
    "https://d331b20430.nxcli.net/chevalapi/wp-json/custom/v1/menu/footer"
  );
  return (
    <DammamPage
      MainNavLinks={MainNavLinks}
      MainFooterLinks={MainFooterLinks.menu_tree}
    />
  );
}
