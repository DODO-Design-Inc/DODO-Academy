"use client";

import Image from "next/image";
import React, { useState } from "react";

const HamburgerIcon = ({ onClick }: { onClick: () => void }) => (
  <button
    onClick={onClick}
    className="md:hidden z-50 text-white focus:outline-none"
    aria-label="Toggle menu"
  >
    <svg
      xmlns="http://www.w3.org/2000/svg"
      className="h-6 w-6"
      fill="none"
      viewBox="0 0 24 24"
      stroke="currentColor"
    >
      <path
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth={2}
        d="M4 6h16M4 12h16m-7 6h7"
      />
    </svg>
  </button>
);

// --- Close Icon Component ---
const CloseIcon = ({ onClick }: { onClick: () => void }) => (
  <button
    onClick={onClick}
    className="md:hidden z-50 text-white focus:outline-none"
    aria-label="Toggle menu"
  >
    <svg
      xmlns="http://www.w3.org/2000/svg"
      className="h-6 w-6"
      fill="none"
      viewBox="0 0 24 24"
      stroke="currentColor"
    >
      <path
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth={2}
        d="M6 18L18 6M6 6l12 12"
      />
    </svg>
  </button>
);

export default function NavBar() {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
  };

  const navLinks = [
    { name: "CURRICULUM", href: "#" },
    { name: "FAQ", href: "#" },
    { name: "PRICING", href: "#" },
  ];
  return (
    <nav className="flex justify-between py-[42px] px-[60px]">
      <Image src={"/LOGO.svg"} alt="logo" width={80} height={21.97} />

      <div className="hidden lg:flex justify-between">
        <div className="flex justify-between">
          <div className="w-[136px] py-[18px] text-center">CURRICULUM</div>
          <div className="w-[136px] py-[18px] text-center">FAQs</div>
          <div className="w-[136px] py-[18px] text-center">PRICING</div>
        </div>
        <button className="bg-[#F1B130] text-black/90 w-[250px] py-[18px]  rounded-lg cursor-pointer hover:bg-amber-500 transition-colors duration-500">
          JOIN WAITLIST
        </button>
      </div>

      <div className="flex gap-2.5 lg:hidden">
        <div className="my-auto px-[22px] text-sm font-semibold text-white">JOIN WAITLIST</div>

        <div className="my-auto">
          {isMobileMenuOpen ? (
            <svg
              className="size-8 my-auto"
              onClick={toggleMobileMenu}
              xmlns="http://www.w3.org/2000/svg"
              width="24"
              height="24"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
            >
              <path d="M18 6 6 18" />
              <path d="m6 6 12 12" />
            </svg>
          ) : (
            <svg
              className="size-8 my-auto"
              onClick={toggleMobileMenu}
              xmlns="http://www.w3.org/2000/svg"
              width="24"
              height="24"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
            >
              <path d="M4 5h16" />
              <path d="M4 12h16" />
              <path d="M4 19h16" />
            </svg>
          )}
        </div>
      </div>
    </nav>
  );
}
