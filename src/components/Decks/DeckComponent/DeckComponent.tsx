"use client";

import { useState } from "react";
import BorrowButton from "./BorrowButton";
import DeckInfos from "./DeckInfos";
import { getTypeIconPath } from "@/types";

export interface Deck {
  id: string;
  name: string;
  format: string;
  colors: string[];
  holder?: string;
  owner?: string;
  thumbnail: string;
  decklist: string;
  description?: string;
  borrowedSince?: Date;
  lastModified: Date;
}

const mockDecks: Deck[] = [
  {
    id: "1",
    name: "Shadow Rider VMAX",
    format: "Expanded",
    colors: ["Psychic"],
	owner: "Tony Besnard",
	thumbnail: "/Assets/Decks/Thumbnail/shadow-rider.jpg",
    decklist: "/Assets/Decks/Lists/E_%20Shadow%20Rider%20-%2023_01_26.png",
    description: "A powerful Psychic deck featuring Shadow Rider VMAX.",
    lastModified: new Date("2026-01-28")
  },
  {
    id: "2",
    name: "Méga Lucario ex",
    format: "Standard",
    colors: ["fighting"],
	owner: "Tony Besnard",
	holder: "Corentin Fleuret",
	thumbnail: "/Assets/Decks/Thumbnail/mega-lucario.jpg",
	decklist: "/Assets/Decks/Lists/S_%20M-Lucario%20-%2023_01_26.png",
	description: "A fast-paced Fighting deck with Méga Lucario ex.",
    borrowedSince: new Date("2026-01-23"),
    lastModified: new Date("2026-01-29")
  },
  {
    id: "3",
    name: "Absol Box",
    format: "Standard",
    colors: ["dark"],
	owner: "Tony Besnard",
	holder: "Maxime Sauralt",
	thumbnail: "/Assets/Decks/Thumbnail/absol-box.jpg",
	decklist: "/Assets/Decks/Lists/S_%20Absol%20Box%20-%2023_01_26.png",
	description: "A dark-themed deck featuring Absol.",
    borrowedSince: new Date("2026-01-23"),
    lastModified: new Date("2026-01-29")
  }
];

const colorStyles: Record<string, string> = {
  psychic: "bg-fuchsia-400/40",
  fighting: "bg-orange-400/40",
  water: "bg-sky-400/40",
  fire: "bg-rose-400/40",
  grass: "bg-emerald-400/40",
  lightning: "bg-yellow-300/50",
  dark: "bg-slate-500/50",
  metal: "bg-zinc-400/50",
  fairy: "bg-pink-400/40"
};

export default function DeckComponent() {
  // Simuler la récupération depuis la base de données
  const decks = mockDecks; // Remplacer par un fetch réel plus tard
  const [selectedDeck, setSelectedDeck] = useState<Deck | null>(null);

  return (
    <div className="text-slate-100">
      <div className="relative mx-auto max-w-6xl px-6 pb-16 pt-8">
        {/* N'afficher que si des decks existent */}
        {decks.length > 0 ? (
          <section className="mt-10 grid gap-6 md:grid-cols-2 lg:grid-cols-3">
            {decks.map((deck) => (
              <div
                key={deck.id}
                onClick={() => setSelectedDeck(deck)}
                className="group cursor-pointer rounded-2xl bg-gradient-to-br from-white/10 via-white/5 to-white/5 p-6 shadow-lg ring-1 ring-white/10 transition hover:shadow-xl hover:ring-white/20"
              >
                <div className="flex items-center justify-between">
                  <h2 className="text-xl font-semibold">{deck.name}</h2>
                  <div className="flex gap-2">
                    {deck.colors.map((color) => (
                      <span key={color} className="flex h-6 w-6 items-center justify-center">
                        {getTypeIconPath(color) ? (
                          <img
                            src={getTypeIconPath(color)}
                            alt={color}
                            className="h-6 w-6"
                          />
                        ) : (
                          <span
                            className={`h-5 w-5 rounded-full ring-1 ring-white/20 ${colorStyles[color.toLowerCase()] ?? "bg-slate-400/40"}`}
                          />
                        )}
                      </span>
                    ))}
                  </div>
                </div>

                {deck.thumbnail && (
                  <div className="mt-4">
                    <img
                      src={deck.thumbnail}
                      alt={deck.name}
                      className="h-32 w-full rounded-lg object-cover shadow-md transition duration-300 group-hover:shadow-lg"
                    />
                  </div>
                )}

                <p className="mt-4 inline-flex items-center rounded-full bg-white/10 px-2.5 py-0.5 text-xs text-slate-300">
                  {deck.format}
                </p>

                <div className="mt-4 space-y-1">
                  {deck.owner && (
                    <p className="text-sm text-slate-300">
                      <span className="text-slate-400">Propriétaire :</span> {deck.owner}
                    </p>
                  )}
                  {deck.holder && (
                    <p className="text-sm text-slate-300">
                      <span className="text-slate-400">Détenteur :</span> {deck.holder}
                    </p>
                  )}
                  {deck.holder && deck.borrowedSince && (
                    <p className="text-sm text-slate-300">
                      <span className="text-slate-400">Prêté depuis :</span>{" "}
                      {deck.borrowedSince.toLocaleDateString("fr-FR")}
                    </p>
                  )}
                </div>

                {!deck.holder && (
                  <div className="mt-6" onClick={(event) => event.stopPropagation()}>
                    <BorrowButton />
                  </div>
                )}
              </div>
            ))}
          </section>
        ) : (
          <div className="mt-10 text-center text-slate-400">
            <p>Aucun deck disponible pour le moment.</p>
          </div>
        )}

        {selectedDeck && (
          <DeckInfos deck={selectedDeck} onClose={() => setSelectedDeck(null)} />
        )}
      </div>
    </div>
  );
}
