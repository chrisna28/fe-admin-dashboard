import { MenuIcon } from "lucide-react";
import React from "react";

type HeaderProps = {
  onToggleDesktop: () => void;
  onToggleMobile: () => void;
  isDesktopSize: boolean;
};

export default function Header({
  onToggleDesktop,
  onToggleMobile,
  isDesktopSize,
}: HeaderProps) {
  return (
    <header
      className={`flex sticky top-0 h-[80px] px-4 items-center bg-[#A6E3E9] shadow-md ${
        isDesktopSize ? "rounded-2xl" : ""
      }`}
    >
      <button
        type="button"
        className="hidden lg:block p-2 rounded hover:bg-[#71C9CE] text-white"
        onClick={() => onToggleDesktop()}
      >
        <MenuIcon />
      </button>

      <button
        type="button"
        className="block lg:hidden p-2 rounded hover:bg-[#71C9CE] text-white"
        onClick={() => onToggleMobile()}
      >
        <MenuIcon />
      </button>
    </header>
  );
}
