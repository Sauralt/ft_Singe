import Link from "next/link";

type ProfileCoverHeaderProps = {
  bannerUrl: string;
  avatarUrl: string;
  username: string;
};

export default function ProfileCoverHeader({
  bannerUrl,
  avatarUrl,
  username,
}: ProfileCoverHeaderProps) {
  return (
    <div className="relative h-44 overflow-hidden rounded-3xl sm:h-52">
      <img
        className="absolute inset-0 h-full w-full object-cover opacity-80"
        src={bannerUrl}
        alt="Bannière de profil"
      />
      <div className="absolute inset-0 bg-gradient-to-b from-black/20 via-slate-900/40 to-slate-950/80" />
      <Link
        href="/"
        aria-label="Fermer"
        className="absolute right-4 top-4 flex h-9 w-9 items-center justify-center rounded-full border border-white/30 bg-black/30 text-white transition hover:bg-white/20"
      >
        <i className="fas fa-times" aria-hidden="true" />
      </Link>
      <div className="absolute -bottom-10 left-6 flex items-center gap-4">
        <div className="flex h-24 w-24 items-center justify-center rounded-full border-4 border-slate-900/80 bg-white/10 shadow-xl sm:h-28 sm:w-28">
          <img
            className="h-full w-full rounded-full object-cover"
            src={avatarUrl}
            alt={`Avatar de ${username}`}
          />
        </div>
      </div>
    </div>
  );
}
