"use client";
import React, { useState } from "react";
import Image from "next/image";
import HamburgerMenu from "./hamburgerMenu";
import Link from "next/link";
import NavMenu from "../(home)/components/NavMenu";

type Props = {};

const links = [
  { name: "Home", href: "/", icon: "/icons/home.png" },
  { name: "About Us", href: "/about-us", icon: "/icons/group.png" },
  { name: "For Him", href: "/for-him", icon: "/icons/male-gender.png" },
  { name: "For Her", href: "/for-her", icon: "/icons/femenine.png" },
];

export default function Header({}: Props) {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="p-4 px-8 max-sm:px-2 flex items-center justify-between">
      <Image
        src="/icons/logo.svg"
        alt="Logo"
        width={250}
        height={250}
        className="w-[250px] max-md:w-[200px] max-sm:w-[150px]"
      />
      {/* large screens show nav menu */}
      <NavMenu />
      {/* small screens have sidebar with hamburger menu */}
      <HamburgerMenu isOpen={isOpen} setIsOpen={setIsOpen} />
      <div
        className={`${
          isOpen ? "" : "-translate-x-[100vw]"
        } transition-all w-[45%] ease-in-out duration-500 h-[100vh] bg-[#ECD8BD] absolute left-0 top-0 z-20 md:hidden text-black`}
      >
        <div className="flex justify-between items-center py-4 px-4">
          <Image
            src="/icons/sideBarLogo.png"
            alt="logo"
            width={100}
            height={100}
          />
          <Image
            src="/icons/close.png"
            alt="hamburger"
            width={15}
            height={15}
            className="w-[15px] h-[15px]"
            onClick={() => setIsOpen(false)}
          />
        </div>
        {links.map((link, index) => (
          <Link
            href={link.href}
            onClick={() => setIsOpen(false)}
            key={index}
            className="ml-2 text-lg flex items-center justify-start gap-4 p-4"
          >
            <Image
              src={link.icon}
              alt={link.name}
              width={25}
              height={25}
              className="w-[25px] h-[25px]"
            />
            <p>{link.name}</p>
          </Link>
        ))}
      </div>
      <div
        onClick={() => setIsOpen(false)}
        className={`z-10 absolute left-0 top-0 ${
          isOpen ? "w-[100%]" : "w-0"
        } transition-all ease-in-out duration-200 h-[100vh] bg-black opacity-50 md:hidden`}
      ></div>
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
