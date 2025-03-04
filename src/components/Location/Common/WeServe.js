import React from "react";
import mall from "../../../../public/local_mall.svg";
import shipping from "../../../../public/local_shipping.svg";
import cast from "../../../../public/cast_for_education.svg";
import cinematic from "../../../../public/cinematic_blur.svg";
import shuttle from "../../../../public/airport_shuttle.svg";
import belt from "../../../../public/conveyor_belt.svg";
import balance from "../../../../public/account_balance.svg";
import agent from "../../../../public/real_estate_agent.svg";
import fastfood from "../../../../public/fastfood.svg";
import alert from "../../../../public/pulse_alert.svg";
import Image from "next/image";
const WeServe = () => {
  return (
    <div className="col-span-3 lg:col-span-2 h-fit w-full grid text-[#27172F] grid-cols-2">
      <div className="hidden lg:block col-span-2 h-[1px] w-full  bg-[#D8D8D8]"></div>
      <div className="py-6 col-span-2 md:col-span-1 text-base   sm:text-xl font-normal flex leading-none items-center gap-x-4 md:gap-x-6 px-3 uppercase justify-start">
        <Image src={mall} className="w-10 object-contain h-fit" />
        <h4>
          <span className="font-semibold">Retail</span> and E-commerce
        </h4>
      </div>
      <div className="py-6 col-span-2 md:col-span-1 text-base sm:text-xl font-normal flex leading-none items-center gap-x-4 md:gap-x-6 px-3 uppercase justify-start">
        <Image src={agent} className="w-10 object-contain h-fit" />
        <h4>
          <span className="font-semibold">Real Estate</span> and Property
        </h4>
      </div>
      <div className="hidden md:block col-span-2 h-[1px] w-full  bg-[#D8D8D8]"></div>
      <div className="py-6 col-span-2 md:col-span-1 text-base sm:text-xl font-normal flex leading-none items-center gap-x-4 md:gap-x-6 px-3 uppercase justify-start">
        <Image src={alert} className="w-10 object-contain h-fit" />
        <h4>
          <span className="font-semibold">Healthcare</span> and Fitness
        </h4>
      </div>
      <div className="py-6 col-span-2 md:col-span-1  text-base sm:text-xl font-normal flex leading-none items-center gap-x-4 md:gap-x-6 px-3 uppercase justify-start">
        <Image src={fastfood} className="w-10 object-contain h-fit" />
        <h4>
          <span className="font-semibold">Management </span>Food and Beverage
        </h4>
      </div>
      <div className="col-span-2 h-[1px] w-full  bg-[#D8D8D8] hidden md:block"></div>
      <div className="py-6 col-span-2 md:col-span-1 text-base sm:text-xl font-normal flex leading-none items-center gap-x-4 md:gap-x-6 px-3 uppercase justify-start">
        <Image src={balance} className="w-10 object-contain h-fit" />
        <h4>
          <span className="font-semibold">Banking</span> and Finance
        </h4>
      </div>
      <div className="py-6 col-span-2 md:col-span-1 text-base sm:text-xl font-normal flex leading-none items-center gap-x-4 md:gap-x-6 px-3 uppercase justify-start">
        <Image src={belt} className="w-10 object-contain h-fit" />
        <h4>
          <span className="font-semibold">Logistics</span> and Transportation
        </h4>
      </div>
      <div className="col-span-2 h-[1px] w-full  bg-[#D8D8D8] hidden md:block"></div>
      <div className="py-6 col-span-2 md:col-span-1 text-base sm:text-xl font-normal flex leading-none items-center gap-x-4 md:gap-x-6 px-3 uppercase justify-start">
        <Image src={shuttle} className="w-10 object-contain h-fit" />
        <h4>
          <span className="font-semibold">Travel </span> and Hospitality
        </h4>
      </div>
      <div className="py-6 col-span-2 md:col-span-1 text-base sm:text-xl font-normal flex leading-none items-center gap-x-4 md:gap-x-6 px-3 uppercase justify-start">
        <Image src={cinematic} className="w-10 object-contain h-fit" />
        <h4>
          <span className="font-semibold">Entertainment </span>
          and Media
        </h4>
      </div>
      <div className="col-span-2 h-[1px] w-full  bg-[#D8D8D8] hidden md:block"></div>
      <div className="py-6 col-span-2 md:col-span-1 text-base sm:text-xl font-normal flex leading-none items-center gap-x-4 md:gap-x-6 px-3 uppercase justify-start">
        <Image src={cast} className="w-10 object-contain h-fit" />
        <h4>
          <span className="font-semibold">Education</span> and E-learning
        </h4>
      </div>
      <div className="py-6 col-span-2 md:col-span-1 text-base sm:text-xl font-normal flex leading-none items-center gap-x-4 md:gap-x-6 px-3 uppercase justify-start">
        <Image src={shipping} className="w-10 object-contain h-fit" />
        <h4>
          <span className="font-semibold">Automotive </span>
          and Transportation
        </h4>
      </div>
      <div className="col-span-2 h-[1px] w-full  bg-[#D8D8D8] hidden md:block"></div>
    </div>
  );
};

export default WeServe;
