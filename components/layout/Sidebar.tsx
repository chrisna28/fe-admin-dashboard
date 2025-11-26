"use client";

import { useState } from "react";
import {
  LayoutDashboard,
  ChevronDown,
  ChevronRight,
  Users,
  Settings,
  FileText,
  ShoppingCart,
} from "lucide-react";
import Logo from "../ui/Logo";

type DropdownState = {
  users: boolean;
  products: boolean;
  reports: boolean;
};

export default function Sidebar({
  isOpen,
  isMobileOpen,
}: {
  isOpen: boolean;
  isMobileOpen: boolean;
}) {
  const [dropdowns, setDropdowns] = useState<DropdownState>({
    users: false,
    products: false,
    reports: false,
  });

  const toggleDropdown = (dropdown: keyof DropdownState) => {
    setDropdowns((prev) => ({
      ...prev,
      [dropdown]: !prev[dropdown],
    }));
  };

  return (
    <aside
      className={`${
        !isOpen ? "w-24 px-2" : "w-[290px] px-6"
      } flex flex-col items min-h-screen bg-white`}
    >
      <div className={`flex py-4 items-center ${!isOpen && "justify-center"}`}>
        <Logo
          logo="/assets/logo-demo.png"
          color="black"
          name={isOpen}
          tagline={false}
          width={32}
          height={32}
        />
      </div>

      <div
        className={`border-b-2 border-gray-200 rounded-2xl ${
          !isOpen && "hidden"
        }`}
      />

      <nav
        className={`${!isOpen ? "justify-center py-5" : "py-4"} flex flex-col`}
      >
        {isOpen ? (
          <span className="text-gray-500 text-sm mb-4">Main Menu</span>
        ) : (
          <span className="flex text-gray-500 text-sm mb-4 justify-center items-center">
            Menu
          </span>
        )}

        <div className={`flex flex-col ${isOpen ? "gap-1" : "gap-2"}`}>
          {/* Dashboard */}
          <button
            className={`${
              !isOpen && "justify-center"
            } flex items-center gap-4 py-2 px-3 rounded hover:bg-gray-100 hover:rounded-xl`}
          >
            <LayoutDashboard className="w-5 h-5 " />
            {isOpen && <span>Dashboard</span>}
          </button>

          {/* Users Dropdown */}
          <div className="flex flex-col">
            <button
              className={`flex items-center ${
                !isOpen ? "justify-center" : "justify-between"
              } gap-4 py-2 px-3 rounded hover:bg-gray-100 hover:rounded-xl`}
              onClick={() => toggleDropdown("users")}
            >
              <div className="flex items-center gap-4">
                <Users className="w-5 h-5" />
                {isOpen && <span>Users</span>}
              </div>

              {!isOpen ? null : dropdowns.users ? (
                <ChevronDown className="w-4 h-4" />
              ) : (
                <ChevronRight className="w-4 h-4" />
              )}
            </button>

            {isOpen && dropdowns.users && (
              <div className="ml-8 mt-1 flex flex-col gap-1">
                <button className="flex items-center gap-3 py-2 px-3 rounded hover:bg-gray-100 hover:rounded-xl text-sm">
                  <FileText className="w-5 h-5" />
                  <span>All Users</span>
                </button>
                <button className="flex items-center gap-3 py-2 px-3 rounded hover:bg-gray-100 hover:rounded-xl text-sm">
                  <Settings className="w-5 h-5" />
                  <span>User Settings</span>
                </button>
              </div>
            )}
          </div>

          {/* Products Dropdown */}
          <div className="flex flex-col">
            <button
              className={`flex items-center ${
                !isOpen ? "justify-center" : "justify-between"
              } gap-4 py-2 px-3 rounded hover:bg-gray-100 hover:rounded-xl`}
              onClick={() => toggleDropdown("products")}
            >
              <div className="flex items-center gap-4">
                <ShoppingCart className="w-5 h-5" />
                {isOpen && <span>Products</span>}
              </div>

              {!isOpen ? null : dropdowns.products ? (
                <ChevronDown className="w-4 h-4" />
              ) : (
                <ChevronRight className="w-4 h-4" />
              )}
            </button>

            {isOpen && dropdowns.products && (
              <div className="ml-8 mt-1 flex flex-col gap-1">
                <button className="flex items-center gap-3 py-2 px-3 rounded hover:bg-gray-100 hover:rounded-xl text-sm">
                  <FileText className="w-5 h-5" />
                  <span>All Products</span>
                </button>
                <button className="flex items-center gap-3 py-2 px-3 rounded hover:bg-gray-100 hover:rounded-xl text-sm">
                  <Settings className="w-5 h-5" />
                  <span>Categories</span>
                </button>
              </div>
            )}
          </div>

          {/* Settings */}
          <button
            className={`${
              !isOpen && "justify-center"
            } flex items-center gap-4 py-2 px-3 rounded hover:bg-gray-100 hover:rounded-xl`}
          >
            <Settings className="w-5 h-5" />
            {isOpen && <span>Settings</span>}
          </button>
        </div>
      </nav>
    </aside>
  );
}
