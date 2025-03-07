/** @format */
import generateMetadataData from "@/util/generateMetaTitle";
import AboutPage from "../../pages/About";
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
  return await generateMetadataData(100, "about", false);
}

export default async function About() {
  const MainNavLinks = await fetchData(
    "https://d331b20430.nxcli.net/chevalapi/wp-json/custom/v1/menu/quicklinks"
  );
  const MainFooterLinks = await fetchData(
    "https://d331b20430.nxcli.net/chevalapi/wp-json/custom/v1/menu/footer"
  );

  const aboutData = await fetchData(
    "https://d331b20430.nxcli.net/chevalapi/wp-json/custom/v1/full_details?ID=100"
  );
  return (
    <AboutPage
      aboutData={aboutData}
      MainNavLinks={MainNavLinks}
      MainFooterLinks={MainFooterLinks.menu_tree}
    />
  );
}
