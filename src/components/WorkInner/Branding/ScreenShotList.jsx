import Image from "next/image";
import React from "react";

const ScreenShotList = ({ data }) => {
  const isVideo = (url) => url?.endsWith(".mp4");

  return (
    <div className="relative w-full flex flex-col py-2 md:py-4 lg:py-8 xl:py-10 gap-y-5">
      {data && (
        <div className="w-full grid grid-cols-1 md:grid-cols-3 gap-8  ">
          {data?.map((img, index) =>
            img.image_type === "Half" ? (
              isVideo(img.image) ? (
                <div
                  key={index}
                  className="rounded-[1rem] overflow-hidden  col-span-1 md:col-span-2 w-full"
                >
                  <video
                    autoPlay
                    muted
                    playsInline
                    loop
                    id="video"
                    className="w-full h-full object-cover"
                    alt="work-video"
                  >
                    <source src={img.image} type="video/mp4" />
                    Your browser does not support the video tag.
                  </video>
                </div>
              ) : (
                <Image
                  key={index + 2}
                  src={img.image}
                  width={0}
                  height={0}
                  sizes="100vw"
                  className="rounded-[1rem] h-auto  w-full col-span-1 md:col-span-2 bg-transparent"
                  alt="workInner1"
                />
              )
            ) : img.image_type === "Quarter" ? (
              <div
                key={index + 1}
                className="relative col-span-1 w-full aspect-square md:aspect-auto "
              >
                {isVideo(img.image) ? (
                  <video
                    autoPlay
                    muted
                    playsInline
                    loop
                    id="video"
                    className="rounded-[1rem] w-full h-full object-cover"
                  >
                    <source src={img.image} type="video/mp4" />
                    Your browser does not support the video tag.
                  </video>
                ) : (
                  <Image
                    src={img.image}
                    fill={true}
                    className="rounded-[1rem] w-full h-auto object-cover "
                    alt="workInner1"
                    sizes="100vw"
                  />
                )}
              </div>
            ) : (
              img.image_type === "Full" &&
              (isVideo(img.image) ? (
                <div
                  key={index + 3}
                  className="rounded-[1rem] overflow-hidden h-auto col-span-1 md:col-span-3 w-full"
                >
                  <video
                    autoPlay
                    muted
                    playsInline
                    loop
                    id="video"
                    className="w-full h-full object-cover"
                    alt="work-video"
                  >
                    <source src={img.image} type="video/mp4" />
                    Your browser does not support the video tag.
                  </video>
                </div>
              ) : (
                <Image
                  key={index + 4}
                  src={img.image}
                  width={0}
                  height={0}
                  sizes="100vw"
                  className="rounded-[1rem] col-span-1 md:col-span-3 w-full bg-transparent h-auto"
                  alt="workInner1"
                />
              ))
            )
          )}
        </div>
      )}
    </div>
  );
};

export default ScreenShotList;
