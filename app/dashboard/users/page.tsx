"use client";

export default function UsersPage() {
  return (
    <div>
      <h2 className="text-xl font-bold mb-4">Users</h2>

      <table className="min-w-full bg-white border">
        <thead>
          <tr className="border-b">
            <th className="p-3 text-left">Name</th>
            <th className="p-3 text-left">Email</th>
            <th className="p-3 text-left">Actions</th>
          </tr>
        </thead>

        <tbody>
          <tr className="border-b">
            <td className="p-3">Chrisna</td>
            <td className="p-3">chrisna@example.com</td>
            <td className="p-3">
              <button className="text-blue-500 hover:underline mr-2">
                Edit
              </button>
              <button className="text-red-500 hover:underline">Delete</button>
            </td>
          </tr>
        </tbody>
      </table>
    </div>
  );
}
