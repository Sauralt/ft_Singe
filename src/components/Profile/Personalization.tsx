import Link from "next/link";

type ProfilePersonalizationProps = {
  bannerUrl: string;
  avatarUrl: string;
  username: string;
};

export default function ProfilePersonalization({
  bannerUrl,
  avatarUrl,
  username,
}: ProfilePersonalizationProps) {
  return (
    <section className="px-4 pt-6 sm:px-6">
      <div className="relative mt-4 h-44 sm:h-52">
        <div className="relative h-full overflow-hidden rounded-3xl">
          <img
            className="absolute inset-0 h-full w-full object-cover opacity-80"
            src={bannerUrl}
            alt="Bannière de profil"
          />
          <div className="absolute inset-0 bg-gradient-to-b from-black/20 via-slate-900/40 to-slate-950/80" />
        </div>
        <div className="absolute -bottom-14 left-1/2 z-30 flex -translate-x-1/2 items-center justify-center">
          <div className="flex h-32 w-32 items-center justify-center rounded-full border-4 border-slate-900/80 bg-white/10 shadow-2xl sm:h-36 sm:w-36">
            <img
              className="h-full w-full rounded-full object-cover"
              src={avatarUrl}
              alt={`Avatar de ${username}`}
            />
          </div>
        </div>
      </div>
    </section>
  );
}
