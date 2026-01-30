"use client";

import Link from "next/link";
import DeckButton from "./DecksButton";
import PlanningButton from "./PlanningButton";
import ProfilIcon from "./ProfilIcon";
import Search from "./Search";

export default function Header() {
  return (
    <header className="mx-auto mt-8 flex w-full max-w-6xl items-center justify-between rounded-2xl bg-white/5 p-4 sm:p-6">
      <Link href="/" className="flex items-center gap-2 sm:gap-3 transition hover:opacity-80">
        <div className="flex h-10 w-10 items-center justify-center rounded-full bg-white/10 text-slate-200">
          <img className="ml-1 text-sm rounded-full" src="/Assets/logo.png" alt="Logo" />
        </div>
        <span className="hidden text-lg font-semibold sm:inline">Havre de Duel</span>
      </Link>
      <div className="flex items-center gap-2 sm:gap-4">
        <PlanningButton />
        <DeckButton />
        <Search />
        <ProfilIcon />
      </div>
    </header>
  );
}
