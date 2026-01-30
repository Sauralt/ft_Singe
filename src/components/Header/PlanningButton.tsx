"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";

export default function PlanningButton() {
  const pathname = usePathname();
  const isActive = pathname === "/";

  return (
    <Link href="/" aria-label="Planning">
      <div
        className={`rounded-lg px-4 py-2 flex items-center gap-2 transition ${
          isActive
            ? "bg-blue-500 text-white"
            : "bg-white/10 text-slate-100 hover:bg-white/20"
        }`}
      >
        <i className="fas fa-calendar-alt text-sm md:hidden" aria-hidden="true" />
        <p className="hidden text-sm font-bold md:block">Planning</p>
      </div>
    </Link>
  );
}
