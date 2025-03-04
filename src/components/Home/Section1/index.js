import React, { useEffect, useRef, useState } from "react";
import gsap, { Expo } from "gsap";
import ScrollTrigger from "gsap/dist/ScrollTrigger";
import { useGSAP } from "@gsap/react";
import SplitType from "split-type";
import useMediaQuery from "@/util/useMediaQuery";
import Link from "next/link";
import { RotateCcw, X } from "lucide-react";
import Plays from "../../../../public/About/play.svg";
import Logo from "../../../../public/About/logo.svg";
import Image from "next/image";

function Section1({ title, link, fullVideo, shortVideo, subTitle, linkText }) {
  const isMobile = useMediaQuery("(max-width: 640px)");
  const [isFullscreen, setIsFullscreen] = useState(false);
  const videoRef = useRef(null);

  useGSAP(() => {
    gsap.registerPlugin(ScrollTrigger);
    let playButton = document.getElementById("playButton");

    gsap.set(playButton, {
      opacity: 0,
      y: 100,
    });

    const splittype = new SplitType("#heroSectionText", {
      types: "lines",
      lineClass: "block w-full overflow-hidden",
      tagName: "span",
    });
    let tl = gsap
      .timeline({})
      .fromTo(
        splittype.lines,
        {
          y: 20,
          opacity: 0,
        },
        {
          y: 0,
          delay: 0.5,
          duration: 0.5,
          opacity: 1,
          ease: Expo,
          stagger: {
            amount: 0.2,
          },
        },
        "start23"
      )
      .fromTo(
        ".heroSectionBigText, .heroSectionBtn",
        {
          y: 20,
          opacity: 0,
        },
        {
          y: 0,
          delay: 0.5,
          duration: 0.5,
          opacity: 1,
          ease: Expo,
          stagger: {
            amount: 0.2,
          },
        },
        "start23"
      );
    let timeline = gsap.timeline({
      defaults: {
        ease: "none",
      },
      scrollTrigger: {
        trigger: "#section1",
        pin: true,
        scrub: true,
        start: "top top",
        end: "+=150%",
        // markers: true,
        onUpdate: (self) => {
          let progress = Math.round(self.progress * 100);

          if (progress >= 25) {
            gsap.to(playButton, {
              opacity: 1,
              y: 0,
              right: window.innerWidth < 640 ? "50%" : "115px",
              duration: 0.6,
              ease: "power2.out",
            });
          } else {
            gsap.to(playButton, {
              opacity: 0,
              y: 100,
              duration: 0.6,
              ease: "power2.out",
            });
          }
        },
      },
    });
    timeline
      .to("#section11", {
        opacity: 0,
        y: -100,
        duration: 0.1,
        ease: "none",
      })
      .to(
        "#maskImage",
        {
          maskSize: window.matchMedia("(max-width: 640px)").matches
            ? "5000%"
            : "4000%",
          maskPositionX: window.matchMedia("(max-width: 640px)").matches
            ? "57.5%"
            : "55%",
          ease: "none",
        },
        "<"
      )
      .to("#section-text", {
        opactity: 0,
        visibility: "hidden",
      })
      .to(
        "#video",
        {
          opacity: 1,
        },
        "<"
      );
  }, []);

  const handleFullscreen = () => {
    setIsFullscreen(true);
    if (videoRef.current) {
      videoRef.current.play().catch((error) => {
        console.error("Error playing video:", error);
      });
    }
  };

  const handleExitFullscreen = () => {
    setIsFullscreen(false);
  };

  const handleReplay = (e) => {
    e.stopPropagation();
    if (videoRef.current) {
      videoRef.current.currentTime = 0;
      videoRef.current.play();
    }
  };

  useEffect(() => {
    const handleKeyDown = (e) => {
      if (e.key === "Escape") {
        setIsFullscreen(false);
      }
    };

    if (isFullscreen) {
      window.addEventListener("keydown", handleKeyDown);
    }

    return () => {
      window.removeEventListener("keydown", handleKeyDown);
    };
  }, [isFullscreen]);

  useEffect(() => {
    const buttons = gsap.utils.toArray(".heroSectionBtn");
    buttons.forEach((item) => {
      let span = item.querySelector("span");
      let tl = gsap.timeline({ paused: true });

      tl.to(span, { duration: 0.2, yPercent: -150, ease: "power2.in" });
      tl.set(span, { yPercent: 150 });
      tl.to(span, { duration: 0.2, yPercent: 0 });

      item.addEventListener("mouseenter", () => tl.play(0));
    });
  }, []);

  return (
    <div id="mainSection1">
      <div
        id="section1"
        className="relative w-screen h-[100dvh] overflow-hidden"
      >
        <div
          style={{
            maskImage: "url(/Cheval.svg)",
            maskPosition: isMobile ? "50% 54%" : "50% 93%",
            maskRepeat: "no-repeat",
            maskSize: "78%",
          }}
          id="maskImage"
          className="absolute top-0 heroSectionBigText  left-0 w-screen md:h-[100dvh] flex items-center justify-center z-50 "
        >
          <video
            autoPlay
            muted
            playsInline
            loop
            id="video"
            className="lg:w-screen w-fit    object-cover h-[100dvh]"
          >
            <source src={shortVideo} type="video/mp4" />
          </video>
        </div>

        <div
          id="playButton"
          className="absolute inset-0  w-full h-full flex items-center justify-center z-[11115]"
          onClick={handleFullscreen}
        >
          <div
            className="flex items-center justify-center h-fit-- w-24 sm:w-28 z-20-- xl:w-32 cursor-pointer   "
            onClick={handleFullscreen}
          >
            <Image
              src={Plays}
              alt="Play"
              className="w-full h-full"
              style={{ animation: "rotate 10s linear infinite" }}
            />
            <div className="z-50-- absolute">
              <Image
                src={Logo}
                alt="Logo"
                className="sm:w-full h-full w-[40px] "
              />
            </div>
          </div>
        </div>

        <div
          className="relative bg-white w-screen h-[100dvh] overflow-hidden"
          id="section-text"
        >
          <div
            style={{ zIndex: 11118 }}
            className="relative max-w-screen mx-auto min-h-[100dvh] w-full"
          >
            <div
              id="section11"
              className="w-full flex items-center pt-0 sm:pt-32 lg:pt-36  h-[100dvh] flex-col justify-center "
            >
              <div
                className="md:space-y-5-- flex flex-col items-center justify-center mb-10 md:mb-none"
                style={{
                  zIndex: 9,
                }}
              >
                <h3
                  className="font-sora  text-2xl  sm:text-3xl md:text-4xl font-bold leading-[190%]-- md:mb-3 lg:text-5xl xl:text-[54px] bg-gradient-to-r from-[#101763] to-[#D81100] bg-clip-text text-transparent relative"
                  style={{
                    display: "block !important",
                    justifyContent: "center",
                    textAlign: "center",
                  }}
                >
                  {title}
                </h3>
                <p
                  className="text-center font-sora font-normal leading-[190%] text-base   md:text-[22px] text-[#101763]   mw-[80%] px-3 md:px-0"
                  style={{ lineHeight: 1.2 }}
                >
                  {subTitle}
                </p>
                <Link
                  href={link}
                  className="heroSectionBtn font-sora hidden sm:inline-block font-normal leading-[190%]-- md:text-[18px] md:mt-5  text-white bg-[#d81100] text-center  rounded-lg relative overflow-hidden w-[180px] lg:w-[220px] h-[50px] md:h-[58px] "
                >
                  <span className="absolute w-full h-full flex items-center justify-center">
                    {linkText}
                  </span>
                </Link>
                <div className="items-center flex justify-center w-full realtive">
                  <Link
                    className="font-sora sm:hidden font-normal leading-[190%]  md:text-[18px] text-white underline   heroSectionBtn absolute bottom-24  bg-[#d81100] text-center  rounded-lg w-[180px] lg:w-[220px] h-[50px] md:h-[58px]    "
                    href={link}
                    style={{ zIndex: 1111988 }}
                  >
                    <span className="absolute w-full h-full flex items-center justify-center">
                      {linkText}
                    </span>
                  </Link>
                </div>
              </div>
              <h1
                id="mainHeading"
                className="text-[24vw] leading-[.82] font-sora font-semibold tracking-tighter text-[#DBDBDB] opacity-0"
              >
                Cheval
              </h1>{" "}
            </div>
          </div>
        </div>
      </div>

      {isFullscreen && (
        <div
          className="fixed top-0 left-0 w-screen h-screen bg-white/95 z-[10000] flex flex-col items-center justify-center"
          onClick={handleExitFullscreen}
        >
          <video
            autoPlay
            ref={videoRef}
            // muted
            playsInline
            loop
            controls
            controlsList="nodownload "
            className="w-fit h-[80vh] aspect-video object-contain"
          >
            <source src={fullVideo} type="video/mp4" />
          </video>
          <div className="flex justify-between md:justify-center px-5 w-full md:gap-4 md:mt-5 absolute top-[20%] md:relative md:top-0">
            <button
              className="bg-[#D81100] hover:bg-[#101763] text-white px-4 py-2 rounded font-sora"
              onClick={handleReplay}
            >
              <RotateCcw />
            </button>
            <button
              className="bg-gray-500 hover:bg-gray-700 text-white px-4 py-2 rounded"
              onClick={handleExitFullscreen}
            >
              <X />
            </button>
          </div>
        </div>
      )}
    </div>
  );
}

export default Section1;
