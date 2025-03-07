"use client";
import React, { useState } from "react";
import linkedin from "../../../..//public/About/Group.png";
import Image from "next/image";
import Link from "next/link";
import OurTeamMobile from "./OurTeamMobile";
// import gradient from "../../../../public/About/memberGradient.svg";
import OurValues from "./OurValues";

const OurTeam = ({ title, team, data }) => {
  // const [activeCard, setActiveCard] = useState(0);

  // const handleCardClick = (id) => {
  //   setActiveCard(id);
  // };

  return (
    <div
      className="px-5 sm:px-10 md:px-12 bg-about-member-gradient lg:rounded-tr-[60px] lg:rounded-tl-[60px] pt-14 -mt-16 relative"
      style={{ zIndex: 4 }}
    >
      <h1 className="mb-8 text-center text-[#101763] lg:text-start  font-sora text-3xl sm:text-4xl lg:text-6xl font-normal leading-[133%] tracking-[-1.76px] heading2">
        {title}
      </h1>

      <div className="containers">
        {team?.map((item, index) => (
          <div
            key={index}
            // className={`cards ${activeCard === index ? "active" : ""}`}
            className="cards active"
            // onClick={() => handleCardClick(index)}
            // style={{
            //   backgroundImage: `url(${item?.image})`,
            //   backgroundSize: "cover",
            //   backgroundPosition: "center",
            // }}
          >
            {/* {activeCard === index && ( */}
            <>
              <div className="image-container">
                <Image
                  className="card-image"
                  src={item?.image}
                  alt={item?.title}
                  width={0}
                  height={0}
                  sizes="100vw"
                />
              </div>
              <div className="content font-satoshi">
                <h1>{item?.title}</h1>
                <h3>{item?.position}</h3>
                <div
                  className="space-y-3 para team-des"
                  dangerouslySetInnerHTML={{ __html: item?.description }}
                ></div>

                {item?.linkedin_link && (
                  <Link
                    href={item?.linkedin_link}
                    className="h-12 w-12 flex items-center justify-center border rounded-full mt-5"
                  >
                    <Image
                      src={linkedin}
                      alt="linkedin"
                      className="w-4 h-auto"
                      height={0}
                      width={0}
                      sizes="100vw"
                    />
                  </Link>
                )}
              </div>
            </>
            {/* )} */}

            {/* {activeCard !== index && (
              <div className="non-active-content font-satoshi relative">
                <h1 className=" mr-[20px] xl:mr-[47px] mt-10 z-20">
                  {item?.title}
                </h1>
                <h3 className="mt-10 z-20">{item?.position}</h3>

                <div className="h-full w-full absolute inset-0 z-10 ">
                  <Image
                    className="object-cover h-full w-full rotate-180"
                    src={gradient}
                    alt={item?.title}
                    width={0}
                    height={0}
                    sizes="100vw"
                  />
                </div>
              </div>
            )} */}
          </div>
        ))}
      </div>

      <div className="lg:hidden">
        <OurTeamMobile team={team} />
      </div>

      <OurValues valuesData={data} />
    </div>
  );
};

export default OurTeam;
