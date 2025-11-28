import { redirect } from "next/navigation";

export default function rootPage() {
  return redirect("/login");
}
