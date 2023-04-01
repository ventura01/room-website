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
      <nav className="relative">
        <div className="absolute top-10 w-full md:flex md:items-center">
          <div className="md:ml-8  md:mr-16">
            <Image
              src="/logo.svg"
              alt="logo"
              width={75}
              height={75}
              className="mx-auto h-auto w-auto"
            />
          </div>
          <div>
            <ul
              className={`md:gap-12 md:text-white ${
                menuOpen
                  ? "px-16 absolute left-10 top-8 bg-white pt-10 pb-5 text-veryDarkGray md:hidden"
                  : "hidden md:flex"
              }`}
            >
              {navLinks.map((link) => (
                <Link
                  key={link.name}
                  href={link.route}
                  onClick={() => setMenuOpen(!menuOpen)}
                >
                  <li className={`${menuOpen && "mb-6"}`}>{link.name}</li>
                </Link>
              ))}
            </ul>
            <div
              className="absolute -top-1 left-5 cursor-pointer md:hidden"
              onClick={() => setMenuOpen(!menuOpen)}
            >
              {menuOpen ? (
                <MdOutlineClose size={"1.5rem"} color={"#fff"} />
              ) : (
                <MdMenu size={"1.5rem"} color={"#fff"} />
              )}
            </div>
          </div>
        </div>
      </nav>
    </header>
  );
};

export default Navbar;
