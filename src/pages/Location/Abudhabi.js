/** @format */
"use client";
import NewFooter from "@/components/Footer/NewFooter";
import Section9 from "@/components/Home/Section9";
import Section1 from "@/components/Location/AbuDhabi/Section1";
import LocationFaq from "@/components/Location/Common/Faq";
import GoogleReviews from "@/components/Location/Common/GoogleReviews";
import LocationContact from "@/components/Location/Common/LocationContact";
import LocationServices from "@/components/Location/Common/Services";
import NewHeader from "@/components/NewHeader/NewHeader";
import { faqAbuDhabi } from "@/data/Location/FaqData";
import { servicesAbuDhabi } from "@/data/Location/servicesData";
import useFetch from "@/hooks/useFetch";
import LoadingAnimation from "@/util/LoadingAnimation";
import React, { useEffect, useState } from "react";

function AbuDhabiPage({ navLinks, codeLinks, craftLinks, convertLinks }) {
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
      <LocationServices service={servicesAbuDhabi} />
      <Section9 data={blogsHomePage} title={"Insights and Ideas"} />
      <LocationFaq data={faqAbuDhabi} />
      <NewFooter />
    </>
  );
}

export default AbuDhabiPage;
