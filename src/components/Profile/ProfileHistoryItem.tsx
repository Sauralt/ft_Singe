type ProfileHistoryItemProps = {
  title: string;
  location: string;
  rank: number;
  decks: string[];
};

export default function ProfileHistoryItem({
  title,
  location,
  rank,
  decks,
}: ProfileHistoryItemProps) {
  return (
    <div className="flex flex-wrap items-center justify-between gap-4 rounded-2xl bg-white/5 px-4 py-3">
      <div className="flex items-center gap-4">
        <div className="flex h-9 w-9 items-center justify-center rounded-full bg-yellow-400/90 text-slate-900">
          <span className="text-sm font-bold">{rank}</span>
        </div>
        <div>
          <p className="text-sm font-semibold text-slate-100">{title}</p>
          <p className="text-xs text-slate-400">{location}</p>
        </div>
      </div>
      <div className="flex items-center gap-2">
        {decks.map((deck) => (
          <img
            key={deck}
            className="h-7 w-7 rounded-full border border-white/20"
            src={deck}
            alt="Deck"
          />
        ))}
        <button
          type="button"
          className="flex h-7 w-7 items-center justify-center rounded-md border border-white/20 text-slate-200 transition hover:bg-white/10"
          aria-label="Voir les détails"
        >
          <i className="fas fa-bars" aria-hidden="true" />
        </button>
      </div>
    </div>
  );
}
