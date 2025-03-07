"use client";

import useFetch from "@/hooks/useFetch";
import LoadingAnimation from "@/util/LoadingAnimation";
import dynamic from "next/dynamic";
import React, { useEffect, useState } from "react";
const NewFooter = dynamic(() => import("@/components/Footer/NewFooter"));
const NewHeader = dynamic(() => import("@/components/NewHeader/NewHeader"));
const PrivacyPolicyContent = dynamic(
  () => import("@/components/PrivacyPolicy/PrivacyPolicyContent")
);

const PrivacyPolicyPage = ({ MainNavLinks, MainFooterLinks }) => {
  const [loading, setLoading] = useState(false);

  const { data: privacyData, loading: privacyLoading } = useFetch(
    "https://d331b20430.nxcli.net/chevalapi/wp-json/custom/v1/full_details?ID=165"
  );

  useEffect(() => {
    if (!privacyLoading) {
      setLoading(false);
    }
  }, [privacyLoading]);

  return loading ? (
    <>
      <LoadingAnimation />
    </>
  ) : (
    <>
      <NewHeader navLinksNew={MainNavLinks} />

      <PrivacyPolicyContent
        content={privacyData?.post_content}
        title={privacyData?.post_title}
      />
      <NewFooter footer={MainFooterLinks} />
    </>
  );
};

export default PrivacyPolicyPage;
