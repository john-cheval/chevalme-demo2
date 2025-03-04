import DarkButton from "@/components/Buttons/DarkButton";
import Image from "next/image";
import React from "react";

const WorkMobile = ({ data }) => {
  const isVideo = (url) => url?.endsWith(".mp4");

  return (
    <div className="px-5 sm:px-10  md:px-12">
      {" "}
      <h1 className="font-semibold   text-[#D81100] font-sora tracking-tighter text-[60px] sm:text-[70px] text-center">
        Works
      </h1>
      <div className="flex flex-col space-y-7 sm:space-y-10 ">
        {data &&
          Object.keys(data)?.map((key, index) => (
            <div
              key={index}
              className="w-full h-fit   mt-5 sm:mt-0 relative   sm:bg-transparent bg-[#F6F6F4] rounded-[30px]  overflow-hidden"
            >
              <div className=" w-full relative h-full   ">
                {isVideo(data[key]?.home_image) ? (
                  <video
                    autoPlay
                    loop
                    muted
                    playsInline
                    controlsList="nodownload"
                    className="object-center object-cover  rounded-[30px] w-full h-auto"
                  >
                    <source src={"./Home/work/card1.mp4"} type="video/mp4" />
                    Your browser does not support the video tag.
                  </video>
                ) : (
                  <Image
                    src={data[key]?.list_page_image?.url}
                    alt={data[key]?.home_title || "work"}
                    className="object-cover rounded-[30px] h-auto w-full"
                    width={0}
                    height={0}
                    sizes="100vw"
                  />
                )}
                <div className="absolute inset-0"></div>
              </div>

              <div className="flex flex-col items-center pt-4">
                <h1 className="font-sora   text-center text-3xl sm:text-4xl  tracking-tighter text-black font-extralight mb-3 ">
                  {data[key].home_title.split(" ")[0] +
                    " " +
                    (data[key].home_title.split(" ")[1]
                      ? " " + data[key].home_title.split(" ")[1]
                      : "")}
                </h1>

                {data[key]?.projects_category && (
                  <div className=" flex-row space-x-2 sm:space-x-3  sm:flex hidden mb-5">
                    {data[key]?.projects_category?.map(
                      (category, index) =>
                        index < 3 && (
                          <div
                            className="font-sora text-[6px] sm:text-[8px]  uppercase py-2.5 px-6 w-fit min-w-[125px] text-center border   text-black  rounded-3xl"
                            key={index}
                          >
                            {category.name}
                          </div>
                        )
                    )}
                  </div>
                )}

                <p
                  style={{ lineHeight: 1.3 }}
                  className=" font-sora  font-extralight  text-base sm:text-2xl   sm:tracking-[-1.76px]   text-center  text-black   "
                >
                  {data[key]?.home_description}
                </p>

                <div
                  onClick={() =>
                    router.push(`/projects/${data[key]?.post_name}`)
                  }
                  className={`w-full md:hidden   h-fit pb-6  border-b group ${data[key]?.ID === 2590 ? "border-b-0" : "border-b"}  cursor-pointer border-black  border-dotted flex items-center justify-center`}
                >
                  <DarkButton
                    link={`/projects/${data[key]?.post_name}`}
                    text={"View Case Study"}
                  />
                </div>
              </div>
            </div>
          ))}
      </div>
    </div>
  );
};

export default WorkMobile;
