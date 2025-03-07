/** @format */
"use client";
import BlogsSection1 from "@/components/Blogs/BlogsSection1";
import NewFooter from "@/components/Footer/NewFooter";
import NewHeader from "@/components/NewHeader/NewHeader";
import useFetch from "@/hooks/useFetch";
import LoadingAnimation from "@/util/LoadingAnimation";
import React, { useEffect, useState } from "react";

function BlogsPage({ navLinks, codeLinks, craftLinks, convertLinks }) {
  const [loading, setLoading] = useState(true);

  const { data, loading: blogLoading } = useFetch(
    "https://d331b20430.nxcli.net/chevalapi/wp-json/wp/v2/posts?_embed"
  );

  useEffect(() => {
    if (!blogLoading) {
      setLoading(false);
    }
  }, [blogLoading]);
  return loading ? (
    <>
      <LoadingAnimation />
    </>
  ) : (
    <>
      <NewHeader
        navLinks={navLinks}
        codeLinks={codeLinks}
        craftLinks={craftLinks}
        convertLinks={convertLinks}
      />
      <BlogsSection1 data={data} />
      <NewFooter />
    </>
  );
}

export default BlogsPage;
