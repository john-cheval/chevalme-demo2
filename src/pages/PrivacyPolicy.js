"use client";
import NewFooter from "@/components/Footer/NewFooter";
import NewHeader from "@/components/NewHeader/NewHeader";
import PrivacyPolicyContent from "@/components/PrivacyPolicy/PrivacyPolicyContent";
import useFetch from "@/hooks/useFetch";
import LoadingAnimation from "@/util/LoadingAnimation";
import React, { useEffect, useState } from "react";

const PrivacyPolicyPage = () => {
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
      <NewHeader />
      <PrivacyPolicyContent
        content={privacyData?.post_content}
        title={privacyData?.post_title}
      />
      <NewFooter />
    </>
  );
};

export default PrivacyPolicyPage;
