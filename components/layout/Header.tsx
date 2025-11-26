import { MenuIcon } from "lucide-react";
import React from "react";

export default function Header({
  toggleSideBar,
  mobileToggleSideBar,
}: {
  toggleSideBar: () => void;
  mobileToggleSideBar: () => void;
}) {
  return (
    <header className="sticky top-0 flex items-center h-16 bg-white w-full">
      <div className="flex items-center justify-between w-full px-6">
        <button
          className="bg-white p-2 hover:bg-gray-200 rounded-lg"
          onClick={toggleSideBar}
        >
          <MenuIcon size={20} />
        </button>

        {/* <button
          className="block lg:hidden bg-amber-400 p-2 hover:bg-gray-200 rounded-lg"
          onClick={mobileToggleSideBar}
        >
          <MenuIcon size={20} />
        </button> */}
      </div>
    </header>
  );
}
