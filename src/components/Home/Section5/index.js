/** @format */
"use client";
import React, { useEffect, useState } from "react";
import gsap, { Power3 } from "gsap";
import { useGSAP } from "@gsap/react";
import ScrollTrigger from "gsap/dist/ScrollTrigger";
import Image from "next/image";
import arrowForward from "../../../../public/arrow_forward.png";
import { useRouter } from "next/navigation";
import Buttons from "@/components/Buttons";
import DarkButton from "@/components/Buttons/DarkButton";
import WorkMobile from "./WorkMobile";
function Section5({ data }) {
  const isVideo = (url) => url?.endsWith(".mp4");
  const router = useRouter();
  const [activeCard, setActiveCard] = useState(null);
  const [isScrolling, setIsScrolling] = useState(false);

  useGSAP(() => {
    gsap.registerPlugin(ScrollTrigger);
    let pinnedWorksItems = document.getElementById("pinnedWorksItems");
    let workInnerHeight = pinnedWorksItems.children[0].clientHeight;

    let workTextBigger = gsap.timeline({
      scrollTrigger: {
        trigger: "#pinnedWorkSection",
        pin: true,
        scrub: true,
        start: "top top",
        // markers: true,
        end: "+=400%",
      },
    });
    workTextBigger
      .from("#worksText", {
        ease: Power3.easeOut,
        scale: 150,
      })
      .to("#pinnedWorks", {
        y: -window.innerHeight,
      })
      .to(pinnedWorksItems.children[1], {
        y: -(workInnerHeight + 20),
      })
      .to(
        pinnedWorksItems.children[2],
        {
          y: -(workInnerHeight + 20) * 2,
        },
        "<65%"
      )
      .to(
        pinnedWorksItems.children[3],
        {
          y: -(workInnerHeight + 20) * 3,
        },
        "<65%"
      )
      .to(
        pinnedWorksItems.children[4],
        {
          y: -(workInnerHeight + 20) * 4,
        },
        "<65%"
      )
      .to("#pinnedWorks", {
        delay: 0.2,
      });
  }, []);

  const handleCardClick = (index) => {
    setActiveCard(index);
  };

  const handleScroll = () => {
    if (activeCard !== null) {
      setIsScrolling(true);
      setTimeout(() => {
        setActiveCard(null);
        setIsScrolling(false);
      }, 200);
    }
  };

  useEffect(() => {
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, [activeCard]);

  return (
    <>
      <div
        id="pinnedWorkSection"
        className="relative hidden md:block w-screen h-[580px] md:h-[750px] bg-[#F6F6F4] overflow-hidden-- overflow-visible"
      >
        <div className="flex items-center justify-center w-full overflow-hidden h-[100dvh]">
          <h1
            id="worksText"
            className="font-semibold text-[#D81100] font-sora tracking-tighter text-[90px] sm:text-[130px] md:text-[180px] lg:text-[200px]"
          >
            Works
          </h1>
        </div>
        <div
          id="pinnedWorks"
          className="relative pt-8 md:pt-12 xl:pt-14 h-fit w-screen overflow-hidden "
        >
          <div
            id="pinnedWorksItems"
            className="flex flex-col relative space-y-6 sm:space-y-10  px-5 sm:px-10 md:px-12  mx-auto max-w-screen"
          >
            {data &&
              Object.keys(data)?.map(
                (key, index) =>
                  index === 0 && (
                    <div
                      key={index}
                      onClick={() => handleCardClick(index)}
                      style={{
                        zIndex: activeCard === index ? index + 100 : index + 10,
                      }}
                      className="w-full h-[550px]  md:h-[550px] mt-5 sm:mt-0 relative   sm:bg-transparent bg-[#F6F6F4] rounded-[30px]  overflow-hidden"
                    >
                      <div className="sm:h-full  w-full relative h-1/2 sm:absolute sm:top-0 sm:right-0 object-cover ">
                        {isVideo(data[key]?.home_image) ? (
                          <video
                            autoPlay
                            loop
                            muted
                            playsInline
                            controlsList="nodownload"
                            className="object-center object-cover  rounded-[30px] w-full h-full"
                          >
                            <source
                              src={"./Home/work/card1.mp4"}
                              type="video/mp4"
                            />
                            Your browser does not support the video tag.
                          </video>
                        ) : (
                          <Image
                            src={data[key]?.home_image}
                            fill={true}
                            className="object-cover rounded-[30px]"
                            alt={data[key].home_title.split(" ")[0] || "Work"}
                          />
                        )}
                        <div className="absolute inset-0"></div>
                      </div>

                      <div className="flex flex-col py-4  sm:pt-[40px] md:pt-[60px] px-2 sm:px-10 lg:px-16 sm:justify-center  md:justify-normal md:items-start items-center   h-1/2 sm:h-full sm:right-0 relative sm:absolute sm:top-0 w-full md:w-3/4 lg:w-2/3 xl:w-1/2 z-20">
                        <h1 className="font-sora   -ml-[12px]  text-3xl sm:text-5xl md:text-6xl lg:text-7xl  2xl:text-[5.3rem] tracking-tighter text-black sm:text-white font-extralight mb-3 md:mb-5">
                          {data[key].home_title.split(" ")[0] +
                            " " +
                            (data[key].home_title.split(" ")[1]
                              ? " " + data[key].home_title.split(" ")[1]
                              : "")}
                        </h1>

                        {data[key]?.projects_category && (
                          <div className=" flex-row space-x-2 sm:space-x-3 md:space-x-4 sm:flex hidden mb-8">
                            {data[key]?.projects_category?.map(
                              (category, index) =>
                                index < 3 && (
                                  <div
                                    className="font-sora text-[6px] sm:text-[8px] md:text-[10px] uppercase py-2.5 px-6 w-fit min-w-[125px] text-center border border-white sm:bg-transparent bg-white text-black sm:text-white rounded-3xl"
                                    key={index}
                                  >
                                    {category.name}
                                  </div>
                                )
                            )}
                          </div>
                        )}

                        <p
                          style={{ lineHeight: 1.3 }}
                          className=" font-sora  font-extralight  text-base sm:text-2xl  md:text-3xl lg:text-[32px] xl:text-[40px] sm:tracking-[-1.76px]  leading-[121%] text-center sm:text-left text-black sm:text-white mb-3 sm:mb-5 md:mb-8  xl:mb-11  "
                        >
                          {data[key]?.home_description}
                        </p>
                        <div
                          onClick={() =>
                            router.push(`/projects/${data[key]?.post_name}`)
                          }
                          className="w-full hidden   h-fit pb-4 sm:pb-5 border-y group  cursor-pointer border-black sm:border-white border-dotted md:flex items-center justify-center sm:justify-between"
                        >
                          <Buttons
                            link={`/projects/${data[key]?.post_name}`}
                            text={"View Case Study"}
                          />
                          <Image
                            src={arrowForward}
                            className="sm:block mt-5 hidden w-5 md:w-6 group-hover:-rotate-45 transition-all invert duration-500  object-contain items-center"
                            alt="arrow forward"
                          />
                        </div>
                        <div
                          onClick={() =>
                            router.push(`/projects/${data[key]?.post_name}`)
                          }
                          className="w-full md:hidden   h-fit pb-4 sm:pb-5 border-y group  cursor-pointer border-black sm:border-white border-dotted flex items-center justify-center sm:justify-between"
                        >
                          <DarkButton
                            link={`/projects/${data[key].post_title}`}
                            text={"View Case Study"}
                          />
                          <Image
                            src={arrowForward}
                            className="sm:block  hidden w-5 md:w-6 group-hover:-rotate-45 mt-5 transition-all invert duration-500  object-contain"
                            alt="arrow forward"
                          />
                        </div>
                      </div>
                    </div>
                  )
              )}
            {data &&
              Object.keys(data)?.map(
                (key, index) =>
                  index === 2 && (
                    <div
                      onClick={() => handleCardClick(index)}
                      key={index}
                      style={{
                        zIndex: activeCard === index ? index + 100 : index + 30,
                      }}
                      className="w-full h-[550px]  md:h-[550px] mt-10 sm:mt-0 relative   sm:bg-transparent bg-[#F6F6F4] rounded-[30px] overflow-hidden"
                    >
                      <div className="sm:h-full w-full relative h-1/2 sm:absolute sm:top-0 sm:right-0 object-cover ">
                        {isVideo(data[key].home_image) ? (
                          <video
                            autoPlay
                            loop
                            muted
                            playsInline
                            controlsList="nodownload"
                            className="object-center object-cover  rounded-[30px] w-full h-full"
                          >
                            <source
                              src={"./Home/work/card1.mp4"}
                              type="video/mp4"
                            />
                            Your browser does not support the video tag.
                          </video>
                        ) : (
                          <Image
                            src={data[key]?.home_image}
                            fill={true}
                            className="object-cover rounded-[30px]"
                            alt={data[key].home_title.split(" ")[0] || "Work"}
                          />
                        )}
                      </div>

                      <div className="flex flex-col py-4  sm:pt-[40px] md:pt-[60px] px-2 sm:px-10 lg:px-16 sm:justify-center  md:justify-normal md:items-start items-center   h-1/2 sm:h-full sm:left-0 relative sm:absolute sm:top-0 w-full md:w-3/4 lg:w-2/3 xl:w-1/2 z-20">
                        <h1 className="font-sora   -ml-[12px]  text-3xl sm:text-5xl md:text-6xl lg:text-7xl  2xl:text-[5.3rem] tracking-tighter text-black sm:text-white font-extralight mb-3 md:mb-5">
                          {data[key].home_title.split(" ")[0] +
                            " " +
                            (data[key].home_title.split(" ")[1]
                              ? " " + data[key].home_title.split(" ")[1]
                              : "")}
                        </h1>

                        {data[key]?.projects_category && (
                          <div className=" flex-row space-x-2 sm:space-x-3 md:space-x-4 sm:flex hidden mb-8">
                            {data[key]?.projects_category?.map(
                              (category, index) =>
                                index < 3 && (
                                  <div
                                    className="font-sora text-[6px] sm:text-[8px] md:text-[10px] uppercase py-2.5 px-6 w-fit min-w-[125px] text-center border border-white sm:bg-transparent bg-white text-black sm:text-white rounded-3xl"
                                    key={index}
                                  >
                                    {category.name}
                                  </div>
                                )
                            )}
                          </div>
                        )}

                        <p
                          style={{ lineHeight: 1.3 }}
                          className=" font-sora  font-extralight  text-base sm:text-2xl  md:text-3xl lg:text-[32px] xl:text-[40px] sm:tracking-[-1.76px]  leading-[121%] text-center sm:text-left text-black sm:text-white mb-3 sm:mb-5 md:mb-8  xl:mb-11  "
                        >
                          {data[key]?.home_description}
                        </p>
                        <div
                          onClick={() =>
                            router.push(`/projects/${data[key]?.post_name}`)
                          }
                          className="w-full hidden  h-fit pb-4 sm:pb-5 border-y group  cursor-pointer border-black sm:border-white border-dotted md:flex items-center justify-center sm:justify-between"
                        >
                          <Buttons
                            link={`/projects/${data[key]?.post_name}`}
                            text={"View Case Study"}
                          />
                          <Image
                            src={arrowForward}
                            className="sm:block mt-5 hidden w-5 md:w-6 group-hover:-rotate-45 transition-all invert duration-500  object-contain"
                            alt="arrow forward"
                          />
                        </div>
                        <div
                          onClick={() =>
                            router.push(`/projects/${data[key]?.post_name}`)
                          }
                          className="w-full md:hidden   h-fit pb-4 sm:pb-5  border-y group  cursor-pointer border-black sm:border-white border-dotted flex items-center justify-center sm:justify-between"
                        >
                          <DarkButton
                            link={`/projects/${data[key].post_title}`}
                            text={"View Case Study"}
                          />
                          <Image
                            src={arrowForward}
                            className="sm:block mt-5 hidden w-5 md:w-6 group-hover:-rotate-45 transition-all invert duration-500  object-contain"
                            alt="arrow forward"
                          />
                        </div>
                      </div>
                    </div>
                  )
              )}
            {data &&
              Object.keys(data)?.map(
                (key, index) =>
                  index === 1 && (
                    <div
                      onClick={() => handleCardClick(index)}
                      key={index}
                      style={{
                        zIndex:
                          activeCard === index
                            ? index + 100
                            : activeCard === 0
                              ? index + 30
                              : index + 40,
                      }}
                      className="w-full h-[550px]  md:h-[550px]  relative   sm:bg-transparent bg-[#F6F6F4] rounded-[30px] overflow-hidden"
                    >
                      <div className="sm:h-full w-full relative h-1/2 sm:absolute sm:top-0 sm:right-0 object-cover ">
                        {isVideo(data[key]?.home_image) ? (
                          <video
                            autoPlay
                            loop
                            muted
                            playsInline
                            controlsList="nodownload"
                            className="object-center object-cover  rounded-[30px] w-full h-full"
                          >
                            <source
                              src={"./Home/work/card1.mp4"}
                              type="video/mp4"
                            />
                            Your browser does not support the video tag.
                          </video>
                        ) : (
                          <Image
                            alt="Home image"
                            src={data[key]?.home_image}
                            fill={true}
                            className="object-cover rounded-[30px]"
                          />
                        )}
                      </div>

                      <div className="flex flex-col py-4  sm:pt-[40px] md:pt-[60px] px-2 sm:px-10 lg:px-16 sm:justify-center  md:justify-normal md:items-start items-center   h-1/2 sm:h-full sm:right-0 relative sm:absolute sm:top-0 w-full md:w-3/4 lg:w-2/3 xl:w-1/2 z-20">
                        <h1 className="font-sora   -ml-[12px]  text-3xl sm:text-5xl md:text-6xl lg:text-7xl  2xl:text-[5.3rem] tracking-tighter text-black sm:text-white font-extralight mb-3 md:mb-5">
                          {data[key].home_title.split(" ")[0] +
                            " " +
                            (data[key].home_title.split(" ")[1]
                              ? " " + data[key].home_title.split(" ")[1]
                              : "")}
                        </h1>

                        {data[key]?.projects_category && (
                          <div className=" flex-row space-x-2 sm:space-x-3 md:space-x-4 sm:flex hidden mb-8">
                            {data[key]?.projects_category?.map(
                              (category, index) =>
                                index < 3 && (
                                  <div
                                    className="font-sora text-[6px] sm:text-[8px] md:text-[10px] uppercase py-2.5 px-6 w-fit min-w-[125px] text-center border border-white sm:bg-transparent bg-white text-black sm:text-white rounded-3xl"
                                    key={index}
                                  >
                                    {category.name}
                                  </div>
                                )
                            )}
                          </div>
                        )}

                        <p
                          style={{ lineHeight: 1.3 }}
                          className=" font-sora  font-extralight  text-base sm:text-2xl  md:text-3xl lg:text-[32px] xl:text-[40px] sm:tracking-[-1.76px]  leading-[121%] text-center sm:text-left text-black sm:text-white mb-3 sm:mb-5 md:mb-8  xl:mb-11  "
                        >
                          {data[key]?.home_description}
                        </p>
                        <div
                          onClick={() =>
                            router.push(`/projects/${data[key]?.post_name}`)
                          }
                          className="w-full hidden  h-fit pb-4 sm:pb-5  border-y group  cursor-pointer border-black sm:border-white border-dotted md:flex items-center justify-center sm:justify-between"
                        >
                          <Buttons
                            link={`/projects/${data[key]?.post_name}`}
                            text={"View Case Study"}
                          />
                          <Image
                            src={arrowForward}
                            className="sm:block hidden mt-5 w-5 md:w-6 group-hover:-rotate-45 transition-all invert duration-500  object-contain"
                            alt="arrow forward"
                          />
                        </div>
                        <div
                          onClick={() =>
                            router.push(`/projects/${data[key]?.post_name}`)
                          }
                          className="w-full md:hidden   h-fit pb-4 sm:pb-5 border-y group  cursor-pointer border-black sm:border-white border-dotted flex items-center justify-center sm:justify-between"
                        >
                          <DarkButton
                            link={`/projects/${data[key].post_title}`}
                            text={"View Case Study"}
                          />
                          <Image
                            src={arrowForward}
                            className="sm:block mt-5 hidden w-5 md:w-6 group-hover:-rotate-45 transition-all invert duration-500  object-contain"
                            alt="arrow forward"
                          />
                        </div>
                      </div>
                    </div>
                  )
              )}
            {data &&
              Object.keys(data)?.map(
                (key, index) =>
                  index === 3 && (
                    <div
                      onClick={() => handleCardClick(index)}
                      key={index}
                      style={{
                        zIndex:
                          activeCard === index
                            ? index + 100
                            : activeCard === 0 ||
                                activeCard === 1 ||
                                activeCard === 2
                              ? index + 30
                              : index + 60,
                      }}
                      className="w-full h-[550px]  md:h-[550px] mt-5 sm:mt-0 relative   sm:bg-transparent bg-[#F6F6F4] rounded-[30px] overflow-hidden"
                    >
                      <div className="sm:h-full w-full relative h-1/2 sm:absolute sm:top-0 sm:right-0 object-cover ">
                        {isVideo(data[key].home_image) ? (
                          <video
                            autoPlay
                            loop
                            muted
                            playsInline
                            controlsList="nodownload"
                            className="object-center object-cover  rounded-[30px] w-full h-full"
                          >
                            <source
                              src={"./Home/work/card1.mp4"}
                              type="video/mp4"
                            />
                            Your browser does not support the video tag.
                          </video>
                        ) : (
                          <Image
                            alt="Home image"
                            src={data[key]?.home_image}
                            fill={true}
                            className="object-cover rounded-[30px]"
                          />
                        )}
                      </div>

                      <div className="flex flex-col py-4  sm:pt-[40px] md:pt-[60px] px-2 sm:px-10 lg:px-16 sm:justify-center  md:justify-normal md:items-start items-center   h-1/2 sm:h-full sm:left-0 relative sm:absolute sm:top-0 w-full md:w-3/4 lg:w-2/3 xl:w-1/2 z-20">
                        <h1 className="font-sora  -ml-[12px]  text-3xl sm:text-5xl md:text-6xl lg:text-7xl  2xl:text-[5.3rem] tracking-tighter text-black sm:text-white font-extralight mb-3 md:mb-5">
                          {data[key].home_title.split(" ")[0] +
                            " " +
                            (data[key].home_title.split(" ")[1]
                              ? " " + data[key].home_title.split(" ")[1]
                              : "") +
                            (data[key].home_title.split(" ")[2]
                              ? " " + data[key].home_title.split(" ")[2]
                              : "")}
                        </h1>

                        {data[key]?.projects_category && (
                          <div className=" flex-row space-x-2 sm:space-x-3 md:space-x-4 sm:flex hidden mb-8">
                            {data[key]?.projects_category?.map(
                              (category, index) =>
                                index < 3 && (
                                  <div
                                    className="font-sora text-[6px] sm:text-[8px] md:text-[10px] uppercase py-2.5 px-6 w-fit min-w-[125px] text-center border border-white sm:bg-transparent bg-white text-black sm:text-white rounded-3xl"
                                    key={index}
                                  >
                                    {category.name}
                                  </div>
                                )
                            )}
                          </div>
                        )}

                        <p
                          style={{ lineHeight: 1.3 }}
                          className=" font-sora  font-extralight  text-base sm:text-2xl  md:text-3xl lg:text-[32px] xl:text-[40px] sm:tracking-[-1.76px]  leading-[121%] text-center sm:text-left text-black sm:text-white mb-3 sm:mb-5 md:mb-8  xl:mb-11 "
                        >
                          {data[key]?.home_description}
                        </p>
                        <div
                          onClick={() =>
                            router.push(`/projects/${data[key]?.post_name}`)
                          }
                          className="w-full hidden   h-fit pb-4 sm:pb-5 border-y group  cursor-pointer border-black sm:border-white border-dotted md:flex items-center justify-center sm:justify-between"
                        >
                          <Buttons
                            link={`/projects/${data[key]?.post_name}`}
                            text={"View Case Study"}
                          />
                          <Image
                            src={arrowForward}
                            className="sm:block mt-5 hidden w-5 md:w-6 group-hover:-rotate-45 transition-all invert duration-500  object-contain"
                            alt="arrow forward"
                          />
                        </div>

                        <div
                          onClick={() =>
                            router.push(`/projects/${data[key]?.post_name}`)
                          }
                          className="w-full md:hidden   h-fit pb-4 sm:pb-5  border-y group  cursor-pointer border-black sm:border-white border-dotted flex items-center justify-center sm:justify-between"
                        >
                          <DarkButton
                            link={`/projects/${data[key].post_title}`}
                            text={"View Case Study"}
                          />
                          <Image
                            src={arrowForward}
                            className="sm:block hidden mt-5 w-5 md:w-6 group-hover:-rotate-45 transition-all invert duration-500  object-contain"
                            alt="arrow forward"
                          />
                        </div>
                      </div>
                    </div>
                  )
              )}
            {data &&
              Object.keys(data)?.map((key, index) => {
                return (
                  index === 4 && (
                    <div
                      onClick={() => handleCardClick(index)}
                      key={index}
                      style={{
                        zIndex:
                          activeCard === index
                            ? index + 100
                            : activeCard === 0 ||
                                activeCard === 1 ||
                                activeCard === 2 ||
                                activeCard === 3
                              ? index + 30
                              : index + 90,
                        position: "relative",
                      }}
                      className="w-full h-[550px]  md:h-[550px] mt-5 sm:mt-0 relative   sm:bg-transparent bg-[#F6F6F4] rounded-[30px] overflow-hidden"
                    >
                      <div className="sm:h-full w-full relative h-1/2 sm:absolute sm:top-0 sm:right-0 object-cover ">
                        {isVideo(data[key]?.home_image) ? (
                          <video
                            autoPlay
                            loop
                            muted
                            playsInline
                            controlsList="nodownload"
                            className="object-center object-cover  rounded-[30px] w-full h-full"
                          >
                            <source
                              src={"./Home/work/card1.mp4"}
                              type="video/mp4"
                            />
                            Your browser does not support the video tag.
                          </video>
                        ) : (
                          <Image
                            alt="Home image"
                            src={data[key]?.home_image}
                            fill={true}
                            className="object-cover rounded-[30px]"
                          />
                        )}
                      </div>

                      <div className="flex flex-col py-4  sm:pt-[40px] md:pt-[60px] px-2 sm:px-10 lg:px-16 sm:justify-center  md:justify-normal md:items-start items-center   h-1/2 sm:h-full sm:right-0 relative sm:absolute sm:top-0 w-full md:w-3/4 lg:w-2/3 xl:w-1/2 z-20">
                        <h1 className="font-sora  -ml-[12px]  text-3xl sm:text-5xl md:text-6xl lg:text-7xl  2xl:text-[5.3rem] tracking-tighter text-black sm:text-white font-extralight mb-3 md:mb-5">
                          {data[key].home_title.split(" ")[0] +
                            " " +
                            (data[key].home_title.split(" ")[1]
                              ? " " + data[key].home_title.split(" ")[1]
                              : "")}
                        </h1>

                        {data[key]?.projects_category && (
                          <div className=" flex-row space-x-2 sm:space-x-3 md:space-x-4 sm:flex hidden mb-8">
                            {data[key]?.projects_category?.map(
                              (category, index) =>
                                index < 3 && (
                                  <div
                                    className="font-sora text-[6px] sm:text-[8px] md:text-[10px] uppercase py-2.5 px-6 w-fit min-w-[125px] text-center border border-white sm:bg-transparent bg-white text-black sm:text-white rounded-3xl"
                                    key={index}
                                  >
                                    {category.name}
                                  </div>
                                )
                            )}
                          </div>
                        )}

                        <p
                          style={{ lineHeight: 1.3 }}
                          className=" font-sora  font-extralight  text-base sm:text-2xl  md:text-3xl lg:text-[32px] xl:text-[40px] sm:tracking-[-1.76px]  leading-[121%] text-center sm:text-left text-black sm:text-white mb-3 sm:mb-5 md:mb-8  xl:mb-11  "
                        >
                          {data[key].home_description}
                        </p>
                        <div
                          onClick={() =>
                            router.push(`/projects/${data[key]?.post_name}`)
                          }
                          className="w-full hidden  h-fit pb-4 sm:pb-5  border-y group  cursor-pointer border-black sm:border-white border-dotted md:flex items-center justify-center sm:justify-between"
                        >
                          <Buttons
                            link={`/projects/${data[key]?.post_name}`}
                            text={"View Case Study"}
                          />
                          <Image
                            src={arrowForward}
                            className="sm:block mt-5 hidden w-5 md:w-6 group-hover:-rotate-45 transition-all invert duration-500  object-contain"
                            alt="arrow forward"
                          />
                        </div>

                        <div
                          onClick={() =>
                            router.push(`/projects/${data[key]?.post_name}`)
                          }
                          className="w-full md:hidden mt-5   h-fit pb-4 sm:pb-5   border-y group  cursor-pointer border-black sm:border-white border-dotted flex items-center justify-center sm:justify-between"
                        >
                          <DarkButton
                            link={`/projects/${data[key].post_title}`}
                            text={"View Case Study"}
                          />
                          <Image
                            src={arrowForward}
                            className="sm:block hidden w-5 md:w-6 group-hover:-rotate-45 transition-all invert duration-500  object-contain"
                            alt="arrow forward"
                          />
                        </div>
                      </div>
                    </div>
                  )
                );
              })}
          </div>
        </div>
      </div>

      <div className="md:hidden block">
        <WorkMobile data={data} />
      </div>
    </>
  );
}

export default Section5;
