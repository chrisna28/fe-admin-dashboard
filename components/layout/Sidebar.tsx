import React from "react";
import Logo from "../ui/Logo";

type SidebarProps = {
  isMenuCollapse: boolean;
  isDesktopSize: boolean;
  isMobileSize: boolean;
};
export default function Sidebar({
  isMenuCollapse,
  isDesktopSize,
  isMobileSize,
}: SidebarProps) {
  console.log(isMenuCollapse);

  return (
    <aside
      className={`fixed lg:static inset-y-0 left-0 z-20 bg-[#A6E3E9] px-4 border-r border-gray-200 shadow-lg shadow-gray-300 ${
        isDesktopSize
          ? isMenuCollapse
            ? "w-20"
            : "w-72"
          : isMobileSize
          ? "translate-x-0 w-60"
          : "-translate-x-full w-60"
      }
      ${isDesktopSize ? "rounded-2xl" : ""}
      `}
    >
      <div
        className={`flex flex-col items-center w-full border-b-2 border-white ${
          isMenuCollapse ? "py-[21.5px]" : "py-[20px]"
        }`}
      >
        {!isMenuCollapse ? (
          <Logo
            logo="/assets/logo-demo-w.png"
            color="white"
            width={25}
            height={25}
            tagline={false}
          />
        ) : (
          <Logo
            logo="/assets/logo-demo-w.png"
            width={25}
            height={25}
            name={false}
            tagline={false}
          />
        )}
      </div>
    </aside>
  );
}
