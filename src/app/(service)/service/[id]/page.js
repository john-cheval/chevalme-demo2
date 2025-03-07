/** @format */

import generateMetadataData from "@/util/generateMetaTitle";
import ServicesInnerPage from "./ServiceInnerPage";
import { fetchData } from "@/server/getHomePageData";
import { notFound } from "next/navigation";

export async function generateMetadata({ params }) {
  const id = (await params).id;
  return await generateMetadataData(id, `/service/${id}`, true);
}

export default async function ServicesInner({ params }) {
  const paramsId = await params;
  const MainNavLinks = await fetchData(
    "https://d331b20430.nxcli.net/chevalapi/wp-json/custom/v1/menu/quicklinks"
  );
  const MainFooterLinks = await fetchData(
    "https://d331b20430.nxcli.net/chevalapi/wp-json/custom/v1/menu/footer"
  );
  const data = await fetchData(
    `https://d331b20430.nxcli.net/chevalapi/wp-json/custom/v1/full_details?slug=${paramsId.id}&meta_type=service`
  );
  const services = await fetchData(
    `https://d331b20430.nxcli.net/chevalapi/wp-json/custom/v1/services`
  );
  if (!data) {
    notFound();
  }
  return (
    <ServicesInnerPage
      data={data}
      services={services}
      MainNavLinks={MainNavLinks}
      MainFooterLinks={MainFooterLinks.menu_tree}
    />
  );
}
