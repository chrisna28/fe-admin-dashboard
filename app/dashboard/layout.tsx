"use client";

import { useState, useEffect } from "react";

export default function DashboardLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const [isCollapsed, setIsCollapsed] = useState(false); // desktop only
  const [isMobileOpen, setIsMobileOpen] = useState(false); // mobile only
  const [isDesktop, setIsDesktop] = useState(false);

  useEffect(() => {
    const checkSize = () => {
      const isNowDesktop = window.innerWidth >= 1024; // tailwind lg
      setIsDesktop(isNowDesktop);

      if (isNowDesktop) {
        setIsMobileOpen(false); // tutup mobile drawer
      }
    };

    checkSize();
    window.addEventListener("resize", checkSize);
    return () => window.removeEventListener("resize", checkSize);
  }, []);

  return (
    <div className="flex min-h-screen bg-gray-100">
      {/* SIDEBAR */}
      <aside
        className={`
          bg-white shadow-lg transition-all duration-300 ease-in-out
          ${
            isDesktop
              ? isCollapsed
                ? "w-[80px]"
                : "w-[260px]"
              : isMobileOpen
              ? "translate-x-0 w-[260px]"
              : "-translate-x-full w-[260px]"
          }
          fixed lg:static inset-y-0 left-0 z-50
        `}
      >
        {/* isi sidebar */}
        Sidebar
      </aside>

      {/* OVERLAY MOBILE */}
      {!isDesktop && isMobileOpen && (
        <div
          className="fixed inset-0 bg-black/50 z-40"
          onClick={() => setIsMobileOpen(false)}
        />
      )}

      <div className="flex flex-col flex-1">
        {/* HEADER */}
        <header className="h-16 bg-white shadow px-4 flex items-center gap-2">
          {/* Mobile toggle */}
          <button
            className="lg:hidden p-2"
            onClick={() => setIsMobileOpen(true)}
          >
            <span>☰</span>
          </button>

          {/* Desktop collapse btn */}
          {isDesktop && (
            <button
              className="hidden lg:block p-2"
              onClick={() => setIsCollapsed((prev) => !prev)}
            >
              <span>⇤</span>
            </button>
          )}

          <h1 className="ml-2 font-bold">Dashboard</h1>
        </header>

        {/* CONTENT */}
        <main className="p-4 flex-1">{children}</main>
      </div>
    </div>
  );
}
