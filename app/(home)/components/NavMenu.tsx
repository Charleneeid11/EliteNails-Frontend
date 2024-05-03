"use client";
import React, { useState } from "react";
import Link from "next/link";

const menuItems = [
  { name: "Home", path: "/" },
  { name: "About Us", path: "/about-us" },
  { name: "For Him", path: "/for-him" },
  { name: "For Her", path: "/for-her" },
];

const NavMenu = () => {
  const [activeTab, setActiveTab] = useState("Home");
  const [hoveredTab, setHoveredTab] = useState("");

  return (
    <>
      <div className="justify-center items-center space-x-4 py-2 md:flex hidden">
        {menuItems.map((tab) => (
          <div key={tab.name} className="relative h-7">
            <Link
              href={tab.path}
              onClick={() => setActiveTab(tab.name)}
              className="pb-1 mr-2"
              onMouseEnter={() => setHoveredTab(tab.name)}
              onMouseLeave={() => setHoveredTab("")}
            >
              {tab.name}
            </Link>
            <div
              className={`absolute bottom-0 w-3/5 bg-[#ECD8BD] transform -skew-x-12 transition-all duration-200 ${
                activeTab === tab.name || hoveredTab === tab.name
                  ? "h-[2px]"
                  : "h-[0px]"
              }`}
            />
          </div>
        ))}
      </div>
    </>
  );
};

export default NavMenu;