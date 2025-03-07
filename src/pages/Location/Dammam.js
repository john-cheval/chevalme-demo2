/** @format */
"use client";
import NewFooter from "@/components/Footer/NewFooter";
import Section9 from "@/components/Home/Section9";
import LocationFaq from "@/components/Location/Common/Faq";
import GoogleReviews from "@/components/Location/Common/GoogleReviews";
import LocationBottomBanner from "@/components/Location/Common/LocationBottomBanner";
import LocationContact from "@/components/Location/Common/LocationContact";
import LocationServices from "@/components/Location/Common/Services";
import Section1 from "@/components/Location/Dammam/Section1";
import NewHeader from "@/components/NewHeader/NewHeader";
import { faqDammam } from "@/data/Location/FaqData";
import { servicesDammam } from "@/data/Location/servicesData";
import useFetch from "@/hooks/useFetch";
import LoadingAnimation from "@/util/LoadingAnimation";
import React, { useEffect, useState } from "react";

function DammamPage({ navLinks, codeLinks, craftLinks, convertLinks }) {
  const [loading, setLoading] = useState(true);

  const { data: blogsHomePage, loading: blogsLoading } = useFetch(
    "https://d331b20430.nxcli.net/chevalapi/wp-json/wp/v2/posts?_embed"
  );

  const {
    data: googleReviews,
    loading: reviewsLoading,
    googleReviewsSorted,
  } = useFetch(
    "https://d331b20430.nxcli.net/chevalapi/wp-json/custom/v1/google_reviews"
  );

  useEffect(() => {
    if (!reviewsLoading && !blogsLoading) {
      setLoading(false);
    } else {
      setLoading(true);
    }
  }, [blogsLoading, reviewsLoading]);

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
      <Section1 />
      <LocationContact />
      <GoogleReviews data={googleReviews} sortedData={googleReviewsSorted} />
      <LocationServices service={servicesDammam} />
      <Section9 data={blogsHomePage} title={"Insights and Ideas"} />
      <LocationFaq data={faqDammam} />
      <LocationBottomBanner
        title="Transform your online presence with our web design"
        description="Revamp your online presence and make a lasting impression with our
              exceptional web design services. Our skilled designers will create
              a visually stunning, user-friendly website that perfectly
              represents your brand. With a focus on functionality and
              aesthetics, we ensure that your website distinguishes itself from
              the competition and captures attention. Transform your online
              presence today and attract customers with our top-notch web design
              solutions."
      />
      <NewFooter />
    </>
  );
}

export default DammamPage;
