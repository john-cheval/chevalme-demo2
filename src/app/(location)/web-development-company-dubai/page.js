import DubaiPage from "@/pages/Location/Dubai";
import generateMetadataData from "@/util/generateMetaTitle";

export async function generateMetadata() {
  return await generateMetadataData(
    "web-development-company-dubai",
    "web-development-company-dubai",
    true
  );
}
function Dubai() {
  return <DubaiPage />;
}

export default Dubai;
