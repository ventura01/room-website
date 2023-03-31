"use client";

import React, { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { MdMenu, MdOutlineClose } from "react-icons/md";

interface NavProps {
  name: string;
  route: string;
}

const navLinks: NavProps[] = [
  { name: "home", route: "#home" },
  { name: "shop", route: "#shop" },
  { name: "about", route: "#about" },
  { name: "contact", route: "#contact" },
];

const Navbar = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <header>
      <nav className="absolute w-full left-8 top-10 items-center md:flex ">
        <div className="ml-[35%] md:ml-0 md:mr-16">
          <Image src="/logo.svg" alt="logo" width={75} height={75} />
        </div>
        <div className="">
          <ul
            className={`${
              menuOpen
                ? "bg-white px-10 py-10 text-black"
                : "hidden gap-12 text-white md:flex"
            }`}
          >
            {navLinks.map((link) => (
              <Link
                key={link.name}
                href={link.route}
                onClick={() => setMenuOpen(!menuOpen)}
              >
                <li>{link.name}</li>
              </Link>
            ))}
          </ul>
        </div>
      </nav>
      <div
        className="absolute left-8 top-10 cursor-pointer md:hidden"
        onClick={() => setMenuOpen(!menuOpen)}
      >
        {menuOpen ? (
          <MdOutlineClose size={"1.5rem"} color={"#fff"} />
        ) : (
          <MdMenu size={"1.5rem"} color={"#fff"} />
        )}
      </div>
    </header>
  );
};

export default Navbar;
