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
}: HeaderProps) {
  return (
    <header className={`flex sticky top-0 h-20 px-4 items-center bg-white`}>
      <button
        type="button"
        className="hidden lg:block p-2 rounded-lg hover:bg-[#F0E4D3] text-black"
        onClick={() => onToggleDesktop()}
      >
        <MenuIcon />
      </button>

      <button
        type="button"
        className="block lg:hidden p-2 rounded hover:bg-[#F0E4D3] text-black"
        onClick={() => onToggleMobile()}
      >
        <MenuIcon />
      </button>
    </header>
  );
}
