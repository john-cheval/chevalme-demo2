/** @format */
"use client";

const NewHeader = dynamic(() => import("@/components/NewHeader/NewHeader"));
const NewFooter = dynamic(() => import("@/components/Footer/NewFooter"));
const ServiceListNew = dynamic(
  () => import("@/components/Services/NewService/ServiceListNew")
);
const ServiceHeader = dynamic(
  () => import("@/components/Services/ServiceHeader")
);
import useFetch from "@/hooks/useFetch";
import LoadingAnimation from "@/util/LoadingAnimation";
import dynamic from "next/dynamic";
import { useEffect, useState } from "react";

function ServicePage() {
  const [loading, setLoading] = useState(true);

  const { data, loading: dataLoading } = useFetch(
    "https://d331b20430.nxcli.net/chevalapi/wp-json/custom/v1/services"
  );

  const { data: serviceHeader, loading: serviceLoading } = useFetch(
    "https://d331b20430.nxcli.net/chevalapi/wp-json/custom/v1/full_details?ID=98"
  );

  useEffect(() => {
    if (!dataLoading && !serviceLoading) {
      setLoading(false);
    } else {
      setLoading(true);
    }
  }, [dataLoading, , serviceLoading]);

  return loading ? (
    <>
      <LoadingAnimation />
    </>
  ) : (
    <>
      <NewHeader />
      <ServiceHeader data={serviceHeader} />
      <ServiceListNew data={data} />
      <NewFooter />
    </>
  );
}

export default ServicePage;
