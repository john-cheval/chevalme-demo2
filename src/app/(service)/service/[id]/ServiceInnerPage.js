/** @format */
"use client";
import React, { useEffect, useState } from "react";
import useFetch from "@/hooks/useFetch";
import LoadingAnimation from "@/util/LoadingAnimation";
import dynamic from "next/dynamic";

const NewHeader = dynamic(() => import("@/components/NewHeader/NewHeader"), {
  ssr: false,
});
const NewFooter = dynamic(() => import("@/components/Footer/NewFooter"), {
  ssr: false,
});
const ServiceAccordion = dynamic(
  () => import("@/components/ServicesInner/NewServiceInner/ServiceAccordion"),
  { ssr: false }
);
const ServiceInnerContent = dynamic(
  () =>
    import("@/components/ServicesInner/NewServiceInner/ServiceInnerContent"),
  { ssr: false }
);
const ServiceInnerSwipper = dynamic(
  () =>
    import("@/components/ServicesInner/NewServiceInner/ServiceInnerSwipper"),
  { ssr: false }
);
const ServiceInnerTechStack = dynamic(
  () =>
    import("@/components/ServicesInner/NewServiceInner/ServiceInnerTechStack"),
  { ssr: false }
);
const ServiceSectionTwo = dynamic(
  () => import("@/components/ServicesInner/NewServiceInner/ServiceSectionTwo"),
  { ssr: false }
);
const ContactForm = dynamic(
  () => import("@/components/Contact/NewContact/ContactForm"),
  { ssr: false }
);

function ServicesInnerPage({ data, services, MainNavLinks, MainFooterLinks }) {
  const [split, setSplit] = useState(null);
  const [gallery, setGallery] = useState(null);
  const [galleryLoading, setGalleryLoading] = useState(true);

  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchGallery = async () => {
      try {
        const response = await fetch(
          "https://d331b20430.nxcli.net/chevalapi/wp-json/custom/v1/full_details?ID=8"
        ); // Replace with your API endpoint
        if (!response.ok) {
          throw new Error("Network response was not ok");
        }
        const result = await response.json();
        setGallery(result);
        setGalleryLoading(false);
      } catch (error) {
        console.log("error");
      }
    };
    fetchGallery();
  }, []);

  useEffect(() => {
    if (!galleryLoading) {
      setSplit(gallery.show_off_gallery.length / 2);
      setLoading(false);
    }
  }, [galleryLoading]);
  return loading ? (
    <>
      <LoadingAnimation />
    </>
  ) : (
    <>
      <NewHeader navLinksNew={MainNavLinks} />

      {data?.services_slider && (
        <ServiceInnerSwipper slides={data?.services_slider} />
      )}
      <ServiceSectionTwo
        title={data?.small_sub_heading}
        description={data?.short_description}
        heading={data?.streamline_heading}
        fullDescription={data?.streamline_left_area}
      />

      {data?.service_list && (
        <ServiceInnerContent
          services={data?.service_list}
          serviceHeading={data?.web_development_heading}
        />
      )}

      {data?.web_development_process_list && (
        <ServiceAccordion
          title={data?.web_development_process_heading}
          image={data?.web_development_process_image}
          accoridion={data?.web_development_process_list}
        />
      )}

      {data?.web_development_technology_list && (
        <ServiceInnerTechStack
          title={data?.web_development_technology_heading}
          stacks={data?.web_development_technology_list}
        />
      )}

      <ContactForm title="We are happy to help you" services={services} />

      <NewFooter footer={MainFooterLinks} />
    </>
  );
}

export default ServicesInnerPage;
