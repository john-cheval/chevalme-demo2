import React from "react";

import Image from "next/image";

const ServiceInnerTechStack = ({ title, stacks }) => {
  return (
    <div className="px-5 sm:px-10 md:px-12">
      <h2 className="text-[#101763] font-sora text-xl md:text-4xl leading-[135%] tracking-[-0.4px] md:w-[741px] mt-6 md:mt-12 lg:mt-24 mb-5 lg:mb-10 ">
        {title}
      </h2>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 border border-[#CFCFCF]">
        {stacks?.map((item, index) => (
          <div key={index} className="border border-[#CFCFCF] flex   h-[328px]">
            {item?.image ? (
              <Image
                src={item?.image}
                alt={item?.title}
                className="w-full h-full object-cover"
                width={0}
                height={0}
                sizes="100vw"
              />
            ) : (
              <div className="flex flex-col items-start justify-center ml-10 mt-12">
                {item?.icon && (
                  <div className="">
                    <Image
                      src={item?.icon}
                      alt={item?.title}
                      className="w-[58px] h-[58px] mb-4 xl:mb-7"
                      height={0}
                      width={0}
                      sizes="100vw"
                    />
                  </div>
                )}
                {item?.title && (
                  <div className="font-sora text-3xl font-normal leding-[135%] tracking-[-0.3px] w-[80%] xl:w-[238px]">
                    {item?.title}
                  </div>
                )}
                {item?.description && (
                  <div className="font-satoshi text-[#191919] w-[80%] xl:w-[259px] text-base leading-[154%]">
                    {item?.description}
                  </div>
                )}
              </div>
            )}
          </div>
        ))}
      </div>
    </div>
  );
};

export default ServiceInnerTechStack;
