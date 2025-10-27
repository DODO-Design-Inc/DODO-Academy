"use client";

export default function Testimonials() {
  const testimonials = [
    {
      text: "I enjoyed the collaboration with teammates and sharing of ideas. One of the things I enjoyed was embracing ambiguity and finally arriving at a solution I am now proud of.",
      name: "Maria Unawu, Design Researcher",
    },
    {
      text: "The past 6 weeks have been the most intense and impactful weeks I've had in my career since 2023... My expectations and goals were met and even surpassed.",
      name: "Ayobami Owoade, Product Designer",
    },
    {
      text: "I love how organised this program is! I struggled with guidance when it had to do with my career, but now I can boldly apply what I learned.",
      name: "Mariam Yusuf, Product Designer",
    },
    {
        text: "I love how organised this program is! I struggled with guidance when it had to do with my career, but now I can boldly apply what I learned.",
        name: "Mariam Yusuf, Product Designer",
      },
  ];

  return (
    <section className="bg-[#F7F7F7] py-20">
      <div className="text-center mb-16">
        <h2 className="text-2xl md:text-[32px] xl:text-[48px] leading-[100%] tracking-[-2px] font-normal text-[#1E1E1E]">
          Hear what past <br /> students had to say
        </h2>
      </div>

      <div
        className="flex gap-6 overflow-x-auto px-6 scrollbar-hide scroll-smooth"
        style={{
          scrollbarWidth: "none", // for Firefox
          msOverflowStyle: "none", // for IE/Edge
        }}
      >
        {testimonials.map((item, index) => (
          <div
            key={index}
            className="shrink-0 w-[334px] md:w-[440px] xl:w-[557px] bg-white rounded-[22.51px] px-8 py-10"
          >
            <p className="text-[#1E1E1E] text-sm md:text-[20px] leading-[120%] tracking-[0.1px] font-semibold mb-6">
              {item.text}
            </p>
            <p className="text-[#616569] text-base leading-[120%] tracking-[-0.75px] font-normal">{item.name}</p>
          </div>
        ))}
      </div>

      {/* Hide scrollbar for Webkit browsers */}
      <style jsx>{`
        .scrollbar-hide::-webkit-scrollbar {
          display: none;
        }
      `}</style>
    </section>
  );
}
