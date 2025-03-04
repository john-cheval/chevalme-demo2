import { digitalMarketing, seo, socialMedia } from "@/data/NavbarLinks";
import Image from "next/image";
import Link from "next/link";
import React from "react";
import ConvertImage from "../../../public/Header/convert.png";

const ConvertCenter = () => {
  return (
    <>
      <div
        id="rightSideConvert"
        className="col-span-7 px-9 p-10 flex space-x-24"
      >
        <div className="space-y-2">
          <h2 className="font-sora font-base font-semibold leading-[190%]-- heading-gradient">
            <Link href="/service/search-engine-optimization-seo">
              Search Engine Optimisation
            </Link>
          </h2>
          <ul className="space-y-3">
            {seo?.map((data, index) => (
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
            <Link href="/service/social-media-management">
              Social Media Management
            </Link>
          </h2>
          <ul className="space-y-3">
            {socialMedia?.map((data, index) => (
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
            <Link href="/service/digital-marketing">Digital Marketing</Link>
          </h2>
          <ul className="space-y-3">
            {digitalMarketing?.map((data, index) => (
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
      </div>

      <div className="relative col-span-3 w-full h-auto">
        <Image
          src={ConvertImage}
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

export default ConvertCenter;
