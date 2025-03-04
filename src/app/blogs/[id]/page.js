/** @format */

import generateMetadataData from "@/util/generateMetaTitle";
import BlogsInnerPage from "../../../pages/BlogsInnerPage";

export async function generateMetadata({ params }) {
  const id = (await params).id;
  return await generateMetadataData(id, `blogs/${id}`, true);
}

async function BlogsInner({ params }) {
  const dataID = await params;
  return <BlogsInnerPage id={dataID?.id} />;
}

export default BlogsInner;
