/** @format */
"use client";

const NewHeader = dynamic(() => import("@/components/NewHeader/NewHeader"), {
  ssr: false,
});
const ContactForm = dynamic(
  () => import("@/components/Contact/NewContact/ContactForm"),
  {
    ssr: false,
  }
);
const ContactMiddleSection = dynamic(
  () => import("@/components/Contact/NewContact/ContactMiddleSection"),
  {
    ssr: false,
  }
);
const ContactTopSection = dynamic(
  () => import("@/components/Contact/NewContact/ContactTopSection"),
  {
    ssr: false,
  }
);
const NewFooter = dynamic(() => import("@/components/Footer/NewFooter"), {
  ssr: false,
});

import useFetch from "@/hooks/useFetch";
import LoadingAnimation from "@/util/LoadingAnimation";
import dynamic from "next/dynamic";

function ContactPage({
  navLinks,
  codeLinks,
  craftLinks,
  convertLinks,
  services,
}) {
  const { data: servicess, loading } = useFetch(
    "https://d331b20430.nxcli.net/chevalapi/wp-json/custom/v1/services"
  );

  return loading ? (
    <>
      <LoadingAnimation />
    </>
  ) : (
    <>
      <div className="bg-white m-0 p-0">
        {/* <NewHeader
          navLinks={navLinks}
          codeLinks={codeLinks}
          craftLinks={craftLinks}
          convertLinks={convertLinks}
        /> */}
        <ContactTopSection />
        <ContactMiddleSection />
        <ContactForm services={services} title="Start a conversation." />
        <NewFooter />
      </div>
    </>
  );
}

export default ContactPage;
