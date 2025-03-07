/** @format */
"use client";
import LoadingAnimation from "@/util/LoadingAnimation";
import React, { useEffect, useState } from "react";

import useFetch from "@/hooks/useFetch";
import dynamic from "next/dynamic";

const Section10 = dynamic(() => import("@/components/Home/Section10"));
const CaseStudiesSection1 = dynamic(
  () => import("@/components/CaseStudies/CaseStudiesSection1")
);
const NewFooter = dynamic(() => import("@/components/Footer/NewFooter"));
const NewHeader = dynamic(() => import("@/components/NewHeader/NewHeader"));
function CaseStudies({ MainNavLinks, MainFooterLinks }) {
  const { data, loading: dataLoading } = useFetch(
    "https://d331b20430.nxcli.net/chevalapi/wp-json/custom/v1/projects?type=case_study"
  );

  const [loading, setLoading] = useState(true);

  const { data: clients, loading: clientLoading } = useFetch(
    "https://d331b20430.nxcli.net/chevalapi/wp-json/custom/v1/all_clients"
  );

  useEffect(() => {
    if (!dataLoading && !clientLoading) {
      setLoading(false);
    } else {
      setLoading(true);
    }
  }, [dataLoading, clientLoading]);

  return loading ? (
    <>
      <LoadingAnimation />
    </>
  ) : (
    <>
      <NewHeader navLinksNew={MainNavLinks} />

      <CaseStudiesSection1 data={data} />
      <Section10 data={clients} />
      <NewFooter footer={MainFooterLinks} />
    </>
  );
}

export default CaseStudies;
