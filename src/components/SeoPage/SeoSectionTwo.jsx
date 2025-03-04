import Link from "next/link";
import React from "react";
import { dummyCardData } from "@/data/SeoInnerData";
import Image from "next/image";

const SeoSectionTwo = () => {
  const renderCard = (card, index) => {
    if (card?.placeholder === false) {
      return <div key={`empty-${index}`} className="col-span-1"></div>;
    }

    if (card?.helloText && !card?.title && !card?.description) {
      return (
        <div
          key={index}
          className="flex relative col-span-1 bg-[#fff] w-full h-full"
        >
          <div className="relative flex flex-col w-full h-full items-center">
            <div className="flex-grow flex items-center justify-center w-full">
              <Link href={"/contact-us"}>
                <div className="flex items-center justify-center py-3 space-x-5 rounded-[50px] sm:w-fit w-full px-8 border border-[#101763] text-[#101763] bg-transparent font-sora text-center font-semibold text-base leading-normal">
                  <span>{card.helloText}</span>
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
            {card?.image && (
              <div className="w-full flex justify-center pb-4--">
                <Image
                  src={card?.image}
                  height={0}
                  width={0}
                  sizes="100vw"
                  alt="card image"
                  className="w-[268px] h-auto"
                />
              </div>
            )}
          </div>
        </div>
      );
    }

    return (
      <div
        key={index}
        className="flex relative col-span-1 bg-[#fff] w-full h-full"
      >
        <div className="flex w-full flex-col py-8 space-y-24 px-10">
          <h3 className="text-[#101763] font-sora font-semibold leading-[136.5%] text-[28px] min-h-[80px]">
            {card?.title}
          </h3>
          <div className="space-y-5">
            <p className="font-satoshi text-[14px] text-[#101763] leading-[173.85%] min-h-[120px]">
              {card?.description}
            </p>
            <Link
              href={"/contact-us"}
              className="flex items-center justify-between py-3 space-x-3.5 rounded-[50px] sm:w-fit w-full px-5 border border-white bg-[#d81100]"
            >
              <span className="text-white font-sora text-sm text-center">
                Enquire Now
              </span>
              <svg
                className="w-3 rotate-45 object-contain"
                viewBox="0 0 8 8"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M0.671646 7.29248L0.0625 6.68333L5.80279 0.9375H0.584146V0.0625H7.29248V6.77083H6.41748V1.55219L0.671646 7.29248Z"
                  fill="#fff"
                />
              </svg>
            </Link>
          </div>
        </div>
      </div>
    );
  };

  const cardsToRender = [];
  if (dummyCardData?.length === 4) {
    dummyCardData?.forEach((card, index) => {
      cardsToRender.push(renderCard(card, index));
      if (index === 2) {
        cardsToRender.push(
          <div key={`empty-${index}`} className="col-span-1"></div>
        );
      }
    });
  } else {
    cardsToRender.push(
      ...dummyCardData?.map((card, index) => renderCard(card, index))
    );
  }

  return (
    <div className="w-full h-fit px-5 sm:px-10 md:px-12 pt-[90px] pb-20">
      <div className="w-full grid grid-cols-3 grid-flow-row gap-4">
        <div className="flex space-y-5 sm:items-start pr-4 items-center sm:justify-start justify-center flex-col col-span-1 h-fit">
          <h3 className="font-sora font-semibold text-[#101763] text-4xl leading-[136.5%]">
            Using a Stable and Profound Approach in Android App Development
          </h3>
          <div className="ml-1 w-full max-w-40 h-[1px] bg-black"></div>
          <p className="text-[#101763] font-satoshi text-base font-normal leading-[154%]">
            Lorem Ipsum is simply dummy text of the printing and typesetting
            industry. Lorem Ipsum has been the industry's standard dummy text
            ever since the 1500s, when an unknown printer took a galley of type
            and scrambled it to make a type specimen book. It has survived not
            only five centuries, but also the leap into electronic typesetting,
            remaining essentially
          </p>
        </div>

        {cardsToRender}
      </div>
    </div>
  );
};

export default SeoSectionTwo;
