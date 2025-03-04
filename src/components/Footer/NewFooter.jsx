"use client";
import Image from "next/image";
import Link from "next/link";
import React, { useEffect } from "react";
import fb from "../../../public/Footer/social/fb.svg";
import insta from "../../../public/Footer/social/instagram.svg";
import linkedin from "../../../public/Footer/social/linkedin.svg";
import arrowForward from "../../../public/Footer/arrow_forward.svg";
import footerLine from "../../../public/Footer/footer_line.svg";
import FooterMobile from "./FooterMobile";
import { location, ourServices } from "@/data/FooterLinks";

const NewFooter = () => {
  useEffect(() => {
    console.log(window.innerWidth, "innerWidth");
  }, []);
  return (
    <footer className="relative z-[1000] w-screen h-fit  text-white overflow-hidden bg-black md:bg-footer-bg  bg-conver bg-no-repeat   ">
      {/* Overlay Ellips */}
      <div className="w-full  pb-5 pt-10 md:pt-16 lg:pt-[86px]   px-5 sm:px-10 md:px-12  ">
        <div className="absolute hidden md:block bg-footer-grad bottom-0 right-0 z-10" />
        <div className="flex flex-col">
          <div className="grid grid-cols-12 gap-3 lg:gap-4 xl:gap-6 justify-items-center xl:justify-items-start   ">
            {/* left */}
            <div className=" col-span-12 xl:col-span-6">
              <div className="flex flex-col space-y-3">
                <h3 className="font-sora  font-light text-white  text-2xl md:text-4xl lg:text-5xl text-center xl:text-start ">
                  Call us / text us,
                </h3>
                <p className="font-sora font-normal text-3xl sm:text-4xl  md:text-5xl lg:text-6xl">
                  Let’s get to work!
                </p>
              </div>
            </div>
            {/* right */}
            <div className=" flex flex-col  col-span-12 xl:col-span-6 ">
              <div className=" xl:flex-col xl:space-y-6 flex flex-col sm:flex-row xl:items-start xl:justify-start items-center justify-center space-x-2  ">
                <Link
                  href={"mailto:info@chevalme.com"}
                  className="font-sora font-normal text-base sm:text-2xl md:text-3xl xl:text-[42px] "
                >
                  info@chevalme.com
                </Link>
                <span className="xl:hidden font-sora font-normal text-base sm:text-2xl md:text-3xl xl:text-[42px] hidden sm:block   ">
                  |
                </span>
                <Link
                  href={"tel:+971 50 356 0927"}
                  className="font-sora font-normal text-base sm:text-2xl md:text-3xl xl:text-[42px]  "
                >
                  +971 50 356 0927
                </Link>
              </div>
              <div className=" hidden md:flex  flex-col sm:flex-row items-center justify-center  gap-[20px] md:gap-[50px] 2xl:gap-[69px]  w-full py-10 sm:py-14 md:pt-14 pb-10 z-50 ">
                <div className="flex flex-col  space-y-4  items-center justify-center md:items-start md:justify-start">
                  <div>
                    <h6 className="font-satoshi  text-xl sm:text-sm md:text-base font-medium  text-white mb-2 flex items-center justify-center ">
                      We Serve In
                    </h6>
                    <Image
                      src={footerLine}
                      alt="line"
                      height={0}
                      width={0}
                      sizes="100vw"
                      className="w-11 h-auto"
                    />
                  </div>
                  <div className="flex flex-col  space-y-0">
                    {location?.map((location, index) => (
                      <Link
                        className="cursor-pointer"
                        href={location?.href}
                        key={index}
                      >
                        <p className="font-satoshi font-normal  border-b border-b-transparent hover:border-b-transparent hover:text-[#d81100] duration-300 transition-all text-lg md:text-base text-white leading-[2.3] sm:leading-[2.2] md:leading-[2.3]">
                          {location?.text}
                        </p>
                      </Link>
                    ))}
                  </div>
                </div>
                <div className="flex flex-col space-y-4 items-center justify-center md:items-start md:justify-start">
                  <div>
                    <h6 className="font-satoshi   text-xl md:text-base font-medium  text-white mb-2 flex items-center justify-center ">
                      Services
                    </h6>
                    <Image
                      src={footerLine}
                      alt="line"
                      height={0}
                      width={0}
                      sizes="100vw"
                      className="w-11 h-auto"
                    />
                  </div>
                  <div className="flex flex-col space-y-0">
                    {ourServices?.map((service, index) => (
                      <Link
                        key={index}
                        className="cursor-pointer"
                        href={service?.href}
                      >
                        <p className="font-satoshi font-normal  border-b border-b-transparent hover:border-b-transparent hover:text-[#d81100] duration-300 transition-all text-lg md:text-base text-white leading-[2.3] sm:leading-[2.2] md:leading-[2.3]">
                          {service?.text}
                        </p>
                      </Link>
                    ))}
                  </div>
                </div>
                <div className="flex flex-col space-y-4 items-center justify-center md:items-start md:justify-start ">
                  <div>
                    <h6 className="font-satoshi  text-xl md:text-base font-medium  text-white mb-2 flex  ">
                      Connect
                    </h6>
                    <Image
                      src={footerLine}
                      alt="line"
                      height={0}
                      width={0}
                      sizes="100vw"
                      className="w-11 h-auto"
                    />
                  </div>
                  <div className="flex flex-col space-y-0 items-center justify-center md:items-start md:justify-start">
                    <Link
                      className="cursor-pointer"
                      href={"mailto:info@chevalme.com"}
                    >
                      <p className="font-satoshi font-normal  border-b border-b-transparent hover:border-b-transparent hover:text-[#d81100] duration-300 transition-all text-lg md:text-base text-white leading-[2.3] sm:leading-[2.2] md:leading-[2.3]">
                        info@chevalme.com
                      </p>
                    </Link>
                    <Link className="cursor-pointer" href={"tel:+971503560927"}>
                      <p className="font-satoshi font-normal  border-b border-b-transparent hover:border-b-transparent hover:text-[#d81100] duration-300 transition-all text-lg md:text-base text-white leading-[2.3] sm:leading-[2.2] md:leading-[2.3]">
                        +971 50 356 0927
                      </p>
                    </Link>

                    <Link
                      target="_blank"
                      href={"https://maps.app.goo.gl/Y26or1kGZwuEGq5s6"}
                    >
                      <p className="font-satoshi font-normal  border-b border-b-transparent hover:border-b-transparent hover:text-[#d81100] duration-300 transition-all text-lg md:text-base text-white leading-[2.3] sm:leading-[2.2] md:leading-[2.3] text-center sm:text-start">
                        Suite 1, 101, Capital Golden Tower,
                        <br /> Business Bay, Dubai, UAE
                      </p>
                    </Link>

                    <div className="flex flex-row space-x-3 !mt-3 md:!mt-2 ">
                      <Link
                        target="_blank"
                        className="cursor-pointer border border-[#4c4c4c] hover:border-[#d81100] transition-all bg-[#272727] h-10 w-10 flex items-center justify-center rounded-full "
                        href={"https://www.facebook.com/chevalmiddleeast"}
                      >
                        <Image
                          src={fb}
                          className="h-4 object-contain"
                          alt="facebook"
                        />
                      </Link>

                      <Link
                        target="_blank"
                        className="cursor-pointer border border-[#4c4c4c] hover:border-[#d81100] transition-all bg-[#272727] h-10 w-10 flex items-center justify-center rounded-full"
                        href={"https://www.instagram.com/chevalmiddleeast/"}
                      >
                        <Image
                          src={insta}
                          className="h-4 object-contain"
                          alt="instagram"
                        />
                      </Link>

                      <Link
                        target="_blank"
                        className="cursor-pointer border border-[#4c4c4c] hover:border-[#d81100] transition-all bg-[#272727] h-10 w-10 flex items-center justify-center rounded-full"
                        href={
                          "https://www.linkedin.com/company/chevalmiddleeast/"
                        }
                      >
                        <Image
                          src={linkedin}
                          className="h-3 object-contain"
                          alt="linkedin"
                        />
                      </Link>
                    </div>
                  </div>
                </div>
              </div>
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d57787.433334419904!2d55.16559858442186!3d25.1453385510925!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3e5f699813fd9451%3A0xc4b554ceb43cff51!2sCheval%20ME!5e0!3m2!1sen!2sin!4v1695555265331!5m2!1sen!2sin"
                title="Best Web Solution Agency in UAE"
                allowFullScreen=""
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                className=" max-w-[350px]-- xl:w-full-- w-full h-[210px]  rounded-[10px] mb-4 hidden md:block "
              ></iframe>
            </div>
          </div>

          <div className="w-full pt-0 sm:pt-10-- z-50 pb-5 hidden md:block">
            <div
              className={
                "grid grid-cols-12 gap-3 lg:gap-4 xl:gap-6 justify-items-center xl:justify-items-start mx-auto "
              }
            >
              <div className="md:flex hidden  col-span-9 flex-row space-x-4  xl:space-x-5 mt-5 xl:mt-0 items-end ">
                <p className="font-satoshi text-xs border-b border-b-transparent hover:border-b-transparent  sm:text-sm md:text-base text-white font-normal  lg:leading-[2.3] ">
                  Cheval 2025 All rights reserved
                </p>
                <Link
                  href={"/privacy-policy"}
                  className="font-satoshi font-normal text-xs  border-b-transparent hover:border-b-transparent hover:text-[#d81100] duration-300 transition-all sm:text-sm md:text-base text-white leading-[2.3] lg:leading-[2.3] cursor-pointer"
                >
                  Privacy Policy
                </Link>
              </div>

              <div className="col-span-3 flex  w-full  items-start justify-start xl:justify-end xl:items-end">
                <Link
                  href={"#"}
                  className="h-[50px]  w-[50px] xl:h-[60px]  xl:w-[60px]  rounded-full  items-center justify-center border border-white hover:border-[#d81100] duration-300 transition-all  flex  justify-self-end "
                >
                  <Image
                    src={arrowForward}
                    alt="arrow_forward"
                    className="w-4 object-cover"
                  />
                </Link>
              </div>
            </div>
          </div>

          {/* moblie */}
          <div className="md:hidden w-full mt-9">
            <FooterMobile />
            <div className="md:hidden  flex flex-row space-x-4 mt-7 items-center justify-center ">
              <Link
                target="_blank"
                className="cursor-pointer border border-[#4c4c4c] hover:border-[#d81100] transition-all bg-[#272727] h-10 w-10 flex items-center justify-center rounded-full "
                href={"https://www.facebook.com/chevalmiddleeast"}
              >
                <Image src={fb} className="h-4 object-contain" alt="facebook" />
              </Link>

              <Link
                target="_blank"
                className="cursor-pointer border border-[#4c4c4c] hover:border-[#d81100] transition-all bg-[#272727] h-10 w-10 flex items-center justify-center rounded-full"
                href={"https://www.instagram.com/chevalmiddleeast/"}
              >
                <Image
                  src={insta}
                  className="h-4 object-contain"
                  alt="instagram"
                />
              </Link>

              <Link
                target="_blank"
                className="cursor-pointer border border-[#4c4c4c] hover:border-[#d81100] transition-all bg-[#272727] h-10 w-10 flex items-center justify-center rounded-full"
                href={"https://www.linkedin.com/company/chevalmiddleeast/"}
              >
                <Image
                  src={linkedin}
                  className="h-3 object-contain"
                  alt="linkedin"
                />
              </Link>
            </div>

            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d57787.433334419904!2d55.16559858442186!3d25.1453385510925!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3e5f699813fd9451%3A0xc4b554ceb43cff51!2sCheval%20ME!5e0!3m2!1sen!2sin!4v1695555265331!5m2!1sen!2sin"
              title="Best Web Solution Agency in UAE"
              allowFullScreen=""
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              className=" w-full  h-[210px]  rounded-[10px] mx-auto mt-7 "
            ></iframe>
            <div className="flex flex-col sm:flex-row sm:justify-between items-center mt-6 md:hidden space-y-4 sm:space-y-0">
              <div className="flex flex-col xl:flex-row  xl:space-x-5 ">
                <Link
                  href={"/privacy-policy"}
                  className="text-white text-base font-satoshi font-normal leading-[217%] text-center sm:text-left hover:text-[#d81100] duration-300 transition-all"
                >
                  Privacy Policy
                </Link>
                <p className="text-white text-base font-satoshi font-normal leading-[217%]">
                  Cheval 2025 All rights reserved
                </p>
              </div>

              <Link
                href={"#"}
                className=" h-[50px] w-[50px] rounded-full  items-center justify-center border border-white hover:border-[#d81100] duration-300 transition-all hidden-- flex  "
              >
                <Image
                  src={arrowForward}
                  alt="arrow_forward"
                  className="w-4 object-cover"
                />
              </Link>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default NewFooter;
