/** @format */

import CaseStudiesInnerPage from "@/pages/CaseStudyInnerPage";
import generateMetadataData from "@/util/generateMetaTitle";

import { fetchData } from "@/server/getHomePageData";

export async function generateMetadata({ params }) {
  const id = (await params).id;
  return await generateMetadataData(id, `case-studies/${id}`, true);
}

export default async function CaseStudiesInner({ params }) {
  const dataID = await params;

  const MainNavLinks = await fetchData(
    "https://d331b20430.nxcli.net/chevalapi/wp-json/custom/v1/menu/quicklinks"
  );
  const MainFooterLinks = await fetchData(
    "https://d331b20430.nxcli.net/chevalapi/wp-json/custom/v1/menu/footer"
  );

  return (
    <CaseStudiesInnerPage
      caseId={dataID.id}
      MainNavLinks={MainNavLinks}
      MainFooterLinks={MainFooterLinks.menu_tree}
    />
  );
}
