import Image from "next/image";
import Link from "next/link";
import React from "react";

type NavProps = { name: string; route: string };

const navLinks: NavProps[] = [
  { name: "home", route: "#home" },
  { name: "shop", route: "#shop" },
  { name: "about", route: "#about" },
  { name: "contact", route: "#contact" },
];

const Navbar = (props: NavProps) => {
  return (
    <header>
      <nav className="flex absolute top-10 left-10 items-center ">
        <div className="mr-16">
          <Image src="/logo.svg" alt="logo" width={75} height={75} />
        </div>
        <div className="">
          <ul className="flex text-white gap-12">
            {navLinks.map((link) => (
              <Link key={link.name} href={link.route}>
                <li>{link.name}</li>
              </Link>
            ))}
          </ul>
        </div>
      </nav>
    </header>
  );
};

export default Navbar;
