/** @format */
"use client";
import React from "react";
import LoadingAnimation from "@/util/LoadingAnimation";
import useFetch from "@/hooks/useFetch";
import NotFoundContent from "@/components/NotFound";
import NewHeader from "@/components/NewHeader/NewHeader";
function NotFound() {
  const { data: footerData, loading } = useFetch(
    "https://d331b20430.nxcli.net/chevalapi/wp-json/custom/v1/services"
  );

  return loading ? (
    <>
      <LoadingAnimation />
    </>
  ) : (
    <>
      {/* <Header /> */}
      <NewHeader />
      <NotFoundContent />
    </>
  );
}

export default NotFound;
