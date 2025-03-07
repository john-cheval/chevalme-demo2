/** @format */

import WorkInnerPage from "@/app/projects/[id]/WorkInner";
import { fetchData } from "@/server/getHomePageData";
import generateMetadataData from "@/util/generateMetaTitle";
import { notFound } from "next/navigation";

export async function generateMetadata({ params }) {
  const id = (await params).id;
  return await generateMetadataData(id, `projects/${id}`, true);
}

export default async function WorkInner({ params }) {
  const parmasID = await params;
  const MainNavLinks = await fetchData(
    "https://d331b20430.nxcli.net/chevalapi/wp-json/custom/v1/menu/quicklinks"
  );
  const MainFooterLinks = await fetchData(
    "https://d331b20430.nxcli.net/chevalapi/wp-json/custom/v1/menu/footer"
  );

  const data2 = await fetchData(
    "https://d331b20430.nxcli.net/chevalapi/wp-json/custom/v1/projects"
  );

  const data = await fetchData(
    `https://d331b20430.nxcli.net/chevalapi/wp-json/custom/v1/projects_details?slug=${parmasID?.id}`
  );

  if (!data) {
    notFound();
  }

  return (
    <WorkInnerPage
      innerID={parmasID}
      data2={data2}
      data={data}
      MainNavLinks={MainNavLinks}
      MainFooterLinks={MainFooterLinks.menu_tree}
    />
  );
}
