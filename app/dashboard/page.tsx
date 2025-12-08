import React, { use } from "react";

async function getData() {
  const res = await fetch("https://randomuser.me/api/");
  return res.json();
}

export default function DashboardPage() {
  const data = use(getData());
  const user = data.results[0].name;

  console.log(user);

  return (
    <div className="flex h-full w-full p-6">
      {user.first} {user.last}
    </div>
  );
}
