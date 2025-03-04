/** @format */
"use client";
import NewFooter from "@/components/Footer/NewFooter";
import Section9 from "@/components/Home/Section9";
import LocationFaq from "@/components/Location/Common/Faq";
import GoogleReviews from "@/components/Location/Common/GoogleReviews";
import LocationContact from "@/components/Location/Common/LocationContact";
import LocationServices from "@/components/Location/Common/Services";
import Section1 from "@/components/Location/SaudiArabia/Section1";
import NewHeader from "@/components/NewHeader/NewHeader";
import { faqSaudi } from "@/data/Location/FaqData";
import { servicesSaudi } from "@/data/Location/servicesData";
import useFetch from "@/hooks/useFetch";
import LoadingAnimation from "@/util/LoadingAnimation";
import React, { useEffect, useState } from "react";

function SaudiArabiaPage() {
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
      <NewHeader />
      <Section1 />
      <LocationContact />
      <GoogleReviews data={googleReviews} sortedData={googleReviewsSorted} />
      <LocationServices service={servicesSaudi} />
      <Section9 data={blogsHomePage} title={"Insights and Ideas"} />
      <LocationFaq data={faqSaudi} />
      <NewFooter />
    </>
  );
}

export default SaudiArabiaPage;
