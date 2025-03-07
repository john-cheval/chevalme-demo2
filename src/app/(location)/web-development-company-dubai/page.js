import DubaiPage from "@/pages/Location/Dubai";
import generateMetadataData from "@/util/generateMetaTitle";

import { fetchData } from "@/server/getHomePageData";

export async function generateMetadata() {
  return await generateMetadataData(
    "web-development-company-dubai",
    "web-development-company-dubai",
    true
  );
}
export default async function Dubai() {
  const MainNavLinks = await fetchData(
    "https://d331b20430.nxcli.net/chevalapi/wp-json/custom/v1/menu/quicklinks"
  );
  const MainFooterLinks = await fetchData(
    "https://d331b20430.nxcli.net/chevalapi/wp-json/custom/v1/menu/footer"
  );

  return (
    <DubaiPage
      MainNavLinks={MainNavLinks}
      MainFooterLinks={MainFooterLinks.menu_tree}
    />
  );
}
