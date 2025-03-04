"use client";
const NewService = dynamic(() => import("@/components/Home/NewService"), {
  ssr: false,
});

const Section2 = dynamic(() => import("@/components/Home/Section2"), {
  ssr: false,
});
const Section4 = dynamic(() => import("@/components/Home/Section4"), {
  ssr: false,
});
const Section5 = dynamic(() => import("@/components/Home/Section5"), {
  ssr: false,
});
const Section8 = dynamic(() => import("@/components/Home/Section8"), {
  ssr: false,
});
const Section9 = dynamic(() => import("@/components/Home/Section9"), {
  ssr: false,
});
const Section10 = dynamic(() => import("@/components/Home/Section10"), {
  ssr: false,
});
const Section11 = dynamic(() => import("@/components/Home/Section11"), {
  ssr: false,
});

import Section1 from "@/components/Home/Section1";
import NewHeader from "@/components/NewHeader/NewHeader";
import NewFooter from "@/components/Footer/NewFooter";
import useFetch from "@/hooks/useFetch";
import LoadingAnimation from "@/util/LoadingAnimation";
import dynamic from "next/dynamic";
import { useEffect, useState } from "react";

export default function HomePage(/* homeContent */) {
  const [split, setSplit] = useState(null);
  const [loading, setLoading] = useState(true);

  const { data: homeContent, loading: dataLoading } = useFetch(
    "https://d331b20430.nxcli.net/chevalapi/wp-json/custom/v1/homepage_details?ID=8"
  );

  // Google Reviews Section
  const {
    data: googleReviews,
    loading: reviewsLoading,
    googleReviewsSorted,
  } = useFetch(
    "https://d331b20430.nxcli.net/chevalapi/wp-json/custom/v1/google_reviews"
  );

  //  Works Section
  const { data: worksHomePage, loading: worksLoading } = useFetch(
    "https://d331b20430.nxcli.net/chevalapi/wp-json/custom/v1/homeprojects"
  );

  //  Services Section
  const { data: services, loading: servicesLoading } = useFetch(
    "https://d331b20430.nxcli.net/chevalapi/wp-json/custom/v1/services"
  );

  //  Gallery Section
  const { data: gallery, loading: galleryLoading } = useFetch(
    "https://d331b20430.nxcli.net/chevalapi/wp-json/custom/v1/full_details?ID=8"
  );

  //  Blogs Section
  const { data: blogsHomePage, loading: blogsLoading } = useFetch(
    "https://d331b20430.nxcli.net/chevalapi/wp-json/wp/v2/posts?_embed"
  );

  //  Client Section
  const { data: clients, loading: clientLoading } = useFetch(
    "https://d331b20430.nxcli.net/chevalapi/wp-json/custom/v1/all_clients"
  );

  useEffect(() => {
    if (
      !reviewsLoading &&
      !worksLoading &&
      // !caseStudiesLoading &&
      !galleryLoading &&
      !servicesLoading &&
      !clientLoading &&
      // !footerLoading &&
      !blogsLoading /* &&
      !dataLoading */
    ) {
      setSplit(gallery?.show_off_gallery.length / 2);
      setLoading(false);
    }
  }, [
    reviewsLoading,
    worksLoading,
    // caseStudiesLoading,
    servicesLoading,
    galleryLoading,
    clientLoading,
    blogsLoading,
    // footerLoading,
    // dataLoading,
  ]);

  return loading ? (
    <>
      <LoadingAnimation />
    </>
  ) : (
    <>
      <NewHeader />
      {homeContent && homeContent.web_title && (
        <Section1
          title={homeContent.web_title}
          subTitle={homeContent.web_sub_title}
          linkText={homeContent.web_link_text}
          link={homeContent.web_link}
          fullVideo={homeContent.web_video}
          shortVideo={homeContent.web_video_short}
        />
      )}

      <Section2
        title={homeContent?.service_heading}
        description={homeContent?.service_description}
        countdown={homeContent?.service_countdown}
      />
      <Section4 cardData={homeContent?.home_section} />
      <Section5 data={worksHomePage} />
      <NewService data={services} title={homeContent?.services_heading} />
      <Section8 data={gallery} split={split} />
      <Section11 data={googleReviews} sortedData={googleReviewsSorted} />
      <Section9 data={blogsHomePage} title={homeContent?.blog_heading} />
      <Section10 data={clients} />
      <NewFooter />
    </>
  );
}
