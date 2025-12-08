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
  return (
    <aside
      className={`fixed lg:static inset-y-0 left-0 z-20 bg-white px-4 duration-300 ease-in-out ${
        isDesktopSize
          ? isMenuCollapse
            ? "w-20"
            : "w-72"
          : isMobileSize
          ? "translate-x-0 w-60"
          : "-translate-x-full w-60"
      }`}
    >
      <div
        className={`flex flex-col items-center w-full ${
          isMenuCollapse || isMobileSize ? "py-[22px]" : "py-[21px]"
        }`}
      >
        {!isMenuCollapse ? (
          <Logo
            logo="/assets/logo-demo.png"
            color="black"
            width={30}
            height={30}
            tagline={false}
          />
        ) : (
          <Logo
            logo="/assets/logo-demo.png"
            width={30}
            height={30}
            name={false}
            tagline={false}
          />
        )}
      </div>
      <div className="border border-black w-full rounded-2xl" />
    </aside>
  );
}
