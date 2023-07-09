"use client";
import React, { useState } from "react";
import { HiMenuAlt3 } from "react-icons/hi";
import { AiOutlineHome } from "react-icons/ai";
import { RiSettings4Line } from "react-icons/ri";
import { BiSolidBriefcase } from "react-icons/bi";
import {
  BsGraphUp,
  BsFillShieldFill,
  BsTags,
  BsTwitter,
  BsLinkedin,
  BsDiscord,
  BsTelegram,
} from "react-icons/bs";
import { TbWorldDollar } from "react-icons/tb";
import Link from "next/link";
import Image from "next/image";
interface Props {}

const SideBar = () => {
  const menus = [
    { name: "Home", link: "/", icon: AiOutlineHome },
    { name: "Dex Explorer", link: "/dex", icon: TbWorldDollar },
    {
      name: "Transaction Flow",
      link: "/txflow",
      icon: BsGraphUp,
      margin: true,
    },
    {
      name: "Portfolio Management",
      link: "/portfolio",
      icon: BiSolidBriefcase,
    },
    { name: "Due Diligence", link: "/duediligence", icon: BsFillShieldFill },
    {
      name: "Referrals and Rewards",
      link: "/referrals",
      icon: BsTags,
      margin: true,
    },
    { name: "Setting", link: "/settings", icon: RiSettings4Line },
  ];
  const [open, setOpen] = useState<boolean>(false);
  const [activeMenu, setActiveMenu] = useState<String>("");

  const handleMenuClick = (name: String) => {
    setActiveMenu(name);
  };

  return (
    <div className="hidden md:block fixed z-50">
      <div
        className={`bg-[#0B0F16] min-h-screen ${
          open ? "w-72  z-1 absolute" : "w-16 z-1 absolute"
        } duration-500 text-gray-100 px-4 `}
        onMouseEnter={() => setOpen(true)}
        onMouseLeave={() => setOpen(false)}
      >
        <div className="py-3 ">
          {!open && (
            <Image
              src="/logo.png"
              alt="logo"
              width={35}
              height={35}
            />
          )}

          {open && (
            <Image src="/metadapp.png" alt="logo" width={100} height={100} />
          )}
        </div>
        <div className="mt-4 flex flex-col gap-4 relative">
          {menus?.map((menu, i) => (
            <Link
              href={menu.link}
              key={i}
              className={` ${
                menu.margin && "mt-5"
              } group flex items-center text-sm  gap-3.5 font-medium p-2 hover:bg-gray-800 rounded-md ${
                activeMenu === menu.name ? "bg-gray-800" : ""
              } ${activeMenu === menu.name && !open ? "pr-7" : ""}`}
              onClick={() => handleMenuClick(menu.name)}
            >
              <div>{React.createElement(menu.icon, { size: "20" })}</div>
              <h2
                style={{
                  transitionDelay: `${i + 3}00ms`,
                }}
                className={`whitespace-pre duration-500 ${
                  !open && "opacity-0 translate-x-28 overflow-hidden"
                }`}
              >
                {menu.name}
              </h2>
            </Link>
          ))}
          {open && (
            <h6
              className={`text-center mt-36 whitespace-pre duration-500 ${
                !open && "opacity-0 translate-x-28 overflow-hidden"
              }`}
            >
              Join Our Community
              <div className="flex flex-row gap-5 justify-center mt-3">
                <div>
                  <BsTwitter />
                </div>
                <div>
                  <BsLinkedin />
                </div>
                <div>
                  <BsDiscord />{" "}
                </div>
                <BsTelegram />
              </div>
            </h6>
          )}
        </div>
      </div>
    </div>
  );
};

export default SideBar;
