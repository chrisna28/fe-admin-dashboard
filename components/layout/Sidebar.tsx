export default function Sidebar() {
  return (
    <aside className="w-64 bg-white border-r h-screen p-4">
      <h2 className="font-bold text-xl mb-6">Admin Panel</h2>

      <nav className="flex flex-col gap-3">
        <a href="/dashboard" className="text-gray-700 hover:text-black">
          Dashboard
        </a>
        <a href="/dashboard/users" className="text-gray-700 hover:text-black">
          Users
        </a>
        <a href="/dashboard/posts" className="text-gray-700 hover:text-black">
          Posts
        </a>
      </nav>
    </aside>
  );
}
