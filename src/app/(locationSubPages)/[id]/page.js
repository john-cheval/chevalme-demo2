import { notFound } from "next/navigation";
import LocalInnerPage from "./LocalInnerPage";
import generateMetadataData from "@/util/generateMetaTitle";
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

async function fetchData(id) {
  const res = await fetch(
    `https://d331b20430.nxcli.net/chevalapi/wp-json/custom/v1/full_details?slug=${id}&meta_type=page`
  );
  if (!res.ok) return undefined;
  return res.json();
}

export async function generateMetadata({ params }) {
  const id = (await params).id;
  return await generateMetadataData(id, id, true);
}
const LocationSubPage = async ({ params }) => {
  const data = await fetchData((await params).id);
  const MainNavLinks = await fetchData(
    "https://d331b20430.nxcli.net/chevalapi/wp-json/custom/v1/menu/quicklinks"
  );
  const MainFooterLinks = await fetchData(
    "https://d331b20430.nxcli.net/chevalapi/wp-json/custom/v1/menu/footer"
  );

  if (!data) {
    notFound();
  }

  return (
    <>
      <LocalInnerPage
        pageData={data?.page_template_name}
        MainNavLinks={MainNavLinks}
        MainFooterLinks={MainFooterLinks.menu_tree}
      />
    </>
  );
};

export default LocationSubPage;
