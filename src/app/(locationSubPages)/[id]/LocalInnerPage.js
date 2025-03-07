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

const LocalInnerPage = ({
  pageData,
  navLinks,
  codeLinks,
  craftLinks,
  convertLinks,
}) => {
  return (
    <>
      <NewHeader
        navLinks={navLinks}
        codeLinks={codeLinks}
        craftLinks={craftLinks}
        convertLinks={convertLinks}
      />

      <DummyComp page={pageData} />
      <NewFooter />
    </>
  );
};

export default LocalInnerPage;
