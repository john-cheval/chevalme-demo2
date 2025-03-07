import Image from "next/image";
import Link from "next/link";
import React from "react";
import CraftImage from "../../../public/Header/craft.png";

const CraftCenter = ({ craftLinks }) => {
  const { branding, customDesign, uiUx } = craftLinks;
  return (
    <>
      <div
        id="rightSideCraft"
        className="col-span-6 bigMenuCol px-9 p-10 flex bigMain-gap gap-x-24"
      >
        <div className="space-y-2">
          <h2 className="font-sora font-base font-semibold leading-[190%]-- heading-gradient">
            <Link href="/service/ui-ux">UI / UX</Link>
          </h2>
          <ul className="space-y-3 linksGap">
            {uiUx?.map((data, index) => (
              <li
                className="font-satoshi text-[#101763] text-sm font-normal leading-[182%]-- hover:text-[#d81100] transition-all duration-300 "
                key={index}
              >
                <Link href={data?.link}>{data?.title}</Link>
              </li>
            ))}
          </ul>
        </div>

        <div className="space-y-2">
          <h2 className="font-sora font-base font-semibold leading-[190%]-- heading-gradient">
            <Link href="/service/branding">Branding</Link>
          </h2>
          <ul className="space-y-3 linksGap">
            {branding?.map((data, index) => (
              <li
                className="font-satoshi text-[#101763] text-sm font-normal leading-[182%]-- hover:text-[#d81100] transition-all duration-300 "
                key={index}
              >
                <Link href={data?.link}>{data?.title}</Link>
                {data?.subTitle && (
                  <span className="text-xs block">{data?.subTitle}</span>
                )}
              </li>
            ))}
          </ul>
        </div>

        <div className="space-y-2">
          <h2 className="font-sora font-base font-semibold leading-[190%]-- heading-gradient">
            <Link href="/service/custom-design">Custom Design</Link>
          </h2>
          <ul className="space-y-3 linksGap">
            {customDesign?.map((data, index) => (
              <li
                className="font-satoshi text-[#101763] text-sm font-normal leading-[182%]-- hover:text-[#d81100] transition-all duration-300 "
                key={index}
              >
                <Link href={data?.link}>{data?.title}</Link>
              </li>
            ))}
          </ul>
        </div>
      </div>
      <div className="relative col-span-4 w-full big_image h-full">
        <Image
          src={CraftImage}
          alt="codeImage"
          className="object-cover w-full h-full"
          height={0}
          width={0}
          sizes="100vw"
        />
      </div>
    </>
  );
};

export default CraftCenter;
