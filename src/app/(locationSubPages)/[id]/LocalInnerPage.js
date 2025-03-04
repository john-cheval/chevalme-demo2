"use client";
import dynamic from "next/dynamic";
import React from "react";

const NewFooter = dynamic(() => import("@/components/Footer/NewFooter"), {
  ssr: false,
});
const NewHeader = dynamic(() => import("@/components/NewHeader/NewHeader"), {
  ssr: false,
});
const DummyComp = dynamic(
  () => import("@/components/locationSubPage/dummyComp"),
  {
    ssr: false,
  }
);

const LocalInnerPage = ({ pageData }) => {
  return (
    <>
      <NewHeader />

      <DummyComp page={pageData} />
      <NewFooter />
    </>
  );
};

export default LocalInnerPage;
