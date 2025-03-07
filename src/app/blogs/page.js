/** @format */

import { fetchData } from "@/server/getHomePageData";
import BlogsPage from "../../pages/Blogs";
export async function generateMetadata(parent) {
  const data = await fetch(
    `https://d331b20430.nxcli.net/chevalapi/wp-json/wp/v2/posts?_embed`
  ).then((res) => res.json());

  return {
    title:
      data?.meta_title ||
      "Best Web Developers in Dubai | Software Developers in Dubai",
    description:
      data?.meta_description ||
      "Best Web Developers in Dubai | Software Developers in Dubai",
    alternates: {
      canonical: `https://chevalme.com/blogs/`,
    },
  };
}
export default async function Blogs() {
  const MainNavLinks = await fetchData(
    "https://d331b20430.nxcli.net/chevalapi/wp-json/custom/v1/menu/quicklinks"
  );
  const MainFooterLinks = await fetchData(
    "https://d331b20430.nxcli.net/chevalapi/wp-json/custom/v1/menu/footer"
  );
  return (
    <BlogsPage
      MainNavLinks={MainNavLinks}
      MainFooterLinks={MainFooterLinks.menu_tree}
    />
  );
}
