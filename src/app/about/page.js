/** @format */
import generateMetadataData from "@/util/generateMetaTitle";
import AboutPage from "../../pages/About";

export async function generateMetadata() {
  return await generateMetadataData(100, "about", false);
}

function About() {
  return <AboutPage />;
}

export default About;
