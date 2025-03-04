/** @format */

import generateMetadataData from "@/util/generateMetaTitle";
import ServicesInnerPage from "./ServiceInnerPage";

export async function generateMetadata({ params }) {
  const id = (await params).id;
  return await generateMetadataData(id, `/service/${id}`, true);
}

async function ServicesInner({ params }) {
  const paramsId = await params;
  return <ServicesInnerPage serviceId={paramsId?.id} />;
}

export default ServicesInner;
