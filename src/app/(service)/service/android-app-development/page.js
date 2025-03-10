/** @format */
"use client";
import NewFooter from "@/components/Footer/NewFooter";
import NewHeader from "@/components/NewHeader/NewHeader";
import SeoSectionOne from "@/components/SeoPage/SeoSectionOne";
import SeoSectionTwo from "@/components/SeoPage/SeoSectionTwo";
// import ServicesInnerSection1 from "@/components/ServicesInner/ServicesInnerSection1";
import LoadingAnimation from "@/util/LoadingAnimation";
import React, { useEffect, useState } from "react";
import {
  eCommerce,
  mobileApps,
  webDev,
  websites,
  branding,
  customDesign,
  uiUx,
  digitalMarketing,
  seo,
  socialMedia,
} from "@/data/NavbarLinks";

function ServicesInner({ params }) {
  const navLinks = [
    { name: "About", path: "/about" },
    { name: "Work", path: "/projects" },
    { name: "Services", path: "/services" },
    { name: "Contact", path: "/contact-us" },
  ];

  const codeLinks = { eCommerce, mobileApps, webDev, websites };
  const craftLinks = { branding, customDesign, uiUx };
  const convertLinks = { seo, socialMedia, digitalMarketing };
  const [data, setData] = useState(null);
  const [loading, setLoading] = useState(true);
  const [dataLoading, setDataLoading] = useState(true);
  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch(
          `https://d331b20430.nxcli.net/chevalapi/wp-json/custom/v1/full_details?slug=android-app-development`
        ); // Replace with your API endpoint
        if (!response.ok) {
          throw new Error("Network response was not ok");
        }
        const result = await response.json();
        setData(result);
        setDataLoading(false);
      } catch (error) {
        console.log("error");
      }
    };

    fetchData();
  }, []);

  useEffect(() => {
    if (!dataLoading) {
      setLoading(false);
    }
  }, [dataLoading]);
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
      <SeoSectionOne
        title={"Android App Development Company in Dubai, UAE"}
        linkText={"Start Your Journey Today "}
      />
      <SeoSectionTwo />

      {/* <ServicesInnerSection1 data={data} /> */}

      <NewFooter />
    </>
  );
}

export default ServicesInner;
