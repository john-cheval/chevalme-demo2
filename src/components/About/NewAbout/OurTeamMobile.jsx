import Image from "next/image";
import Link from "next/link";
import React from "react";
import linkedin from "../../../..//public/About/Group.png";

const OurTeamMobile = ({ team }) => {
  return (
    <div className=" space-y-7 sm:space-y-10">
      {team?.map((item, index) => (
        <div className="flex flex-col space-y-4" key={index}>
          <div className=" h-full w-full rounded-[10px] overflow-hidden ">
            <Image
              className="w-full h-full object-cover object-top "
              src={item?.image}
              alt={item?.title}
              width={0}
              height={0}
              sizes="100vw"
            />
          </div>

          <div className="flex flex-col">
            <h2 className="text-center text-[#101763] font-satoshi text-xl font-medium">
              {item?.title}
            </h2>
            <h3 className="font-satoshi text-center text-[#707070] text-sm font-semibold mb-4">
              {item?.position}
            </h3>
            <p
              className="space-y-2 text-[#838383] text-center font-satoshi text-sm font-normal leading-[154%]"
              dangerouslySetInnerHTML={{ __html: item?.description }}
            ></p>
            {item?.linkedin_link && (
              <Link
                href={item?.linkedin_link}
                target="_blank"
                className="h-10 w-10 flex items-center justify-center border rounded-full mt-5 mx-auto"
              >
                <Image
                  src={linkedin}
                  alt="linkedin"
                  className="w-3 h-auto"
                  height={0}
                  width={0}
                  sizes="100vw"
                />
              </Link>
            )}
          </div>
        </div>
      ))}
    </div>
  );
};

export default OurTeamMobile;
