"use client";
import React, { useState } from "react";
import Image from "next/image";

type Props = {
  isOpen: boolean;
  setIsOpen: (isOpen: boolean) => void;
};

const HamburgerMenu = ({ isOpen, setIsOpen }: Props) => {
  return (
    <div className="relative md:hidden">
      {/* open button */}
      <button
        className={`md:hidden flex flex-col gap-1`}
        onClick={() => setIsOpen(!isOpen)}
      >
        {/* hamburger */}
        <div className="h-[60px] w-[60px] flex items-center justify-center">
          <Image
            src="/icons/hamburger.png"
            alt="hamburger"
            width={25}
            height={25}
            className={`${
              isOpen ? "w-[0px]" : "w-[25px]"
            } h-[25px] transition-all ease-in-out duration-500`}
          />
        </div>
      </button>
      
    </div>
  );
};

export default HamburgerMenu;
