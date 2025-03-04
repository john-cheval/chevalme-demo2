import React from "react";

const ServiceSectionTwo = ({
  title,
  description,
  heading,
  fullDescription,
}) => {
  return (
    <div className="lg:py-16 md:py-10 py-6 px-5 sm:px-10 md:px-12  ">
      <div className="md:space-y-10 ">
        <div className="relative z-10 grid gap-x-[9.5rem]  space-y-2 grid-cols-1 lg:grid-cols-2 lg:space-y-0">
          <h1
            className="text-[#101763] font-sora text-xl sm:text-2xl md:text-start md:text-3xl  xl:text-[40px] font-semibold leading-[135%] tracking-[-0.4px]"
            style={{
              lineHeight: "1.3",
            }}
          >
            {title}
          </h1>
          <p
            dangerouslySetInnerHTML={{ __html: description }}
            className="text-[#101763] font-sora text-sm md:text-base font-normal leading-[187%]   "
          />
        </div>

        <div className="relative z-10 grid grid-cols-1 gap-x-[9.5rem]  lg:grid-cols-2 space-y-2 lg:space-y-0">
          <h1
            className="text-[#101763] font-sora text-xl sm:text-2xl md:text-start md:text-3xl xl:text-[40px] font-semibold leading-[135%]  tracking-[-0.4px]"
            style={{
              lineHeight: "1.3",
            }}
          >
            {heading}
          </h1>
          <p
            dangerouslySetInnerHTML={{ __html: fullDescription }}
            className="text-[#101763] font-sora text-sm md:text-base font-normal leading-[187%] space-y-4 lg:space-y-6"
          />
        </div>
      </div>
    </div>
  );
};

export default ServiceSectionTwo;
