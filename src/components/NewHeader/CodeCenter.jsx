import Image from "next/image";
import Link from "next/link";
import React from "react";
import CodeImage from "../../../public/Header/code.png";

const CodeCenter = ({ codeLinks }) => {
  const { eCommerce, mobileApps, webDev, websites } = codeLinks;
  return (
    <>
      <div
        id="rightSideCode"
        className="col-span-7 bigMenuCol px-9 p-10 flex bigMain-gap gap-x-24"
      >
        <div className="space-y-2">
          <h2 className="font-sora font-base font-semibold leading-[190%]-------- heading-gradient">
            <Link href="/service/mobile-apps">Mobile App</Link>
          </h2>
          <ul className="space-y-3 linksGap">
            {mobileApps?.map((data, index) => (
              <li
                className="font-satoshi text-[#101763] text-sm font-normal leading-[182%]-- hover:text-[#d81100] transition-all duration-300 "
                key={index}
              >
                <Link href={data?.link}>{data?.name}</Link>
              </li>
            ))}
          </ul>
        </div>

        <div className="space-y-2">
          <h2 className="font-sora font-base font-semibold leading-[190%]-- heading-gradient">
            <Link href="/service/web-development">Web Development</Link>
          </h2>
          <ul className="space-y-3 linksGap">
            {webDev?.map((data, index) => (
              <li
                className="font-satoshi text-[#101763] text-sm font-normal leading-[182%]-- hover:text-[#d81100] transition-all duration-300 "
                key={index}
              >
                <Link href={data?.link}>{data?.name}</Link>
              </li>
            ))}
          </ul>
        </div>

        <div className="space-y-2">
          <h2 className="font-sora font-base font-semibold leading-[190%]-- heading-gradient">
            <Link href="/service/ecommerce-solutions">Ecommerce</Link>
          </h2>
          <ul className="space-y-3 linksGap">
            {eCommerce?.map((data, index) => (
              <li
                className="font-satoshi text-[#101763] text-sm font-normal leading-[182%] hover:text-[#d81100] transition-all duration-300 "
                key={index}
              >
                <Link href={data?.link}>{data?.title}</Link>
              </li>
            ))}
          </ul>
        </div>

        <div className="space-y-2">
          <h2 className="font-sora font-base font-semibold leading-[190%]-- heading-gradient">
            <Link href="/service/website-development">Websites</Link>
          </h2>
          <ul className="space-y-3 linksGap">
            {websites?.map((data, index) => (
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
      <div className="relative col-span-3 w-full h-full big_image">
        <Image
          src={CodeImage}
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

export default CodeCenter;
