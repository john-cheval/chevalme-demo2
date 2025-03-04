import PrivacyPolicyPage from "@/pages/PrivacyPolicy";
import generateMetadataData from "@/util/generateMetaTitle";
import React from "react";

export async function generateMetadata() {
  return await generateMetadataData(165, `privacy-policy`, false);
}
const PrivacyPolicy = () => {
  return <PrivacyPolicyPage />;
};

export default PrivacyPolicy;
