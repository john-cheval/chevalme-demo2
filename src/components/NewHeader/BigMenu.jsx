import React, { useEffect, useState } from "react";
import { ArrowRight } from "lucide-react";

import CodeCenter from "./CodeCenter";
import CraftCenter from "./CraftCenter";
import ConvertCenter from "./ConvertCenter";
import Link from "next/link";

const BigMenu = ({ headerRef }) => {
  const [topOffset, setTopOffset] = useState(0);
  const [activeSection, setActiveSection] = useState("code");
  const [isVisible, setIsVisible] = useState(true);
  const [lastScrollY, setLastScrollY] = useState(0);

  const handleMouseEnter = (section) => {
    setActiveSection(section);
  };

  useEffect(() => {
    const updateTopOffset = () => {
      if (headerRef.current) {
        setTopOffset(headerRef.current.offsetHeight);
      }
    };

    updateTopOffset();
    window.addEventListener("resize", updateTopOffset);

    return () => window.removeEventListener("resize", updateTopOffset);
  }, [headerRef]);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > lastScrollY) {
        setIsVisible(false);
      } else {
        setIsVisible(true);
      }
      setLastScrollY(window.scrollY);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, [lastScrollY]);

  return (
    <div
      id="bigMenu"
      style={{
        top: `${topOffset}px`,
        transition: "transform 0.3s ease-in-out",
        transform: isVisible ? "translateY(0)" : "translateY(-100%)",
      }}
      className="w-full bg-white h-fit  "
    >
      <div className="pl-5 sm:pl-10 md:pl-12 border-t-[#d0d0d0]/0.5 border-t-[1px]">
        <div className="   grid grid-cols-12   overflow-hidden">
          <div
            id="leftSide"
            className="col-span-2  pt-10 border border-r-[#d0d0d0] border-t-0 border-b-0 border-l-0 space-y-5 pb-3"
          >
            <div className="flex items-center gap-7 group cursor-pointer">
              <Link
                href={"/services?section=craft"}
                className={`${activeSection === "craft" ? "bg-gradient-to-r from-[#101763] to-[#D81100] bg-clip-text text-transparent " : "text-[#a3a3a3] "} font-sora text-3xl font-bold leading-[190%] group-hover:bg-gradient-to-r group-hover:from-[#101763] group-hover:to-[#D81100] 
                 group-hover:bg-clip-text group-hover:text-transparent`}
                onMouseEnter={() => handleMouseEnter("craft")}
              >
                Craft
              </Link>
              <ArrowRight
                className={`text-[#d81100] ${activeSection === "craft" ? "opacity-100" : "opacity-0"} opacity-0 transform translate-x-[-5px] group-hover:opacity-100 group-hover:translate-x-0 transition-all duration-300 `}
              />
            </div>

            <div className="flex items-center gap-7 group cursor-pointer">
              <Link
                href={"/services?section=code"}
                className={`${activeSection === "code" ? "bg-gradient-to-r from-[#101763] to-[#D81100] bg-clip-text text-transparent " : "text-[#a3a3a3] "} font-sora text-3xl font-bold leading-[190%] group-hover:bg-gradient-to-r group-hover:from-[#101763] group-hover:to-[#D81100] 
                group-hover:bg-clip-text group-hover:text-transparent`}
                onMouseEnter={() => handleMouseEnter("code")}
              >
                Code
              </Link>
              <ArrowRight
                className={`text-[#d81100] ${activeSection === "code" ? "opacity-100" : "opacity-0"} opacity-0 transform translate-x-[-5px] group-hover:opacity-100 group-hover:translate-x-0 transition-all duration-300 `}
              />
            </div>

            <div className="flex items-center gap-7 group cursor-pointer">
              <Link
                href={"/services?section=convert"}
                className={`${activeSection === "convert" ? "bg-gradient-to-r from-[#101763] to-[#D81100] bg-clip-text text-transparent " : "text-[#a3a3a3] "} font-sora text-3xl font-bold leading-[190%] group-hover:bg-gradient-to-r group-hover:from-[#101763] group-hover:to-[#D81100] 
                group-hover:bg-clip-text group-hover:text-transparent`}
                onMouseEnter={() => handleMouseEnter("convert")}
              >
                Convert
              </Link>
              <ArrowRight
                className={`text-[#d81100] ${activeSection === "convert" ? "opacity-100" : "opacity-0"} opacity-0 transform translate-x-[-5px] group-hover:opacity-100 group-hover:translate-x-0 transition-all duration-300 `}
              />
            </div>
          </div>

          {activeSection === "code" && <CodeCenter />}
          {activeSection === "craft" && <CraftCenter />}
          {activeSection === "convert" && <ConvertCenter />}
        </div>
      </div>
    </div>
  );
};

export default BigMenu;
