import React from "react";

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
      className={`fixed lg:static inset-y-0 left-0 z-20 bg-white border-2 border-red-500 ${
        isDesktopSize
          ? isMenuCollapse
            ? "w-20"
            : "w-72"
          : isMobileSize
          ? "translate-x-0 w-60"
          : "-translate-x-full w-60"
      }`}
    >
      Sidebar
    </aside>
  );
}
