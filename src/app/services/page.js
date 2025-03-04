/** @format */

import ServicePage from "@/pages/Service";
import generateMetadataData from "@/util/generateMetaTitle";

export async function generateMetadata() {
  return await generateMetadataData(98, `services`, false);
}

function Services() {
  return <ServicePage />;
}

export default Services;
