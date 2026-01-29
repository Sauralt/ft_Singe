"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";

export default function PlanningButton() {
  const pathname = usePathname();
  const isActive = pathname === "/";

  return (
    <Link href="/">
      <div
        className={`rounded-lg px-4 py-2 flex items-center gap-2 transition ${
          isActive
            ? "bg-blue-500 text-white"
            : "bg-white/10 text-slate-100 hover:bg-white/20"
        }`}
      >
        <p className="text-sm font-bold">Planning</p>
      </div>
    </Link>
  );
}
