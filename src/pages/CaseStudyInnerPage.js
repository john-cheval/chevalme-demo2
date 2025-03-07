/** @format */
"use client";
import LoadingAnimation from "@/util/LoadingAnimation";
import { useEffect, useState } from "react";
import useFetch from "@/hooks/useFetch";
import dynamic from "next/dynamic";
const NewFooter = dynamic(() => import("@/components/Footer/NewFooter"));
const NewHeader = dynamic(() => import("@/components/NewHeader/NewHeader"));
const Section10 = dynamic(() => import("@/components/Home/Section10"));
const CaseStudiesInnerSection1 = dynamic(
  () => import("@/components/CaseStudiesInner/CaseStudiesInnerSection1")
);
const WorkInnerSection2 = dynamic(
  () => import("@/components/WorkInner/WorkInnerSection2")
);

function CaseStudiesInnerPage({ caseId, MainNavLinks, MainFooterLinks }) {
  const [loading, setLoading] = useState(true);

  const { data, loading: dataLoading } = useFetch(
    `https://d331b20430.nxcli.net/chevalapi/wp-json/custom/v1/full_details?slug=${caseId}`
  );

  const { data2, loading: data2Loading } = useFetch(
    `https://d331b20430.nxcli.net/chevalapi/wp-json/custom/v1/projects?type=case_study`
  );

  const { data: clients, loading: clientLoading } = useFetch(
    "https://d331b20430.nxcli.net/chevalapi/wp-json/custom/v1/all_clients"
  );

  useEffect(() => {
    if (!dataLoading && !data2Loading && !clientLoading) {
      setLoading(false);
    }
  }, [dataLoading, data2Loading, clientLoading]);
  return loading ? (
    <>
      <LoadingAnimation />
    </>
  ) : (
    <>
      <NewHeader navLinksNew={MainNavLinks} />

      <CaseStudiesInnerSection1 data={data} />
      <WorkInnerSection2 data={data2} ID={caseId} link={"/case-studies"} />
      <Section10 data={clients} />
      <NewFooter footer={MainFooterLinks} />
    </>
  );
}

export default CaseStudiesInnerPage;
