/** @format */
import Image from "next/image";
import React from "react";
import ScreenShotList from "../Branding/ScreenShotList";
import SectionList from "../Branding/SectionList";
import BrandHeaderNew from "../Branding/BrandHeaderNew";

function WorkInnerSection1({ data }) {
  const isVideo = (url) => url?.endsWith(".mp4");
  return (
    <div className="relative w-screen h-fit bg-[#ececec]-- overflow-x-hidden">
      <div className="w-full space-y-7 md:space-y-10 flex-- items-center-- pt-24 md:pt-[7rem] sm:pt-28 pb-6 md:pb-10 xl:pb-16  h-fit flex-col-- px-5 sm:px-10 md:px-12">
        {data?.banner_image && isVideo(data?.banner_image) ? (
          <video
            autoPlay
            muted
            playsInline
            loop
            id="video"
            className="rounded-[1rem] col-span-1 md:col-span-2 w-full h-full object-cover "
          >
            <source src={data?.banner_image} type="video/mp4" />
            Your browser does not support the video tag.
          </video>
        ) : (
          <Image
            src={data?.banner_image}
            overrideSrc="/Work/work1.png"
            width={0}
            height={0}
            sizes="100vw"
            className="rounded-[1rem]  bg-transparent w-full h-auto object-contain-- max-h-[622px]-- xl:h-auto--"
            alt={data?.post_title || "WorkImage"}
          />
        )}

        <BrandHeaderNew data={data} />

        {data?.screenshot_list && (
          <ScreenShotList data={data?.screenshot_list} />
        )}

        {data?.section_list && (
          <SectionList data={data?.section_list} ID={data?.ID} />
        )}
      </div>
    </div>
  );
}

export default WorkInnerSection1;
