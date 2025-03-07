/** @format */
"use client";
import Image from "next/image";
import React, { useRef } from "react";
import arrowBackward from "../../../../public/arrow_backward_ios.svg";
import arrowForward from "../../../../public/arrow_forward_ios.svg";
import { MaskText } from "@/util/MaskText";
import ChildrenReveal from "@/util/ChildrenReveal";
import gsap from "gsap";
import { useGSAP } from "@gsap/react";
import { usePathname } from "next/navigation";
function Section10({ data }) {
  const pathname = usePathname();
  const duplicatedData = [...data, ...data];
  const swiperRef = useRef();
  useGSAP(() => {
    gsap
      .timeline({
        repeat: -1,
        defaults: {
          ease: "none",
        },
      })
      .fromTo(
        "#clientAnimation",
        {
          x: 0,
        },

        {
          duration: 1.5 * data.length,
          x: `${
            window.matchMedia("(max-width: 640px)").matches
              ? -1 * (10 * data.length)
              : -1 * (16 * data.length)
          }rem`,
        }
      );
  }, []);
  return (
    <div className="relative w-screen h-fit bg-white overflow-x-hidden md:pb-14 pt-8 md:pt-12">
      <div className="relative max-w-screen mx-auto w-full">
        <div
          className={`w-full flex items-center pb-6 ${pathname.includes("/projects") ? " md:pt-12 pt-8" : ""}  h-fit flex-col`}
        >
          <div className="flex items-center justify-center sm:justify-between w-full px-5 sm:px-10 md:px-12 ">
            <MaskText
              text={"Clients"}
              styling="font-sora text-center sm:text-left font-semibold leading-tight text-[#101763] text-3xl sm:text-4xl lg:text-5xl workContainer "
            />
            <ChildrenReveal
              x={0}
              y={20}
              styling="hidden items-center space-x-10"
            >
              <button onClick={() => swiperRef.current?.slidePrev()}>
                <Image
                  src={arrowBackward}
                  className="w-6 object-contain"
                  alt="arrowBackward"
                  width={0}
                  height={0}
                  sizes="100vw"
                />
              </button>
              <button onClick={() => swiperRef.current?.slideNext()}>
                <Image
                  src={arrowForward}
                  className="w-6 object-contain"
                  alt="arrow Forward"
                  width={0}
                  height={0}
                  sizes="100vw"
                />
              </button>
            </ChildrenReveal>
          </div>
          <ChildrenReveal x={20} y={0} styling="relative  w-full">
            <div className="overflow-hidden md:pt-12 w-full">
              <div id="clientAnimation" className="flex ml-[-1rem] mr-[-1rem]">
                {duplicatedData?.map((item, index) => (
                  <div
                    key={index}
                    className="w-[10rem] sm:w-[13rem] ml-[0.4rem] sm:ml-[2rem] mr-[0.4rem] sm:mr-[1.5rem] flex-none h-28-- max-w-full relative  self-center object-center object-contain"
                  >
                    <Image
                      src={item.image}
                      className="object-contain h-auto w-full"
                      alt={`image-${index + 1}`}
                      width={0}
                      height={0}
                      sizes="100vw"
                    />
                  </div>
                ))}
              </div>
            </div>
          </ChildrenReveal>
        </div>
      </div>
    </div>
  );
}

export default Section10;
