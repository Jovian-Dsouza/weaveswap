"use client";
import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useState } from "react";
import { ConnectButton } from "@particle-network/connect-react-ui";
import { WalletEntryPosition } from '@particle-network/auth';
import {
    Avalanche,
    Ethereum,
    EthereumGoerli,
    KCCTestnet,
    Moonbeam,
    Moonriver,
    Optimism,
    PlatON,
    Polygon,
    Solana,
} from '@particle-network/chains';
import { evmWallets, solanaWallets } from '@particle-network/connect';
import { ModalProvider } from '@particle-network/connect-react-ui';
import '@particle-network/connect-react-ui/esm/index.css';


const buttonLinks = [
  { name: "home", href: "/" },
  { name: "swap", href: "/swap" },
  { name: "pool", href: "/pool" },
  { name: "lend", href: "/lend" },
];

function Button({ children, pathname, onClick }) {
  return (
    <div
      onClick={onClick}
      className={`${
        pathname === "/" ? "bg-white" : "btn-gradient"
      } p-1 px-4 rounded-lg text-black text-lg font-medium transition duration-300 transform hover:scale-105`}
    >
      {children}
    </div>
  );
}

function Header() {
  const pathname = usePathname();
  const [menuOpen, setMenuOpen] = useState(false);

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

          <ConnectButton />


    </header>
  );
}

export default Header;
