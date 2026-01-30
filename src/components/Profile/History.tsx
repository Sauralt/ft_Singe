import ProfileHistory from "./ProfileHistory";

type HistoryItem = {
  title: string;
  location: string;
  rank: number;
  decks: string[];
};

type ProfileHistorySectionProps = {
  items: HistoryItem[];
};

export default function ProfileHistorySection({
  items,
}: ProfileHistorySectionProps) {
  return (
    <section className="px-4 pb-8 pt-8 sm:px-6">
      <div className="flex items-center justify-between">
        <span className="text-xs uppercase tracking-[0.2em] text-slate-500">
          Dernières sessions
        </span>
      </div>
      <ProfileHistory items={items} />
    </section>
  );
}
