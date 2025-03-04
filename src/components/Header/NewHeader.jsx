/** @format */
"use client";
import Image from "next/image";
import React, { useEffect, useState } from "react";
import logo from "../../../public/logo.svg";
import logoWhite from "../../../public/Header/logo_white.svg";
import menu from "../../../public/menu.svg";
import close from "../../../public/close.svg";
import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import ScrollTrigger from "gsap/dist/ScrollTrigger";
import Link from "next/link";
import whatsapp from "../../../public/whatsapp.png";
import fb from "../../../public/fb-footer.png";
import insta from "../../../public/insta-footer.png";
import linkedin from "../../../public/linkedin-footer.png";
import { usePathname } from "next/navigation";
import { Mail, Phone } from "lucide-react";
function Header() {
  const pathname = usePathname();
  const darkBG = ["/services", "/work"];
  const [showMessage, setShowMessage] = useState(false);

  useEffect(() => {
    setShowMessage(true);
    const timer = setTimeout(() => setShowMessage(false), 5000);
    return () => clearTimeout(timer);
  }, []);

  const handleMouseEnter = () => {
    setShowMessage(true);
    const timer = setTimeout(() => setShowMessage(false), 5000);
    return () => clearTimeout(timer);
  };

  const [active, setActive] = useState(pathname);
  useGSAP(() => {
    gsap.registerPlugin(ScrollTrigger);
    const loading = gsap.timeline();
    loading.from("#headerContainer img, #headerContainer p", {
      y: -10,
      opacity: 0,
      duration: 1,
      stagger: {
        amount: 0.4,
      },
    });
    const tl = gsap.timeline({
      paused: true,
    });

    tl.to("#headerContainer", {
      backdropFilter: "blur(16px)",
      backgroundColor: "rgba(255, 255, 255, 0.8)",
      border: "1px solid rgba(255, 255, 255, 0.3)",
      boxShadow: "0 8px 32px rgba(0, 0, 0, 0.2)",
    });

    if (pathname === "/") {
      ScrollTrigger.create({
        start: "top+=10",
        end: "+=1",
        onEnter: () => {
          tl.play();
        },
        onLeaveBack: () => {
          tl.reverse();
        },
      });
    } else {
      ScrollTrigger.create({
        start: "top+=10",
        end: "+=1",
        onEnter: () => {
          tl.play();
        },
        onLeaveBack: () => {
          tl.reverse();
        },
      });
    }
  }, []);
  let menuGG = gsap.timeline({
    paused: true,
  });
  useEffect(() => {
    gsap.set(
      "#mblMenuHeader img, #mblMenuHeader p, #mblMenuFooter button, #mblMenuFooter p, #mblMenuFooter div, #mblMenuItems p",
      {
        y: -10,
        opacity: 0,
      }
    );
    menuGG
      .to("#mblMenu", {
        zIndex: 100,
      })
      .to("#mblMenu", {
        opacity: 1,
      })
      .to(
        "#mblMenuHeader img, #mblMenuHeader p, #mblMenuItems p, #mblMenuFooter button, #mblMenuFooter p, #mblMenuFooter div",
        {
          y: 0,
          opacity: 1,
          stagger: {
            amount: 0.4,
          },
        },
        "-=30%"
      );
  });
  function menuOpen() {
    menuGG.play();
  }
  function menuClose() {
    menuGG.reverse();
  }
  return (
    <>
      <header
        id="header"
        className={`fixed top-0  z-[9999] font-satoshi w-full ${darkBG.includes(pathname) ? "bg-black" : ""} `}
      >
        <div className="max-w-screen mx-auto w-full">
          <div
            id="headerContainer"
            className="px-5 sm:px-10 md:px-12 flex transition-all ease-out duration-300  items-center  justify-between pb-7 md:pb-8  w-full h-fit max-w-screen"
          >
            <Link href={"/"}>
              <Image
                src={darkBG.includes(pathname) ? logoWhite : logo}
                className="h-6 xl:h-8 object-contain"
                alt="logo"
              />
            </Link>

            <div className=" hidden sm:flex items-center  text-sm font-medium  space-x-6 md:space-x-8 lg:space-x-10 uppercase">
              <Link href={"/about"}>
                <p
                  className={
                    active === "/about"
                      ? "hover:text-[#D81100] text-[#D81100] transition-colors duration-300"
                      : `hover:text-[#D81100] ${darkBG?.includes(pathname) ? "text-white" : "text-black"} transition-colors duration-300`
                  }
                >
                  About
                </p>
              </Link>
              <Link href={"/projects"}>
                <p
                  className={
                    active === "/work"
                      ? "hover:text-[#D81100] text-[#D81100] transition-colors duration-300"
                      : `hover:text-[#D81100] ${darkBG?.includes(pathname) ? "text-white" : "text-black"} transition-colors duration-300`
                  }
                >
                  Work
                </p>
              </Link>
              <Link href={"/service"}>
                <p
                  className={
                    active === "/services"
                      ? "hover:text-[#D81100] text-[#D81100] transition-colors duration-300"
                      : `hover:text-[#D81100] ${darkBG?.includes(pathname) ? "text-white" : "text-black"} transition-colors duration-300`
                  }
                >
                  Services
                </p>
              </Link>

              <Link href={"/contact-us"}>
                <p
                  className={
                    active === "/contact-us"
                      ? "hover:text-[#D81100] text-[#D81100] transition-colors duration-300"
                      : `hover:text-[#D81100] ${darkBG?.includes(pathname) ? "text-white" : "text-black"} transition-colors duration-300`
                  }
                >
                  Contact
                </p>
              </Link>
              <Link href={"tel:+971 50 356 0927"}>
                <p
                  className={`hover:text-[#D81100] ${darkBG?.includes(pathname) ? "text-white" : "text-black"} transition-colors duration-300 flex items-center gap-2 font-medium`}
                >
                  <Phone size={"18px"} color="#D81100" />{" "}
                  <span className="hidden lg:block">+971 50 356 0927</span>
                </p>
              </Link>
              <Link href={"mailto:info@chevalme.com"}>
                <p
                  className={`hover:text-[#D81100] transition-colors duration-300 flex items-center gap-2 font-medium normal-case ${darkBG?.includes(pathname) ? "text-white" : "text-black"} `}
                >
                  <Mail size={"18px"} color="#D81100" />{" "}
                  <span className="hidden lg:block">info@chevalme.com</span>
                </p>
              </Link>
            </div>
            <div className="sm:hidden flex">
              <Image
                onClick={menuOpen}
                src={menu}
                className="h-9 object-contain"
                alt="menu"
              />
            </div>
          </div>
        </div>

        <div className="fixed bottom-6 right-6">
          <Link
            href="https://web.whatsapp.com/send?phone=%2B971503560927&text=Hello!+I+am+interested+in+your+service"
            target="_blank"
            rel="noopener noreferrer"
          >
            <div
              className="whapp animated pulse"
              onMouseEnter={handleMouseEnter}
            >
              <div className="whapp-btn">
                <Image
                  className="w-8 object-contain"
                  src={whatsapp}
                  alt="WhatsApp"
                  width={32}
                  height={32}
                />
                <span className="red-dot"></span>
              </div>
            </div>
          </Link>
        </div>
      </header>
      <div
        className="fixed opacity-0 h-[100dvh] w-screen -z-10 bg-white"
        id="mblMenu"
      >
        <div className="max-w-screen mx-auto absolute top-0 w-full">
          <div
            id="mblMenuHeader"
            className="px-5 sm:px-10 md:px-12 flex transition-all ease-out duration-300  items-center  justify-between py-7 md:py-8 lg:py-9 xl:py-10 w-full h-fit max-w-screen"
          >
            <Link href={"/"}>
              <Image
                src={logo}
                className="h-6 xl:h-8 object-contain"
                alt="logo"
              />
            </Link>

            <div className=" hidden sm:flex items-center  text-sm font-medium  space-x-6 md:space-x-8 lg:space-x-10 uppercase">
              <Link href={"/about"}>
                <p className="hover:text-[#D81100] transition-colors duration-300">
                  About
                </p>
              </Link>
              <Link href={"/projects"}>
                <p className="hover:text-[#D81100] transition-colors duration-300">
                  Work
                </p>
              </Link>
              <Link href={"/service"}>
                <p className="hover:text-[#D81100] transition-colors duration-300">
                  Services
                </p>
              </Link>

              <Link href={"/contact-us"}>
                <p className="hover:text-[#D81100] transition-colors duration-300">
                  Contact
                </p>
              </Link>
            </div>
            <div className="sm:hidden flex">
              <Image
                onClick={menuClose}
                src={close}
                className="h-9 object-contain"
                alt="close"
              />
            </div>
          </div>
        </div>
        <div className="flex flex-col justify-between h-[100dvh] w-screen px-5 items-center pt-52 pb-[10vh]">
          <div
            id="mblMenuItems"
            className="flex flex-col font-sora font-semibold text-3xl uppercase text-[#101763] items-center justify-center w-screen h-fit  space-y-10"
          >
            <Link href={"/about"}>
              <p
                className={
                  active === "/about"
                    ? "hover:text-[#D81100] text-[#D81100] transition-colors duration-300"
                    : "hover:text-[#D81100]  transition-colors duration-300"
                }
              >
                About
              </p>
            </Link>
            <Link href={"/projects"}>
              <p
                className={
                  active === "/work"
                    ? "hover:text-[#D81100] text-[#D81100] transition-colors duration-300"
                    : "hover:text-[#D81100]  transition-colors duration-300"
                }
              >
                Work
              </p>
            </Link>
            <Link href={"/service"}>
              <p
                className={
                  active === "/services"
                    ? "hover:text-[#D81100] text-[#D81100] transition-colors duration-300"
                    : "hover:text-[#D81100]  transition-colors duration-300"
                }
              >
                Services
              </p>
            </Link>

            <Link href={"/contact-us"}>
              <p
                className={
                  active === "/contact-us"
                    ? "hover:text-[#D81100] text-[#D81100] transition-colors duration-300"
                    : "hover:text-[#D81100]  transition-colors duration-300"
                }
              >
                Contact
              </p>
            </Link>
          </div>
          <div id="mblMenuLine" className="w-14 h-[1px] bg-[#101763]"></div>
          <div
            id="mblMenuFooter"
            className="flex flex-col items-center justify-center space-y-8"
          >
            <button className="bg-[#D81100]  w-28 md:w-36 font-sora  h-10 md:h-12 rounded-[50px] mt-5 text-white text-xs md:text-sm">
              Enquire
            </button>
            <p className="max-w-[259px] font-satoshi text-xs text-center text-[#101763]">
              We made honest design and thoughtful experiences in a human
              dimension
            </p>
            <div className="flex flex-row space-x-1">
              {" "}
              <Link
                className="cursor-pointer"
                href={"https://www.facebook.com/chevalmiddleeast"}
              >
                <Image src={fb} className="h-3 object-contain" alt="facebook" />
              </Link>
              <Link
                className="cursor-pointer"
                href={"https://www.instagram.com/chevalmiddleeast/"}
              >
                <Image
                  src={insta}
                  className="h-3 object-contain"
                  alt="instagram"
                />
              </Link>
              <Link
                className="cursor-pointer"
                href={"https://www.linkedin.com/company/chevalmiddleeast/"}
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
    </>
  );
}

export default Header;
