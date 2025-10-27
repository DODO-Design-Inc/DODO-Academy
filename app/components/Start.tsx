"use client";

import Image from "next/image";
import { usePathname } from "next/navigation";
import { useEffect, useState } from "react";

export default function () {
  const [email, setEmail] = useState("");
  const [disableSubmit, setDisableSubmit] = useState(false);
  const [submitted, setSubmitted] = useState(false);
  const [submitting, setSubmitting] = useState(false);

  const pathName = usePathname();

  useEffect(() => {
    setSubmitted(() => false);
  }, [pathName]);

  const handleSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    setDisableSubmit(true);
    setSubmitting(true);
    const formData = new FormData();
    formData.append("EMAIL", email);

    try {
      const response = await fetch(
        "https://africa.us13.list-manage.com/subscribe/post?u=266db59d1f337de08dc3d4b63&id=23ec87346f&f_id=00127de9f0",
        {
          method: "POST",
          body: formData,
          mode: "no-cors",
        }
      );

      if (response.ok || response.type === "opaque") {
        setEmail(""); // Clear the input field
        setSubmitted(true);
        setDisableSubmit(false);
        setSubmitting(false);
      } else {
      }
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <section className="w-[336px] md:w-full mx-auto mt-18 xl:mt-30">
      <div className="md:hidden flex flex-col text-[#F7F7F7]">
        <h2 className="text-2xl font-normal leading-[100%] mb-4">
          To start your journey,{" "}
          <span className="text-[#F1B130] italic">
            access these free resources now
          </span>
        </h2>
        <div className="text-sm leading-[1.4] tracing-[-2%] mb-6">
          Download this free set of resources put together by our team from our
          years of work with global and local organisations across different
          industries. Think of it as a sneak preview; test the tools, see the
          impact, and unlock the full playbook in the course.
        </div>
        <div className="relative h-[318px] mb-10">
          <Image src={"/Freebie.png"} fill alt="" className="object-cover" />
          <div className="absolute w-[268.83px] left-[22.34px] bottom-[29.34px] text-[#1E1E1E] pl-[14.8px] py-[10.72px] bg-white ">
            <h5 className="font-bold text-[21.45px] leading-[100%] mb-[3.57px]">
              FIELD RESEARCH CHECKLIST
            </h5>
            <p className="text-[8.94px] leading-[1.4] tracing-[-2%]">
              All you need pre, during and post field research engagement
            </p>
          </div>
        </div>
        <div className="mb-20 md:hidden">
          <input
            type="text"
            placeholder="Enter email address"
            className="w-full bg-white py-5 rounded-sm placeholder:text-[#667085] px-[17.6px] text-black mb-4"
          />
          <button className="bg-[#F1B130] py-4 text-center font-medium rounded-sm text-[#1D2327] w-full text-xs leading-[22.53px] tracking-[0.47px]">
            DOWNLOAD YOUR FREE COPY
          </button>
        </div>
      </div>

      <div className="hidden md:flex justify-center gap-10 pb-[83px]">
        <div className="w-[335px] h-[334px] xl:w-[545px] xl:h-[409px] relative ]">
          <Image src="/Freebie.png" alt="image" fill className="object-cover rounded-[7.13px] xl:rounded-[11.59px" />
          <div className="absolute w-[268.83px] xl:w-[415px] left-[22.34px] bottom-[29.34px] text-[#1E1E1E] pl-[14.8px] py-[10.72px] bg-white rounded-[4.9px] xl:rounded-lg">
            <h5 className="font-bold text-[28.45px] xl:text-[46.3px] leading-[100%] mb-[3.57px]">
            Field research checklist
            </h5>
            <p className="text-[8.61px] xl:text-[14px] leading-[1.4] tracing-[-2%]">
              All you need pre, during and post field research engagement
            </p>
          </div>
        </div>

        <div className="flex flex-col justify-between w-[420px] h-[340px] xl:w-[610px] xl:h-[400px] text-[#F7F7F7]">
          <h2 className="text-[32px] xl:text-5xl font-normal leading-[100%] tracking-[-2%]">
            To start your journey,{" "}
            <span className="text-[#F1B130] italic">
              access these free resources now
            </span>
          </h2>
          <div className="text-sm xl:text-lg leading-[1.4] tracing-[-2%] mb-6">
            Download this free set of resources put together by our team from
            our years of work with global and local organisations across
            different industries. Think of it as a sneak preview; test the
            tools, see the impact, and unlock the full playbook in the course.
          </div>
          <form  className="">
            <input
              type="text"
              placeholder="Enter email address"
              className="w-full bg-white py-5 rounded-sm placeholder:text-[#667085] px-[17.6px] text-black mb-4"
            />
            <button className="bg-[#F1B130] py-4 text-center font-bold rounded-sm text-[#1D2327] w-full text-sm xl:text-base leading-[22.53px] tracking-[0.47px]">
              DOWNLOAD YOUR FREE COPY
            </button>
          </form>
        </div>
      </div>
    </section>
  );
}
