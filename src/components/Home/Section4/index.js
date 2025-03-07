/** @format */
"use client";
import Image from "next/image";
import gsap from "gsap";
import ScrollTrigger from "gsap/dist/ScrollTrigger";
import { useGSAP } from "@gsap/react";
import ChildrenReveal from "@/util/ChildrenReveal";
import Buttons from "@/components/Buttons";
import Overlay from "../../../../public/Home/cardsNEw/bgOverlay.png";
import Overlay2 from "../../../../public/Home/cardsNEw/overlay2.png";

function Section4({ cardData }) {
  useGSAP(() => {
    const imgSlider = document.getElementById("slider-container");
    const imgSliderMain = document.getElementById("main-slider-container");

    if (!window.matchMedia("(max-width: 640px)").matches) {
      gsap.registerPlugin(ScrollTrigger);

      const totalCards = imgSlider.children.length;

      // Ensure correct width
      imgSlider.style.width = `${totalCards * 100}vw`;

      gsap
        .timeline({
          defaults: { ease: "none" },
          scrollTrigger: {
            trigger: imgSliderMain,
            pin: true,
            start: "top top",
            end: `+=${(totalCards - 1) * 100}%`,
            scrub: true,
          },
        })
        .to(imgSlider, {
          x: () => -(imgSlider.scrollWidth - imgSliderMain.offsetWidth),
          ease: "power2.inOut",
        });
    }
  }, []);

  return (
    <div
      id="main-slider-container"
      className="relative w-screen h-fit sm:h-[100dvh] sm:py-0 md:pb-10 bg-[#F6F6F4] overflow-hidden"
    >
      <div className="relative h-fit sm:h-[100dvh] w-full">
        <ChildrenReveal
          x={0}
          y={20}
          styling="w-full relative flex mx-auto overflow-hidden h-fit sm:h-[100dvh]"
        >
          <div
            id="slider-container"
            className="relative sm:absolute flex overflow-hidden h-fit sm:h-[100dvh] sm:flex-row flex-col w-full sm:w-[300vw] min-w-full sm:space-y-0 space-y-4 my-5 sm:my-0  items-start"
          >
            {/* Card 1 */}
            <div className="w-screen px-5 sm:px-10 md:px-12">
              <div
                className="relative w-full flex flex-row justify-center rounded-[30px] bg-cover h-auto sm:h-[80vh] lg:h-[85vh] mt-0 sm:mt-[10vh] sm:bg-none overflow-hidden"
                style={{
                  backgroundImage: `url(${cardData[0]?.image})`,
                  backgroundSize: "cover auto",
                  backgroundPosition: "bottom right",
                  backgroundRepeat: "no-repeat",
                  backgroundColor: "#000",
                  ["@media (minWidth: 640px)"]: {
                    backgroundImage: `url(${cardData[0]?.image})`,
                    backgroundSize: "cover",
                    backgroundPosition: "center",
                    backgroundColor: "transparent",
                  },
                }}
              >
                <div className="absolute lg:hidden inset-0 h-full w-full z-10">
                  <Image
                    src={Overlay2}
                    alt="overlay2"
                    className="h-full w-full object-cover
                  "
                    height={0}
                    width={0}
                    sizes="100vw"
                  />
                </div>
                <div className="flex z-20 flex-col  items-center text-center md:items-start justify-center w-full py-16 px-0 sm:px-16 lg:px-20  lg:py-16">
                  <h1 className="font-sora md:text-left text-center font-semibold text-[40px] sm:text-[60px]  md:text-[7vw] lg:text-[74px] tracking-[-1.6px] capitalize text-white heading2 ">
                    {cardData[0]?.title}
                  </h1>
                  <p className="text-white text-center leading-[139%]  md:text-start text-[25px] w-[80%] sm:text-[30px] lg:text-[40px]   mb-4  lg:max-w-[650px]">
                    {cardData[0]?.sub_title}
                  </p>
                  <p className="font-satoshi w-[90%]  text-white md:text-left text-center text-base leading-normal md:leading-[25px]   max-w-[650px]">
                    {cardData[0]?.description}
                  </p>
                  {cardData[0]?.link && (
                    <Buttons
                      link={cardData[0]?.link}
                      color={"#fff"}
                      text="Explore"
                    />
                  )}
                </div>
              </div>
            </div>

            {/* Card 2 */}
            <div className="w-screen px-5 sm:px-10 md:px-12">
              <div
                className="relative w-full flex flex-row justify-center overflow-hidden rounded-[30px] bg-cover h-auto sm:h-[80vh] lg:h-[85vh] mt-0 sm:mt-[10vh] sm:bg-none"
                style={{
                  backgroundImage: `url(${cardData[1]?.image})`,
                  backgroundSize: "cover auto",
                  backgroundPosition: "bottom right",
                  backgroundRepeat: "no-repeat",
                  backgroundColor: "#000",
                  ["@media (minWidth: 640px)"]: {
                    backgroundImage: `url(${cardData[1]?.image})`,
                    backgroundSize: "cover",
                    backgroundPosition: "center",
                    backgroundColor: "transparent",
                  },
                }}
              >
                <div className="hidden md:block absolute inset-0 h-full w-full z-10">
                  <Image
                    src={Overlay}
                    alt="overlay"
                    className="h-full w-full object-cover
                  "
                    height={0}
                    width={0}
                    sizes="100vw"
                  />
                </div>

                <div className="absolute md:hidden inset-0 h-full w-full z-10">
                  <Image
                    src={Overlay2}
                    alt="overlay2"
                    className="h-full w-full object-cover
                  "
                    height={0}
                    width={0}
                    sizes="100vw"
                  />
                </div>
                <div className="flex z-20 flex-col items-center md:items-start justify-center w-full py-16 px-0 sm:px-16 lg:px-20  lg:py-16">
                  <h1 className="font-sora md:text-left text-center font-semibold text-[40px] sm:text-[60px]  md:text-[7vw] lg:text-[74px] tracking-[-1.6px] capitalize text-white heading2">
                    {cardData[1]?.title}
                  </h1>
                  <p className="text-white text-center leading-[139%]  md:text-start text-[25px] w-[80%] sm:text-[30px] lg:text-[40px]   mb-4  lg:max-w-[650px]">
                    {cardData[1]?.sub_title}
                  </p>
                  <p className="font-satoshi w-[90%]  text-white md:text-left text-center text-base leading-normal md:leading-[25px]   max-w-[650px]">
                    {cardData[1]?.description}
                  </p>
                  {cardData[1]?.link && (
                    <Buttons
                      link={cardData[1]?.link}
                      color={"#fff"}
                      text="Explore"
                    />
                  )}
                </div>
              </div>
            </div>

            {/* Card 3 */}
            <div className="w-screen px-5 sm:px-10 md:px-12">
              <div
                className="relative w-full flex flex-row justify-center overflow-hidden rounded-[30px] bg-cover h-auto sm:h-[80vh] lg:h-[85vh] mt-0 sm:mt-[10vh] sm:bg-none"
                style={{
                  backgroundImage: `url(${cardData[2]?.image})`,
                  backgroundSize: "cover auto",
                  backgroundPosition: "bottom right",
                  backgroundRepeat: "no-repeat",
                  backgroundColor: "#000",
                  ["@media (minWidth: 640px)"]: {
                    backgroundImage: `url(${cardData[2]?.image})`,
                    backgroundSize: "cover",
                    backgroundPosition: "center",
                    backgroundColor: "transparent",
                  },
                }}
              >
                <div className="hidden md:block absolute inset-0 h-full w-full z-10">
                  <Image
                    src={Overlay}
                    alt="overlay"
                    className="h-full w-full object-cover
                  "
                    height={0}
                    width={0}
                    sizes="100vw"
                  />
                </div>

                <div className="absolute md:hidden inset-0 h-full w-full z-10">
                  <Image
                    src={Overlay2}
                    alt="overlay2"
                    className="h-full w-full object-cover
                  "
                    height={0}
                    width={0}
                    sizes="100vw"
                  />
                </div>
                <div className="flex z-20 flex-col items-center md:items-start justify-center w-full py-16 px-0 sm:px-16 lg:px-20  lg:py-16">
                  <h1 className="font-sora md:text-left text-center font-semibold text-[40px] sm:text-[60px]  md:text-[7vw] lg:text-[74px] tracking-[-1.6px] capitalize text-white heading2 ">
                    {cardData[2]?.title}
                  </h1>
                  <p className="text-white text-center leading-[139%]  md:text-start text-[25px] w-[80%] sm:text-[30px] lg:text-[40px]   mb-4  lg:max-w-[650px]">
                    {cardData[2]?.sub_title}
                  </p>
                  <p className="font-satoshi w-[90%]  text-white md:text-left text-center text-base leading-normal md:leading-[25px]   max-w-[650px]">
                    {cardData[0]?.description}
                  </p>
                  {cardData[2]?.link && (
                    <Buttons
                      link={cardData[2]?.link}
                      color={"#fff"}
                      text="Explore"
                    />
                  )}
                </div>
              </div>
            </div>
          </div>
        </ChildrenReveal>
      </div>
    </div>
  );
}

export default Section4;
