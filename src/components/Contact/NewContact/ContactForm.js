"use client";
import Image from "next/image";
import React, { useRef, useState } from "react";
import arrowDown from "../../../../public/Contact/arrow_down.png";
import arrowForward from "../../../../public/Contact/arrow-white.png";
import axios from "axios";
import { usePathname, useRouter } from "next/navigation";

const ContactForm = ({ services, title }) => {
  const router = usePathname();
  const formRef = useRef(null);
  const [formData, setFormData] = useState({
    textName: "",
    textPhone: "",
    emailAddress: "",
    textCompany: "",
    textareaMsg: "",
    selectedService: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    const newformData = new FormData();
    newformData.append("text-name", formData.textName);
    newformData.append("text-phone", formData.textPhone);
    newformData.append("email-address", formData.emailAddress);
    newformData.append("text-company", formData.textCompany);
    newformData.append("textarea-msg", formData.textareaMsg);
    newformData.append("selected-service", formData.selectedService);
    newformData.append("_wpcf7_unit_tag", "2fcfb42");
    try {
      const response = await axios({
        method: "POST",
        url: "https://d331b20430.nxcli.net/chevalapi/wp-json/contact-form-7/v1/contact-forms/5/feedback",
        data: newformData,
        headers: { "Content-Type": "multipart/form-data" },
      });
      if (!response) {
        throw new Error("Network response was not ok");
      }
      setFormData({
        textName: "",
        textPhone: "",
        emailAddress: "",
        textCompany: "",
        textareaMsg: "",
        selectedService: "",
      });
    } catch (error) {
      console.log(error.message);
    }
  };
  return (
    <div
      ref={formRef}
      id="contact"
      className={`px-5 sm:px-10 md:px-12 pt-8 ${router.includes("service") ? "md:pt-24 pb-12" : "md:pt-12 pb-12 "} bg-white `}
    >
      <div className="lg:space-y-[57px] md:space-y-10 space-y-6 flex flex-col sm:justify-center sm:items-center">
        <div className="space-y-2 flex items-center justify-center flex-col">
          <h2 className="text-[#101763] text-center font-sora md:text-4xl lg:text-[40px] text-[26px] sm:text-3xl font-semibold leading-[155%] tracking-[-0.4px]">
            {title}
          </h2>
          <p className="text-[#101763] text-center font-satoshi text-base lg:text-xl font-normal leading-[154%] lg:w-[744px] w-[80%]">
            {" "}
            Let us know your requirements and we’ll get back to you as soon as
            possible.
          </p>
        </div>

        {/* Form */}
        <form
          id="contactForm"
          onSubmit={handleSubmit}
          className="space-y-5 lg:space-y-8"
        >
          <div className="flex flex-col sm:items-center sm:flex-row space-y-5 sm:space-y-0 sm:space-x-5 ">
            <div className="relative w-full">
              <input
                type="text"
                id="textName"
                name="textName"
                value={formData.textName}
                onChange={handleChange}
                required
                maxLength={50}
                className="   w-full sm:max-w-[350px] md:w-[450px] xl:w-[575px] h-[73px] border border-[#d9d9d9] rounded-lg block pl-7 py-6 bg-white outline-none focus:ring-0 text-[#101763] font-satoshi text-base placeholder-font-satoshi placeholder-[#101763] font-normal leading-[154%]"
                placeholder="Enter Name"
              />

              <label
                htmlFor="textName"
                className="text-[#d81100] font-satoshi text-xs absolute top-[-8px]  left-3 bg-white px-3 leading-[154%] z-10"
              >
                Name
              </label>
            </div>
            <div className="relative w-full">
              <input
                type="number"
                id="textPhone"
                name="textPhone"
                value={formData.textPhone}
                onChange={handleChange}
                maxLength={15}
                required
                className=" w-full sm:max-w-[350px] md:w-[450px] xl:w-[575px] h-[73px] border border-[#d9d9d9] rounded-lg block pl-7 py-6 bg-white outline-none focus:ring-0 text-[#101763] font-satoshi text-base placeholder-font-satoshi placeholder-[#101763] font-normal leading-[154%] appearance-none [&::-webkit-inner-spin-button]:appearance-none [&::-webkit-outer-spin-button]:appearance-none"
                placeholder="Enter Phone"
              />
              <label
                htmlFor="textPhone"
                className="text-[#d81100] font-satoshi text-xs absolute top-[-8px] left-3 bg-white px-3 leading-[154%] z-10"
              >
                Phone
              </label>
            </div>
          </div>

          <div className="flex flex-col sm:items-center sm:flex-row space-y-5 sm:space-y-0 sm:space-x-5">
            <div className="relative w-full">
              <input
                type="email"
                id="emailAddress"
                name="emailAddress"
                value={formData.emailAddress}
                onChange={handleChange}
                maxLength={50}
                required
                className=" w-full sm:max-w-[350px] md:w-[450px] xl:w-[575px] h-[73px] border border-[#d9d9d9] rounded-lg block pl-7 py-6 bg-white outline-none focus:ring-0 text-[#101763] font-satoshi text-base placeholder-font-satoshi placeholder-[#101763] font-normal leading-[154%]"
                placeholder="Enter Email"
              />
              <label
                htmlFor="emailAddress"
                className="text-[#d81100] font-satoshi text-xs absolute top-[-8px] left-3 bg-white px-3 leading-[154%] z-10"
              >
                Email
              </label>
            </div>
            <div className="relative  w-full sm:max-w-[350px] md:w-[450px] xl:w-[575px]">
              <select
                id="selectedService"
                name="selectedService"
                value={formData.selectedService}
                onChange={handleChange}
                required
                className=" w-full sm:max-w-[350px] md:w-[450px] xl:w-[575px] border border-[#d9d9d9] rounded-lg block pl-7 py-6 bg-white outline-none focus:ring-0 text-[#101763] font-satoshi text-base placeholder-font-satoshi placeholder-[#101763] font-normal leading-[154%] appearance-none"
              >
                <option className="font-sora" value="" disabled selected hidden>
                  Select Services
                </option>
                {services &&
                  Object?.values(services)?.map((service, index) => (
                    <option
                      key={index + 1}
                      className="font-sora text-[#101763]"
                      value={service?.post_title}
                    >
                      {service?.post_title}
                    </option>
                  ))}
              </select>

              <label
                htmlFor="selectedService"
                className="text-[#d81100] font-satoshi text-xs absolute top-[-8px] left-3 bg-white px-3 leading-[154%] z-10"
              >
                Service
              </label>

              <div className="absolute top-1/2 right-5 transform -translate-y-1/2 pointer-events-none">
                <Image
                  src={arrowDown}
                  alt="arrow_down"
                  className="w-[34px] h-[34px]"
                />
              </div>
            </div>
          </div>

          <div className="relative w-full">
            <textarea
              id="textareaMsg"
              name="textareaMsg"
              value={formData.textareaMsg}
              onChange={handleChange}
              maxLength={200}
              className="w-full h-[116px] border border-[#d9d9d9] rounded-lg block pl-7 py-6 bg-white outline-none focus:ring-0 text-[#101763] font-satoshi text-base placeholder-font-satoshi placeholder-[#101763] font-normal leading-[154%] resize-none"
              placeholder="Enter Message"
            ></textarea>
            <label
              htmlFor="textareaMsg"
              className="text-[#d81100] font-satoshi text-xs absolute top-[-8px] left-3 bg-white px-3 leading-[154%] z-10"
            >
              Message
            </label>
          </div>

          <button
            type="submit"
            className="w-[229px]  h-[59px] flex items-center justify-center bg-[#d81100] font-satoshi text-base font-medium leading-[154%] space-x-9 text-white rounded-lg mx-auto group hover:bg-[#101763] transition-all duration-500 "
          >
            Send a Request
            <Image
              src={arrowForward}
              alt="arrow_right"
              className="w-[33px] h-[33px] ml-2 group-hover:translate-x-3 transition-all"
            />
          </button>
        </form>
      </div>
    </div>
  );
};

export default ContactForm;
