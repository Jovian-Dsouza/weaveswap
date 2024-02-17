"use client";
import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useState } from "react";

const buttonLinks = [
  { name: "swap", href: "/swap" },
  { name: "pool", href: "/pool" },
  { name: "lend", href: "/lend" },
  { name: "social media", href: "/social_media" },
];

function Header() {
  const pathname = usePathname();
  const [menuOpen, setMenuOpen] = useState(true);

  const toggleMenu = () => {
    setMenuOpen(!menuOpen);
  };

  return (
    <header className="flex justify-between items-center mt-8 mx-8 sm:px-12">
      {/* Logo and left buttons */}
      <div className="flex items-center space-x-4">
        <Image src="/logo.png" width={36} height={32} alt="logo" />
        <div className="text-2xl font-kavoon uppercase">Weaveswap</div>
      </div>

      {/* Menu items */}
      <div
        className={`${
          menuOpen ? "block" : "hidden"
        } sm:flex sm:items-center sm:space-x-4`}
      >
        {buttonLinks.map((button, index) => (
          <div key={index} className="header-btn">
            <Link href={button.href}>{button.name}</Link>
          </div>
        ))}
      </div>

      {/* Connect Wallet button */}
      <div
        className={`${
          pathname === "/" ? "bg-white" : "btn-gradient"
        } p-1 px-4 rounded-lg text-black text-lg font-medium transition duration-300 transform hover:scale-105`}
      >
        Connect Wallet
      </div>

      {/* Hamburger menu */}
      <div className="block sm:hidden">

        <div onClick={toggleMenu}>H</div>
      </div>
    </header>
  );
}

export default Header;
