/** @format */
"use client";
import NewFooter from "@/components/Footer/NewFooter";
import Section9 from "@/components/Home/Section9";
import LocationFaq from "@/components/Location/Common/Faq";
import GoogleReviews from "@/components/Location/Common/GoogleReviews";
import LocationBottomBanner from "@/components/Location/Common/LocationBottomBanner";
import LocationContact from "@/components/Location/Common/LocationContact";
import LocationServices from "@/components/Location/Common/Services";
import Section1 from "@/components/Location/Riyadh/Section1";
import NewHeader from "@/components/NewHeader/NewHeader";
import { faqRiyadh } from "@/data/Location/FaqData";
import { servicesRiyadh } from "@/data/Location/servicesData";
import useFetch from "@/hooks/useFetch";
import LoadingAnimation from "@/util/LoadingAnimation";
import React, { useEffect, useState } from "react";

function RiyadhPage({ MainNavLinks, MainFooterLinks }) {
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
      <NewHeader navLinksNew={MainNavLinks} />

      <Section1 />
      <LocationContact />
      <GoogleReviews data={googleReviews} sortedData={googleReviewsSorted} />
      <LocationServices service={servicesRiyadh} />
      <Section9 data={blogsHomePage} title={"Insights and Ideas"} />
      <LocationFaq data={faqRiyadh} />
      <LocationBottomBanner
        title="Transforming your online presence with innovative web design. Are
              you tired of having a dull and outdated website?"
        description="Embrace a remarkable transformation for your online presence by
              leveraging our cutting-edge web design services. Our skilled
              professionals will craft a visually captivating and user-friendly
              website that enthralls your audience and boosts traffic to your
              business.Distinguish yourself from the competition and leave a
              memorable impact with our innovative designs. Elevate your online
              presence now!"
      />
      <NewFooter footer={MainFooterLinks} />
    </>
  );
}

export default RiyadhPage;
