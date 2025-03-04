/** @format */

import CaseStudiesInnerPage from "@/pages/CaseStudyInnerPage";
import generateMetadataData from "@/util/generateMetaTitle";

export async function generateMetadata({ params }) {
  const id = (await params).id;
  return await generateMetadataData(id, `case-studies/${id}`, true);
}

async function CaseStudiesInner({ params }) {
  const dataID = await params;

  return <CaseStudiesInnerPage caseId={dataID.id} />;
}

export default CaseStudiesInner;
