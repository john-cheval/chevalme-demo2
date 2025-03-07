/** @format */
import generateMetadataData from "@/util/generateMetaTitle";
import HomePage from "../pages/Home";
import { fetchData } from "@/server/getHomePageData";
import {
  eCommerce,
  mobileApps,
  webDev,
  websites,
  branding,
  customDesign,
  uiUx,
  digitalMarketing,
  seo,
  socialMedia,
} from "@/data/NavbarLinks";

export async function generateMetadata() {
  return await generateMetadataData(8, "", false);
}

export default async function Home() {
  const navLinks = [
    { name: "About", path: "/about" },
    { name: "Work", path: "/projects" },
    { name: "Services", path: "/services" },
    { name: "Contact", path: "/contact-us" },
  ];

  const codeLinks = { eCommerce, mobileApps, webDev, websites };
  const craftLinks = { branding, customDesign, uiUx };
  const convertLinks = { seo, socialMedia, digitalMarketing };

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
      navLinks={navLinks}
      codeLinks={codeLinks}
      craftLinks={craftLinks}
      convertLinks={convertLinks}
    />
  );
}
