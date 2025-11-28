import { ChevronsLeftIcon, MenuIcon } from "lucide-react";

export default function Header({
  onToggleSidebarMobile,
  onToggleSidebarCollapse,
}: {
  onToggleSidebarMobile: () => void;
  onToggleSidebarCollapse: () => void;
}) {
  return (
    <header className="sticky top-0 z-30 bg-white shadow px-4 py-3 flex justify-between items-center">
      {/* Tombol untuk mobile */}
      <button className="lg:hidden" onClick={onToggleSidebarMobile}>
        <MenuIcon className="w-6 h-6" />
      </button>

      <button className="hidden lg:block" onClick={onToggleSidebarCollapse}>
        <ChevronsLeftIcon className="w-5 h-5" />
      </button>

      <span className="font-semibold">Dashboard</span>

      {/* Tombol collapse untuk desktop */}
    </header>
  );
}
