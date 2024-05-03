import React from "react";
import Image from "next/image";

type Props = {
    iconSrc: string;
    title: string;
};

const StatElement = ({ iconSrc, title }: Props) => {
  return (
    <div
        className="flex flex-col items-center justify-center space-y-4"
        
    >
      <Image
        src={iconSrc}
        alt={title}
        width={40}
        height={20}
      />
      <p style={{ fontFamily: "Inika" }}>{title}</p>
    </div>
  );
};

export default StatElement;
