import React from "react";
import WorkPage from "../../pages/Work";
import generateMetadataData from "@/util/generateMetaTitle";

export async function generateMetadata() {
  return await generateMetadataData(96, `projects`, false);
}
const Work = () => {
  return <WorkPage />;
};

export default Work;
