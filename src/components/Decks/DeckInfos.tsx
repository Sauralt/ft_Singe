"use client";

import { useEffect } from "react";
import type { Deck } from "./DeckComponent";

interface DeckInfosProps {
  deck: Deck;
  onClose: () => void;
}

export default function DeckInfos({ deck, onClose }: DeckInfosProps) {
  const lastModifiedLabel = deck.lastModified.toLocaleDateString("fr-FR");

  useEffect(() => {
    const handleKeyDown = (event: KeyboardEvent) => {
      if (event.key === "Escape") {
        onClose();
      }
    };

    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, [onClose]);

  return (
    <div
      className="fixed inset-0 z-50 flex items-center justify-center bg-black/60 p-4"
      onClick={onClose}
      role="dialog"
      aria-modal="true"
    >
      <div
        className="w-[min(96vw,1100px)] max-h-[90vh] overflow-y-auto rounded-2xl bg-slate-900 p-6 ring-1 ring-white/10"
        onClick={(event) => event.stopPropagation()}
      >
        <div className="flex items-start justify-between">
          <h3 className="text-xl font-semibold">{deck.name}</h3>
          <button
            className="rounded-md bg-white/10 px-2 py-1 text-sm text-slate-200 hover:bg-white/20"
            onClick={onClose}
            type="button"
            aria-label="Fermer"
          >
            Fermer
          </button>
        </div>

        {deck.decklist && (
          <img
            src={deck.decklist}
            alt={deck.name}
            className="mt-6 w-full max-h-[70vh] rounded-lg object-contain bg-slate-950/40"
          />
        )}

        <div className="mt-4 space-y-2 text-sm text-slate-300">
          {deck.description && <p>{deck.description}</p>}
          <p>
            <span className="text-slate-400">Dernière modif :</span>{" "}
            {lastModifiedLabel}
          </p>
        </div>
      </div>
    </div>
  );
}
