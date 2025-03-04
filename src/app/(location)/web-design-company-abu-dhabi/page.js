/** @format */

import AbuDhabiPage from "@/pages/Location/Abudhabi";
import generateMetadataData from "@/util/generateMetaTitle";

export async function generateMetadata() {
  return await generateMetadataData(
    "web-design-company-abu-dhabi",
    "web-design-company-abu-dhabi",
    true
  );
}
function AbuDhabi() {
  return <AbuDhabiPage />;
}

export default AbuDhabi;
