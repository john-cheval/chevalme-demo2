import React from "react";
import WorkPage from "../../pages/Work";
import generateMetadataData from "@/util/generateMetaTitle";
import { fetchData } from "@/server/getHomePageData";

export async function generateMetadata() {
  return await generateMetadataData(96, `projects`, false);
}
export default async function Work() {
  const MainNavLinks = await fetchData(
    "https://d331b20430.nxcli.net/chevalapi/wp-json/custom/v1/menu/quicklinks"
  );
  const MainFooterLinks = await fetchData(
    "https://d331b20430.nxcli.net/chevalapi/wp-json/custom/v1/menu/footer"
  );
  const workHeaderData = await fetchData(
    "https://d331b20430.nxcli.net/chevalapi/wp-json/custom/v1/full_details?ID=96"
  );

  const data = await fetchData(
    "https://d331b20430.nxcli.net/chevalapi/wp-json/custom/v1/projects"
  );

  return (
    <WorkPage
      workHeaderData={workHeaderData}
      data={data}
      MainNavLinks={MainNavLinks}
      MainFooterLinks={MainFooterLinks.menu_tree}
    />
  );
}
