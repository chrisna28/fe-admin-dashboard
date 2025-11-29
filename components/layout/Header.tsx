import { MenuIcon } from "lucide-react";
import React from "react";

type HeaderProps = { onToggleDesktop: () => void; onToggleMobile: () => void };

export default function Header({
  onToggleDesktop,
  onToggleMobile,
}: HeaderProps) {
  return (
    <header className="flex sticky top-0 bg-white border-2 border-red-500 h-16 px-4 items-center">
      <button
        type="button"
        className="hidden lg:block p-2 rounded hover:bg-gray-200"
        onClick={() => onToggleDesktop()}
      >
        <MenuIcon size={20} />
      </button>

      <button
        type="button"
        className="block lg:hidden p-2 rounded hover:bg-gray-200"
        onClick={() => onToggleMobile()}
      >
        <MenuIcon size={20} />
      </button>
    </header>
  );
}
