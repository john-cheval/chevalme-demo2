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

function WorkPage() {
  const [loading, setLoading] = useState(true);
  const { data: workHeaderData, loading: workHeaderLoading } = useFetch(
    "https://d331b20430.nxcli.net/chevalapi/wp-json/custom/v1/full_details?ID=96"
  );

  // Fetch Categories
  const { data: categories, loading: categoriesLoading } = useFetch(
    "https://d331b20430.nxcli.net/chevalapi/wp-json/custom/v1/category_list?show_in_filter=1"
  );

  const { data, loading: dataLoading } = useFetch(
    "https://d331b20430.nxcli.net/chevalapi/wp-json/custom/v1/projects"
  );

  useEffect(() => {
    if (!dataLoading && !categoriesLoading && !workHeaderLoading) {
      setLoading(false);
    } else {
      setLoading(true);
    }
  }, [dataLoading, categoriesLoading, workHeaderLoading]);

  return loading ? (
    <>
      <LoadingAnimation />
    </>
  ) : (
    <>
      <NewHeader />
      <WorkHeader data={workHeaderData} />
      <WorkBody data={data} categories={categories} />
      <NewFooter />
    </>
  );
}

export default WorkPage;
