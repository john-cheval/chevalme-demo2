/** @format */

import DammamPage from "@/pages/Location/Dammam";
import generateMetadataData from "@/util/generateMetaTitle";

export async function generateMetadata() {
  return await generateMetadataData(
    "web-development-company-dammam",
    "web-development-company-dammam",
    true
  );
}

function Dammam() {
  return <DammamPage />;
}

export default Dammam;
