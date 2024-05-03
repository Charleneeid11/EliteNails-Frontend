"use client";
import React, { useState } from "react";
import Image from "next/image";

type Props = {};

const HamburgerMenu = (props: Props) => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <button
      className={`md:hidden flex flex-col gap-1`}
      onClick={() => setIsOpen(!isOpen)}
    >
      {/* hamburger */}
      <div className="h-[60px] w-[60px] flex items-center justify-center translate-y-6">
        <Image
          src="/icons/hamburger.png"
          alt="hamburger"
          width={25}
          height={25}
          className={`${
            isOpen ? "w-[0px]" : "w-[25px]"
          } h-[25px] ease-in-out duration-500`}
        />
      </div>

      {/* close button */}
      <div className="h-[60px] w-[60px] flex items-center justify-center -translate-y-10">
        <Image
          src="/icons/close.png"
          alt="hamburger"
          width={25}
          height={25}
          className={`${
            isOpen ? "w-[25px] h-[25px]" : "w-[0px] h-[0px]"
          } ease-in-out duration-500`}
        />
      </div>
    </button>
  );
};

export default HamburgerMenu;
