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

function WorkInnerPage({
  innerID,
  data2,
  data,
  MainNavLinks,
  MainFooterLinks,
}) {
  const [loading, setLoading] = useState(true);

  const { data: clients, loading: clientLoading } = useFetch(
    "https://d331b20430.nxcli.net/chevalapi/wp-json/custom/v1/all_clients"
  );

  useEffect(() => {
    if (!clientLoading) {
      setLoading(false);
    }
  }, [clientLoading]);
  return loading ? (
    <>
      <LoadingAnimation />
    </>
  ) : (
    <>
      <NewHeader navLinksNew={MainNavLinks} />

      <WorkInnerSection1 data={data} />
      <WorkInnerSection2 data={data2} ID={innerID?.id} link="/projects" />
      <Section10 data={clients} />
      <NewFooter footer={MainFooterLinks} />
    </>
  );
}

export default WorkInnerPage;
