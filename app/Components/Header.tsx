import React from "react";
import Image from "next/image";
import NavMenu from "../(home)/components/NavMenu";

type Props = {};

export default function Header({}: Props) {
  return (
    <div className="p-4 px-8 flex items-center justify-between"> 
      <Image src="/icons/logo.svg" alt="Logo" width={250} height={250} />
      <NavMenu />
    </div>
  );
}

//flex: The element becomes a flex container, and its direct children become flex items.
//justify-between: It distributes the items in such a way that the first item is at the start line, 
//the last item is at the end line, and the remaining items are distributed so that the space between 
//any two items is the same. It ensures that there's equal spacing between each flex item, 
//but not between the items and the container edges.
//items-center: vertically centers the flex items in the container 
//(if the flex direction is row-wise) or horizontally (if the flex direction is column-wise)