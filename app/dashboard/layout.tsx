"use client";

import Header from "@/components/layout/Header";
import Sidebar from "@/components/layout/Sidebar";
import React, { useEffect, useState } from "react";

export default function DashboardLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const [isDesktop, setIsDesktop] = useState(false);
  const [isMobile, setIsMobile] = useState(false);
  const [isCollapsed, setIsCollapsed] = useState(false);

  useEffect(() => {
    const checkSize = () => {
      const isNowDesktop = window.innerWidth >= 1024;
      setIsDesktop(isNowDesktop);

      if (isNowDesktop) {
        setIsMobile(false);
      }
    };

    checkSize();

    window.addEventListener("resize", checkSize);
    return () => window.removeEventListener("resize", checkSize);
  }, []);

  return (
    <div
      className={`flex flex-row min-h-screen bg-gray-100 ${
        isDesktop ? "p-3 gap-2" : ""
      }`}
    >
      <Sidebar
        isMenuCollapse={isCollapsed}
        isDesktopSize={isDesktop}
        isMobileSize={isMobile}
      />

      <div className={`flex flex-col w-full ${isDesktop ? "gap-2" : ""} `}>
        <Header
          onToggleDesktop={() => setIsCollapsed((prev) => !prev)}
          onToggleMobile={() => setIsMobile(true)}
          isDesktopSize={isDesktop}
        />
        <main
          className={`flex w-full h-full bg-[#E3FDFD] ${
            isDesktop ? "rounded-2xl" : ""
          }`}
        >
          {children}
        </main>
      </div>

      {!isDesktop && isMobile && (
        <div
          className="fixed inset-0 bg-gray-500/50 z-10"
          onClick={() => setIsMobile(false)}
        />
      )}
    </div>
  );
}
