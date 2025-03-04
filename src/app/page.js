/** @format */
import generateMetadataData from "@/util/generateMetaTitle";
import HomePage from "../pages/Home";
import { getHomepageData } from "@/server/getHomePageData";

export async function generateMetadata() {
  return await generateMetadataData(8, "", false);
}

export default async function Home() {
  const homeContent = await getHomepageData();
  return <HomePage homeContent={homeContent} />;
}
