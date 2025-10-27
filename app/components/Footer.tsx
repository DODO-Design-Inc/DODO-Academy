import React from "react";
import Link from "next/link";
import Image from "next/image";

export default function Footer() {
  return (
    <footer
      // Adjust padding for a slightly larger, more spacious look common on footers
      className="relative text-white py-16 px-6 md:px-12 xl:px-24 overflow-hidden bg-no-repeat bg-cover bg-[#1B1F23]"
      style={{
        backgroundImage: "url('/footer.svg')", // Keep the SVG background image
      }}
    >
      <Image
        src={"/LOGO.svg"}
        alt="logo"
        width={80}
        height={21.97}
        className="pt-10 pb-20"
      />
      <div className="flex justify-between text-[20px xl:text-[32px] font-normal">
        <div className=" flex flex-col space-y-4">
          <Link href="" className="">Work</Link>
          <Link href="" className="">About us</Link>
          <Link href="" className="">Services</Link>
          <Link href="" className="">Contact</Link>
          <Link href="" className="">GEP Policy</Link>
          <div className="xl:hidden flex flex-col space-y-4">
            <Link href="" className="">hello@dododesign.africa</Link>
            <Link href="" className="">+234 08095221113 (WhatsApp)</Link>
          </div>
        </div>
        <div className="hidden xl:flex flex-col justify-center space-y-4">
          <Link href="" className="">hello@dododesign.africa</Link>
          <Link href="" className="">+234 08095221113 (WhatsApp)</Link>
        </div>
        <div className=" flex flex-col space-y-4">
          <Link href="" className="">LinkedIn</Link>
          <Link href="" className="">X</Link>
          <Link href="" className="">Facebook</Link>
          <Link href="" className="">Instagram</Link>
        </div>
      </div>
    </footer>
  );
}
