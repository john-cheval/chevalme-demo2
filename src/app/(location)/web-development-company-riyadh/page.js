/** @format */

import RiyadhPage from "@/pages/Location/Riyadh";
import generateMetadataData from "@/util/generateMetaTitle";
export async function generateMetadata() {
  return await generateMetadataData(
    "web-development-company-riyadh",
    "web-development-company-riyadh",
    true
  );
}
function Riyadh() {
  return <RiyadhPage />;
}

export default Riyadh;
