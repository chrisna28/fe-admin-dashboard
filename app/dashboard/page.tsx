"use client";

export default function DashboardPage() {
  return (
    <div>
      <h2 className="text-2xl font-bold mb-4">Overview</h2>

      <div className="grid grid-cols-3 gap-4">
        <div className="p-4 bg-white border rounded">Total Users: 120</div>
        <div className="p-4 bg-white border rounded">Total Posts: 85</div>
        <div className="p-4 bg-white border rounded">New Messages: 5</div>
      </div>
    </div>
  );
}
