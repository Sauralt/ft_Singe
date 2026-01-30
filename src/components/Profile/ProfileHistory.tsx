import ProfileHistoryItem from "./ProfileHistoryItem";

type HistoryItem = {
  title: string;
  location: string;
  rank: number;
  decks: string[];
};

type ProfileHistoryProps = {
  items: HistoryItem[];
};

export default function ProfileHistory({ items }: ProfileHistoryProps) {
  return (
    <div className="mt-4 space-y-3">
      {items.map((item, index) => (
        <ProfileHistoryItem key={`${item.title}-${index}`} {...item} />
      ))}
    </div>
  );
}
