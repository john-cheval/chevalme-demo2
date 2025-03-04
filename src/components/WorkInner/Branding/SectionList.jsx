import Image from "next/image";
import React from "react";

const SectionList = ({ data, ID }) => {
  return (
    <>
      {data?.map((section, index) => (
        <>
          {section?.description && (
            <div
              key={index + 1}
              className="flex flex-col md:space-y-0 space-y-3 md:flex-row w-full justify-between text-[#101763] pb-3 md:pb-6 lg:pb-10 xl:pb-16"
            >
              <h5 className="font-sora font-semibold text-3xl text-center md:text-start sm:text-4xl md:text-5xl">
                {section?.title}
              </h5>
              <p
                dangerouslySetInnerHTML={{ __html: section?.description }}
                className="font-satoshi text-center md:text-start   text-[15px] md:text-base  w-full md:w-1/2 lg:w-[65%]"
              />
            </div>
          )}

          <div className="relative w-full flex flex-col gap-y-5">
            {section?.images && ID !== 2023 && (
              <div className="w-full grid-cols-1 md:grid-cols-6 grid-flow-row gap-5 h-fit grid">
                {section?.images?.map((img, index) => {
                  const fileExtension = img?.image
                    .split(".")
                    .pop()
                    .toLowerCase();
                  const isVideo = fileExtension === "mp4";

                  if (img.image_type === "Full") {
                    return isVideo ? (
                      <div
                        key={index}
                        className="w-full col-span-1 md:col-span-6 bg-transparent rounded-[1rem]"
                      >
                        <video
                          autoPlay
                          muted
                          playsInline
                          loop
                          id="video"
                          className="rounded-[1rem] w-full h-full"
                          alt="work-video"
                        >
                          <source src={img.image} type="video/mp4" />
                          Your browser does not support the video tag.
                        </video>
                      </div>
                    ) : (
                      <Image
                        key={index}
                        src={img.image}
                        overrideSrc="/Work/work1.png"
                        width={0}
                        height={0}
                        sizes="100vw"
                        className="rounded-[1rem] col-span-1 w-full h-auto md:col-span-6 object-fill"
                        alt="work-image"
                      />
                    );
                  }

                  if (img.image_type === "Half") {
                    return isVideo ? (
                      <div
                        key={index}
                        className="w-full col-span-1 md:col-span-4 bg-transparent rounded-[1rem] h-auto overflow-hidden"
                      >
                        <video
                          autoPlay
                          muted
                          playsInline
                          loop
                          id="video"
                          className="rounded-[1rem] w-full h-full"
                          alt="work-video"
                        >
                          <source src={img.image} type="video/mp4" />
                          Your browser does not support the video tag.
                        </video>
                      </div>
                    ) : (
                      <Image
                        key={index}
                        src={img.image}
                        overrideSrc="/Work/work1.png"
                        width={0}
                        height={0}
                        sizes="100vw"
                        className="rounded-[1rem] w-full col-span-1 md:col-span-4 bg-transparent h-auto"
                        alt="work-image"
                      />
                    );
                  }

                  if (img.image_type === "Quarter") {
                    return isVideo ? (
                      <div
                        key={index}
                        className="h-auto col-span-1 md:col-span-2 w-full relative aspect-square md:aspect-auto"
                      >
                        <video
                          autoPlay
                          muted
                          playsInline
                          loop
                          id="video"
                          className="rounded-[1rem] h-full w-full"
                          alt="work-video"
                        >
                          <source src={img.image} type="video/mp4" />
                          Your browser does not support the video tag.
                        </video>
                      </div>
                    ) : (
                      <div
                        key={index}
                        className="h-full col-span-1 md:col-span-2 w-full relative"
                      >
                        <Image
                          src={img.image}
                          fill={true}
                          className="rounded-[1rem] h-auto w-full object-cover"
                          alt="work-image"
                          sizes="100vw"
                        />
                      </div>
                    );
                  }

                  if (img.image_type === "Half-1") {
                    return isVideo ? (
                      <div
                        key={index}
                        className="w-full col-span-1 md:col-span-3 bg-transparent rounded-[1rem] h-auto overflow-hidden"
                      >
                        <video
                          autoPlay
                          muted
                          playsInline
                          loop
                          id="video"
                          className="rounded-[1rem] w-full h-full"
                          alt="work-video"
                        >
                          <source src={img.image} type="video/mp4" />
                          Your browser does not support the video tag.
                        </video>
                      </div>
                    ) : (
                      <Image
                        key={index}
                        src={img.image}
                        overrideSrc="/Work/work1.png"
                        width={0}
                        height={0}
                        sizes="100vw"
                        className="rounded-[1rem] w-full col-span-1 md:col-span-3 bg-transparent h-auto"
                        alt="work-image"
                      />
                    );
                  }

                  if (img.image_type === "Half-2") {
                    return isVideo ? (
                      <div
                        key={index}
                        className="w-full col-span-1 md:col-span-3 bg-transparent rounded-[1rem] h-auto overflow-hidden"
                      >
                        <video
                          autoPlay
                          muted
                          playsInline
                          loop
                          id="video"
                          className="rounded-[1rem] w-full h-full"
                          alt="work-video"
                        >
                          <source src={img.image} type="video/mp4" />
                          Your browser does not support the video tag.
                        </video>
                      </div>
                    ) : (
                      <Image
                        key={index}
                        src={img.image}
                        overrideSrc="/Work/work1.png"
                        width={0}
                        height={0}
                        sizes="100vw"
                        className="rounded-[1rem] w-full col-span-1 md:col-span-3 bg-transparent h-auto"
                        alt="work-image"
                      />
                    );
                  }

                  return null;
                })}
              </div>
            )}
          </div>
        </>
      ))}
    </>
  );
};

export default SectionList;
