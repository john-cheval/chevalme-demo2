/** @format */
import generateMetadataData from "@/util/generateMetaTitle";
import HomePage from "../pages/Home";

export async function generateMetadata() {
  return await generateMetadataData(8, "", false);
}

export default function Home() {
  return <HomePage />;
}
