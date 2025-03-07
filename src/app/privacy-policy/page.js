import PrivacyPolicyPage from "@/pages/PrivacyPolicy";
import generateMetadataData from "@/util/generateMetaTitle";
import React from "react";

import { fetchData } from "@/server/getHomePageData";

export async function generateMetadata() {
  return await generateMetadataData(165, `privacy-policy`, false);
}
export default async function PrivacyPolicy() {
  const MainNavLinks = await fetchData(
    "https://d331b20430.nxcli.net/chevalapi/wp-json/custom/v1/menu/quicklinks"
  );
  const MainFooterLinks = await fetchData(
    "https://d331b20430.nxcli.net/chevalapi/wp-json/custom/v1/menu/footer"
  );

  return (
    <PrivacyPolicyPage
      MainNavLinks={MainNavLinks}
      MainFooterLinks={MainFooterLinks.menu_tree}
    />
  );
}
