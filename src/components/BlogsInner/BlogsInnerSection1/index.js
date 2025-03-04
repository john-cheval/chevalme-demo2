/** @format */
"use client";
import Image from "next/image";
import React, { useRef } from "react";

import arrowBackward from "../../../../public/arrow_backward_ios.svg";
import arrowForward from "../../../../public/arrow_forward_ios.svg";
import { format } from "date-fns";
function BlogsInnerSection1({ data }) {
  const swiperRef = useRef();

  return (
    <div className="relative w-screen h-fit pb-12 pt-36 bg-[#F6F6F4] overflow-x-hidden">
      <div className="relative flex flex-col items-center h-fit px-5 sm:px-10 md:px-12 w-full">
        <div className="relative flex-col space-y-14 flex h-fit items-center justify-center w-full  text-black">
          <div className="w-full relative h-[528px] h-auto-- ">
            <Image
              src={data?.image}
              fill={true}
              className=" object-cover  object-center  rounded-[2rem] w-full-- h-auto--"
              alt={data?.post_title}
            />
            <div className="flex flex-col font-satoshi absolute bottom-0 h-full w-full justify-end bg-gradient-to-b from-50% from-transparent to-[#000] rounded-[2rem] px-10 py-10 text-white">
              <span className="text-[10px] sm:text-xs md:text-sm  font-sora">
                {" "}
                {format(new Date(data?.post_date), "EEEE dd MMM")}
              </span>
            </div>
          </div>
          <div className="w-full  px-10 h-fit flex flex-col space-y-8 sm:space-y-10 md:space-y-14">
            <h2 className="font-satoshi font-semibold text-3xl">
              {data?.post_title}
            </h2>
            <div className="flex  w-full space-y-10 flex-col font-satoshi paragraphText-Size">
              <div
                dangerouslySetInnerHTML={{ __html: data?.post_content }}
              ></div>
            </div>
          </div>
        </div>

        <div className="flex w-full items-center py-10 justify-between">
          <button onClick={() => swiperRef.current?.slidePrev()}>
            <Image
              src={arrowBackward}
              className="w-6 object-contain"
              alt="arrow_backward"
            />
          </button>
          <button onClick={() => swiperRef.current?.slideNext()}>
            <Image
              src={arrowForward}
              className="w-6 object-contain"
              alt="arrow_forward"
            />
          </button>
        </div>
      </div>
    </div>
  );
}

export default BlogsInnerSection1;
