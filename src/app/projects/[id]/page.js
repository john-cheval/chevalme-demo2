/** @format */

import WorkInnerPage from "@/app/projects/[id]/WorkInner";
import generateMetadataData from "@/util/generateMetaTitle";

export async function generateMetadata({ params }) {
  const id = (await params).id;
  return await generateMetadataData(id, `projects/${id}`, true);
}

async function WorkInner({ params }) {
  const parmasID = await params;

  return <WorkInnerPage innerID={parmasID} />;
}

export default WorkInner;
