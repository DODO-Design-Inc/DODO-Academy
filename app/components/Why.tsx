import React from "react";
// You can remove this if you're not using Next.js Image component anywhere
// import Image from "next/image";

export const EnrollSection: React.FC = () => {
  return (
    <section className="bg-white py-16 md:py-24 px-4">
      <div className="max-w-7xl mx-auto">
        <h2 className="text-3xl md:text-4xl font-bold text-center text-zinc-900 mb-12 md:mb-16">
          Why should you enroll for this course?
        </h2>

        <div className="text-[#0F172A]">
          <div className="flex flex-col xl:flex-row gap-4 justify-center xl:items-stretch">
            {/* Left/Top Stack of four cards */}
            <div className="flex flex-col gap-4">
              <div className="md:flex md:flex-row md:gap-4 md:justify-center">
                {/* CARD 1: Master the Foundations... (FIXED ICON STRUCTURE) */}
                <div className="w-[355px] h-[278px] bg-[#F6F6F6] flex flex-col mx-auto md:mx-0 mb-4 md:mb-0 rounded-lg justify-center text-center md:h-[350px] xl:h-[385px] md:w-[368px] xl:w-[427px] p-3">
                  
                  {/* === ICON FIX START === */}
                  {/* This is the outer circle with background and rounded corners */}
                  <div className="size-10 bg-[#E1E1E1] rounded-full flex items-center justify-center mx-auto mb-4">
                    {/* This is the actual SVG icon, now smaller and centered within its parent */}
                    <img
                      src="/book.svg"
                      alt="Foundations Icon"
                      className="size-6" // Smaller size for the inner SVG, e.g., size-6 (24px)
                    />
                  </div>
                  {/* === ICON FIX END === */}
                  
                  <div className="font-bold text-base leading-[1.1] tracking-[0%] w-2/3 mx-auto"> {/* Changed lead-[1.1] to leading-[1.1] */}
                    Master the Foundations of Design Research
                  </div>
                  <p className="w-5/6 mx-auto mt-2.5 text-sm md:text-base xl:text-lg">
                    Build a strong understanding of research principles, ethics,
                    and methodologies within the design and innovation
                    landscape.
                  </p>
                </div>
                {/* END CARD 1 */}

                {/* CARD 2 */}
                <div className="w-[355px] h-[278px] bg-[#F6F6F6] flex flex-col mx-auto md:mx-0 rounded-lg justify-center text-center md:h-[350px] xl:h-[385px] md:w-[368px] xl:w-[427px] p-3">
                  <div className="size-10 bg-[#E1E1E1] rounded-full flex items-center justify-center mx-auto mb-4">
                    <img
                      src="/user.svg"
                      alt="Foundations Icon"
                      className="size-6"
                    />
                  </div>
                  <div className="font-bold text-base leading-[1.1] tracking-[0%] w-2/3 mx-auto">
                    Lead and Collaborate Effectively in Design Projects
                  </div>
                  <p className="w-5/6 mx-auto mt-2.5 text-sm md:text-base xl:text-lg">
                    Confidently guide teams from client briefing through to
                    design execution.
                  </p>
                </div>
                {/* END CARD 2 */}
              </div>

              <div className="md:flex md:flex-row md:gap-4 md:justify-center">
                {/* CARD 3 */}
                <div className="w-[355px] h-[278px] bg-[#F6F6F6] flex flex-col mx-auto md:mx-0 mb-4 md:mb-0 rounded-lg justify-center text-center md:h-[350px] xl:h-[385px] md:w-[368px] xl:w-[427px] p-3">
                  <div className="size-10 bg-[#E1E1E1] rounded-full flex items-center justify-center mx-auto mb-4">
                    <img
                      src="/dart.svg"
                      alt="Foundations Icon"
                      className="size-6"
                    />
                  </div>
                  <div className="font-bold text-base leading-[1.1] tracking-[0%] w-2/3 mx-auto">
                    Align Research with Business and Client Goals
                  </div>
                  <p className="w-5/6 mx-auto mt-2.5 text-sm md:text-base xl:text-lg">
                    Strategically connect research purpose to client, business,
                    and organizational objectives, and select the most effective
                    research methods to achieve measurable impact.
                  </p>
                </div>
                {/* END CARD 3 */}

                {/* CARD 4 */}
                <div className="w-[355px] h-[278px] bg-[#F6F6F6] flex flex-col mx-auto md:mx-0 rounded-lg justify-center text-center md:h-[350px] xl:h-[385px] md:w-[368px] xl:w-[427px] p-3">
                  <div className="size-10 bg-[#E1E1E1] rounded-full flex items-center justify-center mx-auto mb-4">
                    <img
                      src="/bulb.svg"
                      alt="Foundations Icon"
                      className="size-6"
                    />
                  </div>
                  <div className="font-bold text-base leading-[1.1] tracking-[0%] w-2/3 mx-auto">
                    Transform Insights into Impactful Solutions
                  </div>
                  <p className="w-5/6 mx-auto mt-2.5 text-sm md:text-base xl:text-lg">
                    Apply critical and creative thinking to analyze and
                    synthesize research findings, translating user insights into
                    culturally relevant and valuable design solutions.
                  </p>
                </div>
                {/* END CARD 4 */}
              </div>
            </div>
            {/* END Left/Top Stack of four cards */}

            {/* Right/Bottom Card (FIXED ICON STRUCTURE) */}
            <div className="w-[355px] md:w-[752px] xl:w-[427px] h-[350.75px] md:h-[383px] bg-[#F6F6F6] flex flex-col items-stretch xl:h-auto justify-center text-center rounded-lg mx-auto xl:mx-0 p-3">
              <div className="size-10 bg-[#E1E1E1] rounded-full flex items-center justify-center mx-auto mb-4">
                <img
                  src="/chart.svg"
                  alt="Foundations Icon"
                  className="size-6"
                />
              </div>
              <h5 className="font-bold text-base md:text-2xl leading-[1.1] tracking-[0%] w-2/3 md:w-3/5 xl:w-2/3 mx-auto">
                Communicate Research Outcomes with Confidence
              </h5>
              <p className="w-5/6 md:w-4/5 xl:w-5/6 mx-auto mt-2.5 text-sm md:text-base xl:text-lg">
                {" "}
                Deliver actionable research findings to clients, stakeholders,
                and decision-makers in a clear, compelling and actionable
                manner, helping to highlight the strategic value of design
                within organizations.
              </p>
              <button className="bg-[#F1B130] text-[#1D2327] text-sm font-semibold w-[300px] md:w-[358px] rounded-lg mx-auto py-[18px] mt-10 cursor-pointer hover:bg-amber-500 transition-colors duration-500">
                JOIN WAITLIST
              </button>
            </div>
            {/* END Right/Bottom Card */}
          </div>
        </div>
      </div>
    </section>
  );
};