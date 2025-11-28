export default function Sidebar({
  isOpen,
  isCollapsed,
  onClose,
}: {
  isOpen: boolean;
  isCollapsed: boolean;
  onClose: () => void;
}) {
  return (
    <>
      {/* Overlay untuk mobile */}
      {isOpen && (
        <div
          className="fixed inset-0 bg-black/40 lg:hidden"
          onClick={onClose}
        />
      )}

      <aside
        className={`
          fixed top-0 left-0 z-40 h-full bg-white border-r shadow-lg 
          transition-all duration-300 ease-in-out

          /* Mobile: sidebar slide-in dari kiri */
          ${isOpen ? "translate-x-0" : "-translate-x-full"} 
          w-64 

          /* Desktop: selalu muncul */
          lg:translate-x-0 
          ${isCollapsed ? "lg:w-20" : "lg:w-64"} 
        `}
      >
        <div className="p-4 font-semibold">Sidebar</div>
      </aside>
    </>
  );
}
