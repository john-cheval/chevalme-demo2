/** @format */

import RiyadhPage from "@/pages/Location/Riyadh";
import { fetchData } from "@/server/getHomePageData";
import generateMetadataData from "@/util/generateMetaTitle";

export async function generateMetadata() {
  return await generateMetadataData(
    "web-development-company-riyadh",
    "web-development-company-riyadh",
    true
  );
}
export default async function Riyadh() {
  const MainNavLinks = await fetchData(
    "https://d331b20430.nxcli.net/chevalapi/wp-json/custom/v1/menu/quicklinks"
  );
  const MainFooterLinks = await fetchData(
    "https://d331b20430.nxcli.net/chevalapi/wp-json/custom/v1/menu/footer"
  );

  return (
    <RiyadhPage
      MainNavLinks={MainNavLinks}
      MainFooterLinks={MainFooterLinks.menu_tree}
    />
  );
}
