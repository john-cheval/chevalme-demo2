/** @format */

import ServicePage from "@/pages/Service";
import { fetchData } from "@/server/getHomePageData";
import generateMetadataData from "@/util/generateMetaTitle";

export async function generateMetadata() {
  return await generateMetadataData(98, `services`, false);
}

export default async function Services() {
  const MainNavLinks = await fetchData(
    "https://d331b20430.nxcli.net/chevalapi/wp-json/custom/v1/menu/quicklinks"
  );
  const MainFooterLinks = await fetchData(
    "https://d331b20430.nxcli.net/chevalapi/wp-json/custom/v1/menu/footer"
  );
  const serviceHeader = await fetchData(
    "https://d331b20430.nxcli.net/chevalapi/wp-json/custom/v1/full_details?ID=98"
  );
  return (
    <ServicePage
      serviceHeader={serviceHeader}
      MainNavLinks={MainNavLinks}
      MainFooterLinks={MainFooterLinks.menu_tree}
    />
  );
}
