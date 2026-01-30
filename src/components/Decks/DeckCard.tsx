import BorrowButton from "./BorrowButton";
import DeckColorIcon from "./DeckColorIcon";
import type { Deck } from "./DeckComponent";

interface DeckCardProps {
  deck: Deck;
  onSelect: (deck: Deck) => void;
  onBorrowClick: (event: React.MouseEvent<HTMLDivElement>) => void;
}

export default function DeckCard({ deck, onSelect, onBorrowClick }: DeckCardProps) {
  const formatKey = deck.format.toLowerCase();
  const formatClass = formatKey.includes("expanded") || formatKey.includes("étendu")
    ? "bg-rose-500/20 text-rose-200"
    : formatKey.includes("standard")
      ? "bg-sky-500/20 text-sky-200"
      : "bg-white/10 text-slate-300";

  return (
    <div
      onClick={() => onSelect(deck)}
      className="group cursor-pointer rounded-2xl bg-gradient-to-br from-white/10 via-white/5 to-white/5 p-6 shadow-lg ring-1 ring-white/10 transition hover:shadow-xl hover:ring-white/20"
    >
      <div className="flex items-center justify-between">
        <div className="flex items-center gap-2">
          <h2 className="text-xl font-semibold">{deck.name}</h2>
          <span
            aria-hidden="true"
            className="flex h-6 w-6 items-center justify-center rounded-full bg-white/10 text-sm text-slate-200 transition group-hover:bg-white/20"
          >
            ↗
          </span>
        </div>
        <div className="flex gap-2">
          {deck.colors.map((color) => (
            <span key={color} className="flex h-6 w-6 items-center justify-center">
              <DeckColorIcon color={color} />
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

      <p className={`mt-4 inline-flex items-center rounded-full px-2.5 py-0.5 text-xs ${formatClass}`}>
        {deck.format}
      </p>

      <div className="mt-4 space-y-1">
        {deck.owner && (
          <p className="flex items-center gap-2 text-sm text-slate-300">
            <i className="fas fa-user text-slate-400" aria-label="Propriétaire" />
            <span>{deck.owner}</span>
          </p>
        )}
        {deck.holder && (
          <p className="flex flex-wrap items-center gap-2 text-sm text-slate-300">
            <i className="fas fa-hand-holding text-slate-400" aria-label="Détenteur" />
            <span>{deck.holder}</span>
            {deck.borrowedSince && (
              <span className="flex items-center gap-2 text-slate-400">
                <span className="h-1 w-1 rounded-full bg-slate-500" aria-hidden="true" />
                <i className="fas fa-calendar-alt" aria-label="Prêté depuis" />
                <span>{deck.borrowedSince.toLocaleDateString("fr-FR")}</span>
              </span>
            )}
          </p>
        )}
      </div>

      {!deck.holder && (
        <div className="mt-6 flex justify-center" onClick={onBorrowClick}>
          <BorrowButton />
        </div>
      )}
    </div>
  );
}
