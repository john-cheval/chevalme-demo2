/** @format */

import AbuDhabiPage from "@/pages/Location/Abudhabi";
import { fetchData } from "@/server/getHomePageData";
import generateMetadataData from "@/util/generateMetaTitle";

export async function generateMetadata() {
  return await generateMetadataData(
    "web-design-company-abu-dhabi",
    "web-design-company-abu-dhabi",
    true
  );
}
export default async function AbuDhabi() {
  const MainNavLinks = await fetchData(
    "https://d331b20430.nxcli.net/chevalapi/wp-json/custom/v1/menu/quicklinks"
  );
  const MainFooterLinks = await fetchData(
    "https://d331b20430.nxcli.net/chevalapi/wp-json/custom/v1/menu/footer"
  );
  return (
    <AbuDhabiPage
      MainNavLinks={MainNavLinks}
      MainFooterLinks={MainFooterLinks.menu_tree}
    />
  );
}
