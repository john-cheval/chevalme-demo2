/** @format */
import generateMetadataData from "@/util/generateMetaTitle";
import HomePage from "../pages/Home";
import { fetchData } from "@/server/getHomePageData";

export async function generateMetadata() {
  return await generateMetadataData(8, "", false);
}

export default async function Home() {
  const MainNavLinks = await fetchData(
    "https://d331b20430.nxcli.net/chevalapi/wp-json/custom/v1/menu/quicklinks"
  );
  const MainFooterLinks = await fetchData(
    "https://d331b20430.nxcli.net/chevalapi/wp-json/custom/v1/menu/footer"
  );

  const homeContent = await fetchData(
    "https://d331b20430.nxcli.net/chevalapi/wp-json/custom/v1/homepage_details?ID=8"
  );

  const worksHomePage = await fetchData(
    "https://d331b20430.nxcli.net/chevalapi/wp-json/custom/v1/homeprojects"
  );

  const services = await fetchData(
    "https://d331b20430.nxcli.net/chevalapi/wp-json/custom/v1/services"
  );

  const gallery = await fetchData(
    "https://d331b20430.nxcli.net/chevalapi/wp-json/custom/v1/full_details?ID=8"
  );
  const blogsHomePage = await fetchData(
    "https://d331b20430.nxcli.net/chevalapi/wp-json/wp/v2/posts?_embed"
  );
  const googleReviews = await fetchData(
    "https://d331b20430.nxcli.net/chevalapi/wp-json/custom/v1/google_reviews"
  );

  return (
    <HomePage
      homeContent={homeContent}
      worksHomePage={worksHomePage}
      services={services}
      gallery={gallery}
      blogsHomePage={blogsHomePage}
      googleReviews={googleReviews}
      MainNavLinks={MainNavLinks}
      MainFooterLinks={MainFooterLinks.menu_tree}
    />
  );
}
