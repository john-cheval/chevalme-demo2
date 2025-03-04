import React from "react";
import arrow_link from "../../../../public/arrow_outward.svg";
import Image from "next/image";
import { useRouter } from "next/navigation";

const BrandHeaderNew = ({ data }) => {
  const router = useRouter();

  console.log(data);

  return (
    <div
      className={`grid grid-cols-12  ${data?.sub_heading ? "border-b-[#101763] border-b-[1px] pb-10 lg:pt-4 xl:pt-12--  lg:space-y-1  space-y-3" : ""} `}
    >
      <div className="xl:col-span-4 lg:col-span-5 col-span-12 space-y-2-- lg:space-y-4-- xl:space-y-0-- ">
        <h1
          className="capitalize font-sora tracking-tighter   leading-tight text-[#101763] text-3xl sm:text-4xl md:text-5xl font-semibold text-center sm:text-start"
          style={{
            lineHeight: 1.2,
          }}
        >
          {data?.home_title ? data?.home_title : data?.post_title}
        </h1>
      </div>

      {data?.sub_heading && (
        <div className="xl:col-span-8 lg:col-span-7 space-y-4 md:space-y-7 xl:space-y-10 col-span-12">
          <p
            // style={{
            //   lineHeight: 1.2,
            // }}
            dangerouslySetInnerHTML={{
              __html: data?.sub_heading,
            }}
            className="font-satoshi text-lg md:text-[20px] text-center  sm:text-start lg:text-[25px] text-[#101763] font-medium leading-[140%]  "
          ></p>
          <div className="flex sm:flex-row flex-col lg:justify-between flex-wrap  items-center gap-5 ">
            {data?.projects_category && (
              <div className="flex flex-col sm:flex-row  space-x-6">
                <p className="text-[#101763] text-xl text-center md:text-start font-normal leading-[154%] mb-2 md:mb-0">
                  Expertise
                </p>
                <div className="h-fit  w-fit max-w-[750px] justify-center sm:justify-start  flex  flex-row flex-wrap items-center gap-2 ">
                  {data?.projects_category.map((category, index) => (
                    <button
                      key={index}
                      className="font-sora text-[14px]  transition-colors   py-2 px-4 w-fit cursor-default    text-[#101763] rounded-3xl border border-[#101764] hover:border-[#d81100] hover:text-[#d81100] duration-300"
                    >
                      {category.name}
                    </button>
                  ))}{" "}
                </div>
              </div>
            )}

            {data?.live_website && (
              <div
                onClick={() => router.push(`${data?.live_website}`)}
                className=" group cursor-pointer flex flex-row space-x-6 items-center h-fit pb-3 border-b border-b-[#101763]"
              >
                <p className="font-satoshi text-base md:text-lg xl:text-xl text-[#101763]">
                  Live Website
                </p>
                <Image
                  src={arrow_link}
                  className="w-3 group-hover:rotate-45 transition-all duration-300 object-contain"
                  alt="arrow_link"
                />
              </div>
            )}
          </div>
        </div>
      )}
    </div>
  );
};

export default BrandHeaderNew;
