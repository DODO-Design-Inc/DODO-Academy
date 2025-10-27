import React from 'react'

export default function EarlyBird() {
  return (
    <section className="text-center bg-[#171D20] py-20 text-[#FEFEFE]" id='pricing'>
        <p className="text-2xl md:text-[32px] xl:text-5xl leading-0 md:leading-[100%] tracking-[-2px]">Early bird discount</p>
        <h6 className="text-[#848181] line-through text-2xl leading-0 md:text-[32px] xl:text-[36px] md:leading-[1.4] tracking-[-2px] my-4 md:mt-6 md:mb-3">NGN300,000</h6>
        <h1 className="text-[60px] md:text-[128px] xl:text-[150px] font-bold leading-[1.4] tracking-[-2px] mb-10 xl:mb-16">NGN55,000</h1>
        <button className="py-4 font-semibold text-xs md:text-sm leading-6 tracking-[0.5px] border border-[#E2E3E3] rounded-lg w-[336px] md:w-[754px] xl:w-[805px] hover:bg-[#E2E3E3] hover:text-black transition-colors duration-500">JOIN WAITLIST</button>
    </section>
  )
}
