/** @format */
"use client";
const NewFooter = dynamic(() => import("@/components/Footer/NewFooter"));
const NewHeader = dynamic(() => import("@/components/NewHeader/NewHeader"));
const WorkBody = dynamic(() => import("@/components/Work/WorkNew/WorkBody"));
const WorkHeader = dynamic(
  () => import("@/components/Work/WorkNew/WorkHeader")
);
import useFetch from "@/hooks/useFetch";
import LoadingAnimation from "@/util/LoadingAnimation";
import dynamic from "next/dynamic";
import React, { useEffect, useState } from "react";

function WorkPage({
  workHeaderData,
  data,

  MainNavLinks,
  MainFooterLinks,
}) {
  const [loading, setLoading] = useState(true);

  // Fetch Categories
  const { data: categories, loading: categoriesLoading } = useFetch(
    "https://d331b20430.nxcli.net/chevalapi/wp-json/custom/v1/category_list?show_in_filter=1"
  );

  useEffect(() => {
    if (!categoriesLoading) {
      setLoading(false);
    } else {
      setLoading(true);
    }
  }, [categoriesLoading]);

  return loading ? (
    <>
      <LoadingAnimation />
    </>
  ) : (
    <>
      <NewHeader navLinksNew={MainNavLinks} />

      <WorkHeader data={workHeaderData} />
      <WorkBody data={data} categories={categories} />
      <NewFooter footer={MainFooterLinks} />
    </>
  );
}

export default WorkPage;
