"use client";
import React, { useEffect, useState } from "react";
import Image from "next/image";
import { ArrowRight } from "lucide-react";
import Link from "next/link";

const ServiceInnerContent = ({ services, serviceHeading }) => {
  const [isNavVisible, setIsNavVisible] = useState(true);
  const [prevScrollY, setPrevScrollY] = useState(0);
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const currentScrollY = window.scrollY;
      if (currentScrollY > prevScrollY) {
        setIsNavVisible(false);
      } else {
        setIsNavVisible(true);
      }
      setPrevScrollY(currentScrollY);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, [prevScrollY]);

  useEffect(() => {
    const checkScreenSize = () => setIsMobile(window.innerWidth < 768);
    checkScreenSize();
    window.addEventListener("resize", checkScreenSize);
    return () => window.removeEventListener("resize", checkScreenSize);
  }, []);

  return (
    <div className="px-5 sm:px-10 md:px-12">
      <div className="bg-black-- rounded-tr-[30px] rounded-tl-[30px] relative ">
        <div className="md:pt-12-- pt-9--">
          <h2
            className="text-[#101763] font-sora text-lg md:text-3xl lg:text-4xl leading-[135%] tracking-[-0.4px] font-semibold mb-5 md:mb-12 text-left  pinned-section sticky top-[12vh] md:pt-12  pt-9"
            style={{ top: isNavVisible ? "8vh  " : "0" }}
          >
            {serviceHeading}
          </h2>
          <div className="section-items relative min-h-[200vh]">
            {services?.map((item, index) => {
              return (
                <div
                  className={`section-item sticky ${
                    isMobile ? "top-[10vh]" : "top-[10%]"
                  } md:top-[20%]`}
                  key={index + 1}
                  style={{
                    top: isMobile
                      ? isNavVisible
                        ? "20vh"
                        : "10vh"
                      : isNavVisible
                        ? "25%"
                        : "20%",
                  }}
                >
                  {/* Desktop */}
                  <div
                    className={`hidden md:grid grid-cols-12 h-[60vh] rounded-tr-[60px] rounded-tl-[60px] overflow-hidden gap-x-3 bg-[#F1F1F1] ${index !== 0 && "-mt-14"}`}
                    // style={{ background: style.bg }}
                  >
                    <div
                      className={`col-span-8 pl-14 lg:pl-28 pt-14 lg:pt-28 pb-20 space-y-3 lg:space-y-5 text-black`}
                    >
                      <h3 className="font-sora text-lg  text-start md:text-3xl lg:text-[40px] font-normal leading-[135%] tracking-[-0.4px] ">
                        {item?.title}
                      </h3>
                      <p
                        dangerouslySetInnerHTML={{ __html: item?.description }}
                        className="font-satoshi text-base leading-[154%] lg:max-w-[80%] space-y-2 lg:space-y-3 mb-9--"
                      />
                      {item?.link && (
                        <Link
                          href={item?.link}
                          className="text-[#d81100] inline-block"
                        >
                          <ArrowRight size={40} />
                        </Link>
                      )}
                    </div>

                    <div className="col-span-4 h-fit flex justify-center items-center bg-gray-800">
                      {item?.image && (
                        <Image
                          src={item?.image}
                          alt={item?.title}
                          className="h-full w-full object-cover"
                          width={0}
                          height={0}
                          sizes="100vw"
                        />
                      )}
                    </div>
                  </div>

                  {/* Mobile */}
                  <div
                    className={`flex md:hidden h-fit bg-[#f1f1f1] ${index % 2 === 0 ? "flex-col" : "flex-col-reverse"}`}
                    // style={{ background: style.bg }}
                  >
                    {index % 2 !== 0 ? (
                      <>
                        <div className="h-[300px] flex justify-center items-center bg-gray-800">
                          {item?.image && (
                            <Image
                              src={item.image}
                              alt={item.title}
                              className="h-full w-full object-cover"
                              width={500}
                              height={500}
                              sizes="100vw"
                            />
                          )}
                        </div>
                        <div
                          className={`py-7 px-7 text-black space-y-4 md:space-y-0`}
                        >
                          <h3 className="font-sora text-base sm:text-xl text-start font-normal leading-[135%] tracking-[-0.4px] ">
                            {item?.title}
                          </h3>
                          <p
                            dangerouslySetInnerHTML={{
                              __html: item?.description,
                            }}
                            className="font-satoshi text-[14px] leading-[154%] space-y-2 mb-9--"
                          />

                          {item?.link && (
                            <Link
                              href={item?.link}
                              className="text-[#d81100] mx-auto inline-block"
                            >
                              <ArrowRight size={40} />
                            </Link>
                          )}
                        </div>
                      </>
                    ) : (
                      <>
                        <div
                          className={`py-7 px-7 text-black  space-y-4 md:space-y-0`}
                        >
                          <h3 className="font-sora text-base sm:text-xl jtext-start font-normal leading-[135%] tracking-[-0.4px] capitalize">
                            {item?.title}
                          </h3>
                          <p
                            dangerouslySetInnerHTML={{
                              __html: item?.description,
                            }}
                            className="font-satoshi text-[14px] leading-[154%] space-y-2 mb-9"
                          />
                          <ArrowRight size={40} className="mx-auto" />
                        </div>
                        <div className="h-[300px] flex justify-center items-center bg-gray-800">
                          {item?.image && (
                            <Image
                              src={item.image}
                              alt={item.title}
                              className="h-full w-full object-cover"
                              width={500}
                              height={500}
                              sizes="100vw"
                            />
                          )}
                        </div>
                      </>
                    )}
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </div>
  );
};

export default ServiceInnerContent;
