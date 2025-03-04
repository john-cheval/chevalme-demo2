/** @format */

import SaudiArabiaPage from "@/pages/Location/SaudiArabia";
import generateMetadataData from "@/util/generateMetaTitle";

export async function generateMetadata() {
  return await generateMetadataData(
    "web-design-company-saudi-arabia",
    "web-design-company-saudi-arabia",
    true
  );
}
function SaudiArabia() {
  return <SaudiArabiaPage />;
}

export default SaudiArabia;
