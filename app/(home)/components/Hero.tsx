import React from "react";
import Image from "next/image";
import HeroTop from "./HeroTop";
import HeroBottom from "./HeroBottom";

export default function Hero() {
  return (
    <div className="flex py-28 flex-col">
      {/* <div className="px-16 pb-28">
        <p className="text-5xl">
          Maximize Your Beauty
          <br /> With Our Best
          <br /> Services
        </p>
        <p className="pt-6 text-base">
          We provide beauty and treatment services with the best quality.
        </p>
      </div> */}
      {/* <div className="w-[50%]">
        <Image
          src="/icons/herowoman.svg"
          alt="Hero Woman"
          width={500}
          height={900}
        />
      </div> */}
      {/* <HeroBottom /> */}
    </div>
  );
}
