/** @format */
"use client";

const NewFooter = dynamic(() => import("@/components/Footer/NewFooter"));
const NewHeader = dynamic(() => import("@/components/NewHeader/NewHeader"));
const Section10 = dynamic(() => import("@/components/Home/Section10"));
const WorkInnerSection1 = dynamic(
  () => import("@/components/WorkInner/WorkInnerSection1")
);
const WorkInnerSection2 = dynamic(
  () => import("@/components/WorkInner/WorkInnerSection2")
);
import useFetch from "@/hooks/useFetch";
import LoadingAnimation from "@/util/LoadingAnimation";
import dynamic from "next/dynamic";
import { useEffect, useState } from "react";

function WorkInnerPage({ innerID }) {
  const [loading, setLoading] = useState(true);

  const { data, loading: dataLoading } = useFetch(
    `https://d331b20430.nxcli.net/chevalapi/wp-json/custom/v1/projects_details?slug=${innerID?.id}`
  );

  const { data: data2, loading: data2Loading } = useFetch(
    "https://d331b20430.nxcli.net/chevalapi/wp-json/custom/v1/projects"
  );

  const { data: clients, loading: clientLoading } = useFetch(
    "https://d331b20430.nxcli.net/chevalapi/wp-json/custom/v1/all_clients"
  );

  const { data: footer, loading: footerLoading } = useFetch(
    "https://d331b20430.nxcli.net/chevalapi/wp-json/custom/v1/services"
  );

  useEffect(() => {
    if (!dataLoading && !data2Loading && !clientLoading && !footerLoading) {
      setLoading(false);
    }
  }, [dataLoading, footerLoading, data2Loading, clientLoading]);
  return loading ? (
    <>
      <LoadingAnimation />
    </>
  ) : (
    <>
      <NewHeader />
      <WorkInnerSection1 data={data} />
      <WorkInnerSection2 data={data2} ID={innerID?.id} link="/projects" />
      <Section10 data={clients} />
      <NewFooter />
    </>
  );
}

export default WorkInnerPage;
