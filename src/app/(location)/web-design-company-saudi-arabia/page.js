/** @format */

import SaudiArabiaPage from "@/pages/Location/SaudiArabia";
import generateMetadataData from "@/util/generateMetaTitle";

import { fetchData } from "@/server/getHomePageData";

export async function generateMetadata() {
  return await generateMetadataData(
    "web-design-company-saudi-arabia",
    "web-design-company-saudi-arabia",
    true
  );
}
export default async function SaudiArabia() {
  const MainNavLinks = await fetchData(
    "https://d331b20430.nxcli.net/chevalapi/wp-json/custom/v1/menu/quicklinks"
  );
  const MainFooterLinks = await fetchData(
    "https://d331b20430.nxcli.net/chevalapi/wp-json/custom/v1/menu/footer"
  );
  return (
    <SaudiArabiaPage
      MainFooterLinks={MainFooterLinks.menu_tree}
      MainNavLinks={MainNavLinks}
    />
  );
}
