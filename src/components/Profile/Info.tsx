type ProfileInfoProps = {
  username: string;
  title: string;
  badges: string[];
  points: number;
};

export default function ProfileInfo({
  username,
  title,
  badges,
  points,
}: ProfileInfoProps) {
  return (
    <section className="px-4 pt-8 sm:px-6">
      <div className="-mt-6 flex flex-col gap-4">
        <div className="flex flex-col gap-2 sm:flex-row sm:items-center sm:justify-between">
          <div>
            <div className="flex items-center gap-2 text-2xl font-semibold tracking-wide sm:text-3xl">
              <span>{username}</span>
              <i className="fas fa-check-circle text-sky-400" aria-hidden="true" />
              <i className="fab fa-telegram-plane text-slate-300" aria-hidden="true" />
            </div>
            <p className="text-sm uppercase tracking-[0.2em] text-slate-400">
              {title}
            </p>
          </div>
          <div className="flex flex-wrap items-center gap-2 text-xs font-semibold uppercase">
            {badges.map((badge) => (
              <span
                key={badge}
                className="rounded-full bg-white/10 px-3 py-1 text-slate-100"
              >
                {badge}
              </span>
            ))}
          </div>
        </div>

        <div className="flex items-center gap-3 px-1 text-sm font-semibold text-slate-100">
          <span className="uppercase tracking-[0.2em] text-slate-400">
            Championnat Points :
          </span>
          <span className="text-lg text-lime-400">{points}</span>
        </div>
      </div>
    </section>
  );
}
