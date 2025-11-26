"use client";

import Header from "@/components/layout/Header";
import Sidebar from "@/components/layout/Sidebar";
import React, { useState } from "react";

export default function DashboardLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const [isOpenSideBar, setIsOpenSideBar] = useState(true);
  const [isMobileOpenSideBar, setIsMobileOpenSideBar] = useState(false);

  return (
    <div className="flex flex-row min-h-screen bg-emerald-200">
      <Sidebar isOpen={isOpenSideBar} isMobileOpen={isMobileOpenSideBar} />

      <div className="flex flex-col w-full">
        <Header
          toggleSideBar={() => setIsOpenSideBar(!isOpenSideBar)}
          mobileToggleSideBar={() =>
            setIsMobileOpenSideBar(!isMobileOpenSideBar)
          }
        />
        <main className="flex p-8">{children}</main>
      </div>
    </div>
  );
}
