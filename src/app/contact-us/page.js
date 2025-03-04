import ContactPage from "@/pages/ContactPage";
import generateMetadataData from "@/util/generateMetaTitle";
import React from "react";

export async function generateMetadata() {
  return await generateMetadataData(56, `contact-us`, false);
}
const Contact = () => {
  return <ContactPage />;
};

export default Contact;
