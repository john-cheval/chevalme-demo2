import Image from "next/image";
import Link from "next/link";
import React from "react";
import image1 from "../../../public/dubai/1.png";
import image2 from "../../../public/dubai/2.jpeg";

const SeoSectionOne = ({ title, linkText }) => {
  return (
    <div className="pt-24 sm:pt-28 md:pt-36 px-5 sm:px-10 md:px-12 sm:space-y-14 md:space-y-16">
      <div className="flex items-start xl:space-y-0 space-y-4 xl:items-end lg:flex-row flex-col justify-between w-full ">
        <h1 className="capitalize font-sora font-semibold xl:max-w-[746px] md:leading-tight sm:leading-tight leading-normal  text-center lg:text-start  text-[#101763] text-3xl sm:text-4xl xl:text-5xl">
          {title}
        </h1>
        <Link href={"/contact-us"}>
          <div className="flex items-center justify-between py-3 space-x-5 rounded-[50px] sm:w-fit w-full  px-8 border border-[#101763] text-[#101763] bg-transparent  font-sora text-center font-semibold text-base leading-normal ">
            <span>{linkText}</span>
            <svg
              className="w-4 object-contain"
              viewBox="0 0 8 8"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M0.671646 7.29248L0.0625 6.68333L5.80279 0.9375H0.584146V0.0625H7.29248V6.77083H6.41748V1.55219L0.671646 7.29248Z"
                fill="#101763"
              />
            </svg>
          </div>
        </Link>
      </div>
      <div className=" grid grid-cols-10 gap-2 grid-flow-row">
        <div className="col-span-6 relative">
          <Image
            src={image1}
            className="h-full w-full object-cover object-center"
          />
          <Link href={"/projects"}>
            <div className="flex absolute bottom-0 right-0 my-14 mx-20 items-center justify-between py-2.5 text-white space-x-2 rounded-[50px] sm:w-fit w-full  px-4 border border-white  bg-transparent  font-sora text-center text-sm ">
              <span className="">Projects </span>
              <svg
                className="w-3.5 object-contain"
                viewBox="0 0 8 8"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M0.671646 7.29248L0.0625 6.68333L5.80279 0.9375H0.584146V0.0625H7.29248V6.77083H6.41748V1.55219L0.671646 7.29248Z"
                  fill="#fff"
                />
              </svg>
            </div>
          </Link>
        </div>
        <div className="col-span-4 relative">
          <Image
            src={image2}
            className="h-full w-full object-cover object-center"
          />
        </div>
      </div>
      <div className="grid grid-cols-10 gap-2 grid-flow-row">
        <div className="col-span-6 relative space-y-4">
          <h3
            style={{
              background:
                "linear-gradient(92.09deg, #FF0C15 0.33%, #000000 26.13%)",

              WebkitBackgroundClip: "text",
              WebkitTextFillColor: "transparent",
              color: "transparent",
            }}
            className="font-sora font-semibold text-[#101763] text-4xl  leading-[136.5%] max-w-[650px] "
          >
            Join Us For A Worthy Android App Development Services
          </h3>
          <p className="text-[#101763] font-satoshi text-base font-normal leading-[154%]">
            Lorem Ipsum is simply dummy text of the printing and typesetting
            industry. Lorem Ipsum has been the industry's standard dummy text
            ever since the 1500s, when an unknown printer took a galley of type
            and scrambled it to make a type specimen book. It has survived not
            only five centuries, but also the leap into electronic typesetting,
            remaining essentially unchanged. It was popularised in the 1960s
            with the release of Letraset sheets containing Lorem Ipsum passages,
            and more recently with desktop publishing software like Aldus
            PageMaker including versions of Lorem Ipsum.
          </p>
        </div>
        <div className="col-span-4 relative space-y-8 mx-auto">
          <div>
            <h4 className="text-[#d81100] font-sora text-5xl font-semibold leading-normal">
              1000+
            </h4>
            <p className="text-[#101763] font-sora text-xl font-semibold ">
              Project Delivered
            </p>
          </div>

          <div className="w-[69px] h-[2px] bg-[#ff0c15]" />

          <div>
            <h4 className="text-[#d81100] font-sora text-5xl font-semibold leading-normal">
              500+
            </h4>
            <p className="text-[#101763] font-sora text-xl font-semibold ">
              Happy Clients
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SeoSectionOne;
