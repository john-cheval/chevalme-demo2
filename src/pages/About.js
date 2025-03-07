/** @format */
"use client";
const AboutBanner = dynamic(
  () => import("@/components/About/NewAbout/AboutBanner"),
  { ssr: false }
);
const AboutClients = dynamic(
  () => import("@/components/About/NewAbout/AboutClients"),
  { ssr: false }
);
const AboutCTA = dynamic(() => import("@/components/About/NewAbout/AboutCTA"), {
  ssr: false,
});
const AboutHeader = dynamic(
  () => import("@/components/About/NewAbout/AboutHeader"),
  { ssr: false }
);
const VerticalStackCards = dynamic(
  () => import("@/components/About/NewAbout/VerticalStackCards"),
  { ssr: false }
);
const NewFooter = dynamic(() => import("@/components/Footer/NewFooter"), {
  ssr: false,
});
const NewHeader = dynamic(() => import("@/components/NewHeader/NewHeader"), {
  ssr: false,
});
import useFetch from "@/hooks/useFetch";
import LoadingAnimation from "@/util/LoadingAnimation";
import dynamic from "next/dynamic";
import React, { useEffect, useState } from "react";

function AboutPage({
  aboutData,
  codeLinks,
  craftLinks,
  convertLinks,
  navLinks,
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
      {/* <NewHeader
        navLinks={navLinks}
        codeLinks={codeLinks}
        craftLinks={craftLinks}
        convertLinks={convertLinks}
      /> */}
      {aboutData && (
        <div className="bg-about-member-gradient">
          <AboutHeader
            content={aboutData?.short_description}
            heading={aboutData?.sub_heading}
          />
          <AboutBanner
            bannerData={aboutData?.count_down_list}
            bannerVideo={aboutData?.about_short_video}
            bannerPopupVideo={aboutData?.about_video}
          />
          <VerticalStackCards cardData={aboutData} />
          <AboutCTA
            ctaHeading={aboutData?.culture_heading}
            description={aboutData?.culture_description}
            VideoUrl={aboutData?.culture_image}
          />
        </div>
      )}

      {clients && <AboutClients clientData={clients} />}

      <NewFooter />
    </>
  );
}

export default AboutPage;
