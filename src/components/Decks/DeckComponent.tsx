"use client";

import { useState } from "react";
import DeckCard from "./DeckCard";
import DeckInfos from "./DeckInfos";

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

export default function DeckComponent() {
  // Simuler la récupération depuis la base de données
  const decks = mockDecks; // Remplacer par un fetch réel plus tard
  const [selectedDeck, setSelectedDeck] = useState<Deck | null>(null);

  const handleSelectDeck = (deck: Deck) => setSelectedDeck(deck);
  const handleCloseModal = () => setSelectedDeck(null);
  const handleBorrowClick = (event: React.MouseEvent<HTMLDivElement>) => {
    event.stopPropagation();
  };

  return (
    <div className="text-slate-100">
      <div className="relative mx-auto max-w-6xl px-6 pb-16 pt-8">
        {/* N'afficher que si des decks existent */}
        {decks.length > 0 ? (
          <section className="mt-10 grid gap-6 md:grid-cols-2 lg:grid-cols-3">
            {decks.map((deck) => (
              <DeckCard
                key={deck.id}
                deck={deck}
                onSelect={handleSelectDeck}
                onBorrowClick={handleBorrowClick}
              />
            ))}
          </section>
        ) : (
          <div className="mt-10 text-center text-slate-400">
            <p>Aucun deck disponible pour le moment.</p>
          </div>
        )}

        {selectedDeck && <DeckInfos deck={selectedDeck} onClose={handleCloseModal} />}
      </div>
    </div>
  );
}
