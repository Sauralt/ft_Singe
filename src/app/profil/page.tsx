import ProfilePersonalization from "@/components/Profile/Personalization";
import ProfileInfo from "@/components/Profile/Info";
import ProfileHistorySection from "@/components/Profile/History";

const historyItems = [
  {
    title: "Session de ligue",
    location: "Parence",
    rank: 1,
    decks: [
      "/Assets/Decks/Thumbnail/shadow-rider.jpg",
      "/Assets/Decks/Thumbnail/mega-lucario.jpg",
    ],
  },
  {
    title: "Session de ligue",
    location: "Geek Island",
    rank: 2,
    decks: [
      "/Assets/Decks/Thumbnail/absol-box.jpg",
      "/Assets/Decks/Thumbnail/shadow-rider.jpg",
    ],
  },
  {
    title: "Session de ligue",
    location: "Parence",
    rank: 1,
    decks: [
      "/Assets/Decks/Thumbnail/mega-lucario.jpg",
      "/Assets/Decks/Thumbnail/absol-box.jpg",
    ],
  },
  {
    title: "Session de ligue",
    location: "Parence",
    rank: 1,
    decks: [
      "/Assets/Decks/Thumbnail/shadow-rider.jpg",
      "/Assets/Decks/Thumbnail/absol-box.jpg",
    ],
  },
];

export default function ProfilPage() {
  return (
    <div className="min-h-screen text-slate-100">
      <div className="relative mx-auto max-w-5xl px-4 pb-20 pt-10 sm:px-6">
        <div className="pointer-events-none absolute inset-0 -z-10 opacity-40">
          <div className="absolute left-10 top-10 h-72 w-72 rounded-full bg-blue-500/10 blur-3xl" />
          <div className="absolute right-6 top-14 h-72 w-72 rounded-full bg-purple-500/10 blur-3xl" />
        </div>

        <section className="overflow-hidden rounded-3xl bg-slate-900/70 shadow-[0_30px_70px_-40px_rgba(0,0,0,0.9)] backdrop-blur">
          <ProfilePersonalization
            bannerUrl="/Assets/Decks/Thumbnail/shadow-rider.jpg"
            avatarUrl="/Assets/icon.jpg"
            username="xHemera"
          />
          <ProfileInfo
            username="xHemera"
            title="#1 Mimikyu Enjoyer"
            badges={["Owner", "GigaChad"]}
            points={92}
          />
          <ProfileHistorySection items={historyItems} />
        </section>
      </div>
    </div>
  );
}
