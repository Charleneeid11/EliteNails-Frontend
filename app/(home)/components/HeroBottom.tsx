import React from "react";
import Image from "next/image";
import StatElement from "./StatElement";

type Props = {};

const elementsData = [
  {
    iconSrc: "/icons/diamond.svg",
    title: "Quality Products",
  },
  {
    iconSrc: "/icons/certificate.svg",
    title: "Qualified Personnel",
  },
  {
    iconSrc: "/icons/guarantee-certificate.svg",
    title: "High Standards",
  },
];

const HeroBottom = (props: Props) => {
  return (
    <div className="flex bg-[#ECD8BD] w-full text-[#212121] p-8 px-20">
      <div className="flex space-x-20">
        {elementsData.map((element) => {
          return (
            <>
              <StatElement title={element.title} iconSrc={element.iconSrc} />
            </>
          );
        })}
      </div>
      <div className="space-x-20">
        <Image
          src="/icons/herowoman.svg"
          alt="Hero Woman"
          width={500}
          height={900}
        />
      </div>
    </div>
  );
};

export default HeroBottom;
