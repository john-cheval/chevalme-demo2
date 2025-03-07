/** @format */
"use client";
import LoadingAnimation from "@/util/LoadingAnimation";
import { useEffect, useState } from "react";
import useFetch from "@/hooks/useFetch";
import dynamic from "next/dynamic";
const NewFooter = dynamic(() => import("@/components/Footer/NewFooter"), {
  ssr: false,
});
const NewHeader = dynamic(() => import("@/components/NewHeader/NewHeader"), {
  ssr: false,
});
const Section10 = dynamic(() => import("@/components/Home/Section10"), {
  ssr: false,
});
const CaseStudiesInnerSection1 = dynamic(
  () => import("@/components/CaseStudiesInner/CaseStudiesInnerSection1"),
  {
    ssr: false,
  }
);
const WorkInnerSection2 = dynamic(
  () => import("@/components/WorkInner/WorkInnerSection2"),
  {
    ssr: false,
  }
);

function CaseStudiesInnerPage({
  data,
  caseId,
  navLinks,
  codeLinks,
  craftLinks,
  convertLinks,
  data2,
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
      <NewHeader
        navLinks={navLinks}
        codeLinks={codeLinks}
        craftLinks={craftLinks}
        convertLinks={convertLinks}
      />
      <CaseStudiesInnerSection1 data={data} />
      <WorkInnerSection2 data={data2} ID={caseId} link={"/case-studies"} />
      <Section10 data={clients} />
      <NewFooter />
    </>
  );
}

export default CaseStudiesInnerPage;
