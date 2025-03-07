/** @format */

import generateMetadataData from "@/util/generateMetaTitle";
import BlogsInnerPage from "../../../pages/BlogsInnerPage";

import { fetchData } from "@/server/getHomePageData";
export async function generateMetadata({ params }) {
  const id = (await params).id;
  return await generateMetadataData(id, `blogs/${id}`, true);
}

export default async function BlogsInner({ params }) {
  const dataID = await params;
  const MainNavLinks = await fetchData(
    "https://d331b20430.nxcli.net/chevalapi/wp-json/custom/v1/menu/quicklinks"
  );
  const MainFooterLinks = await fetchData(
    "https://d331b20430.nxcli.net/chevalapi/wp-json/custom/v1/menu/footer"
  );
  return (
    <BlogsInnerPage
      id={dataID?.id}
      MainNavLinks={MainNavLinks}
      MainFooterLinks={MainFooterLinks.menu_tree}
    />
  );
}
