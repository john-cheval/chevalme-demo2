/** @format */
"use client";
import Image from "next/image";
import React from "react";
import { useRouter } from "next/navigation";
import { format } from "date-fns";

function BlogsSection1({ data }) {
  const router = useRouter();

  return (
    <div className="relative w-screen h-fit py-32 bg-[#F6F6F4] overflow-x-hidden">
      <div className="relative flex-col space-y-10 flex h-fit w-full px-5 sm:px-10 md:px-12 text-[#101763]">
        <div className="w-full lg:h-[520px] gap-3 lg:gap-4 xl:gap-5 grid grid-rows-12 grid-cols-1 lg:grid-cols-2 ">
          {data &&
            data.length > 0 &&
            data.map(
              (data, index) =>
                index === 0 && (
                  <div
                    onClick={() => router.push(`/blogs/${data.slug}`)}
                    key={index}
                    className="row-span-12 lg:h-auto h-[520px] relative"
                  >
                    <div className="h-full w-full object-cover rounded-[2rem]">
                      <Image
                        src={data._embedded["wp:featuredmedia"][0].source_url}
                        fill={true}
                        className="rounded-[2rem] object-cover"
                        alt={data.title.rendered}
                      />
                    </div>
                    <div className="flex flex-col font-satoshi absolute bottom-0 h-full w-full justify-end bg-gradient-to-b from-50% from-transparent to-[#000] rounded-[2rem] px-10 py-10 text-white">
                      <span className="text-[10px] sm:text-xs md:text-sm font-sora py-3 leading-loose">
                        {format(new Date(data.date), "EEEE dd MMM")}
                      </span>
                      <p className="text-base sm:text-lg md:text-xl line-clamp-2 leading-relaxed">
                        {data.title.rendered}
                      </p>
                    </div>
                  </div>
                )
            )}
          {data?.length > 1 &&
            data?.map(
              (data, index) =>
                index === 1 && (
                  <div
                    onClick={() => router.push(`/blogs/${data.id}`)}
                    key={index}
                    className="row-span-6 h-[85vw] sm:h-auto relative"
                  >
                    <div className="h-full w-full object-cover rounded-[2rem]">
                      <Image
                        src={data._embedded["wp:featuredmedia"][0].source_url}
                        fill={true}
                        className="rounded-[2rem] object-cover"
                        alt={data.title.rendered}
                      />
                    </div>
                    <div className="flex flex-col font-satoshi absolute bottom-0 h-full w-full justify-end bg-gradient-to-b from-transparent to-[#000] rounded-[2rem] px-10 py-10 text-white">
                      <span className="text-[10px] sm:text-xs md:text-sm font-sora leading-loose">
                        {format(new Date(data.date), "EEEE dd MMM")}
                      </span>
                      <p className="text-base sm:text-lg md:text-xl line-clamp-2 leading-relaxed">
                        {data.title.rendered}
                      </p>
                    </div>
                  </div>
                )
            )}
          {data?.length > 2 &&
            data?.map(
              (data, index) =>
                index === 2 && (
                  <div
                    onClick={() => router.push(`/blogs/${data.id}`)}
                    key={index}
                    className="row-span-6 h-[85vw] sm:h-auto relative"
                  >
                    <div className="h-full w-full object-cover rounded-[2rem]">
                      <Image
                        src={data._embedded["wp:featuredmedia"][0].source_url}
                        fill={true}
                        className="rounded-[2rem] object-cover"
                        alt={data.title.rendered}
                      />
                    </div>
                    <div className="flex flex-col font-satoshi absolute bottom-0 h-full w-full justify-end bg-gradient-to-b from-transparent to-[#000] rounded-[2rem] px-10 py-10 text-white">
                      <span className="text-[10px] sm:text-xs md:text-sm font-sora leading-loose">
                        {format(new Date(data.date), "EEEE dd MMM")}
                      </span>
                      <p className="text-base sm:text-lg md:text-xl line-clamp-2 leading-relaxed">
                        {data.title.rendered}
                      </p>
                    </div>
                  </div>
                )
            )}
        </div>
        <div className="w-full h-fit gap-y-8 gap-3.5 grid grid-cols-3 md:grid-cols-6 lg:grid-cols-9">
          {data?.length > 3 &&
            data?.map(
              (data, index) =>
                index === 2 && (
                  <div
                    onClick={() => router.push(`/blogs/${data.id}`)}
                    key={index}
                    className="col-span-3 relative space-y-8 flex flex-col"
                  >
                    <div className="w-full h-[80vw] sm:h-[450px] md:h-80 object-cover rounded-[2rem] object-center">
                      <Image
                        src={data._embedded["wp:featuredmedia"][0].source_url}
                        fill={true}
                        className="rounded-[2rem] object-cover"
                        alt={data.title.rendered}
                      />
                    </div>
                    <div className="flex flex-col space-y-3 px-1 text-black">
                      <span className="text-[10px] sm:text-xs md:text-sm font-sora">
                        {format(new Date(data.date), "EEEE dd MMM")}
                      </span>
                      <p className="text-base sm:text-lg md:text-xl font-satoshi">
                        {data.title.rendered}
                      </p>
                    </div>
                  </div>
                )
            )}
        </div>
      </div>
    </div>
  );
}

export default BlogsSection1;
