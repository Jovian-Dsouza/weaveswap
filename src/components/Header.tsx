"use client";
import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useState } from "react";
import "@particle-network/connect-react-ui/dist/index.css";
import { ConnectButton } from "@particle-network/connect-react-ui";
import { Avalanche, AvalancheTestnet } from "@particle-network/chains";

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

      {/* <ConnectButton /> */}
      <ConnectButton.Custom>
        {({
          account,
          chain,
          openAccountModal,
          openConnectModal,

          openChainModal,
          accountLoading,
        }) => {
          if (chain?.name != AvalancheTestnet.name) {
            return (
              <Button onClick={openChainModal} pathname={pathname}>
                Switch Network
              </Button>
            );
          }
          if (account) {
            return (
              <Button onClick={() => {}} pathname={pathname}>
                {account.substring(0, 10)}...
              </Button>
            );
          }
          return (
            <Button onClick={openConnectModal} pathname={pathname}>
              Connect Wallet
            </Button>
          );
        }}
      </ConnectButton.Custom>

      {/* Hamburger menu */}
      {/* <div className="block sm:hidden">
        <div onClick={toggleMenu}>H</div>
      </div> */}
    </header>
  );
}

export default Header;
