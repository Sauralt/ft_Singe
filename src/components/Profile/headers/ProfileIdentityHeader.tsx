type ProfileIdentityHeaderProps = {
  username: string;
  title: string;
  badges: string[];
};

export default function ProfileIdentityHeader({
  username,
  title,
  badges,
}: ProfileIdentityHeaderProps) {
  return (
    <div className="mt-14 flex flex-col gap-3 px-6 sm:flex-row sm:items-center sm:justify-between">
      <div>
        <div className="flex items-center gap-2 text-2xl font-semibold tracking-wide sm:text-3xl">
          <span>{username}</span>
          <i className="fas fa-check-circle text-sky-400" aria-hidden="true" />
          <i className="fab fa-telegram-plane text-slate-300" aria-hidden="true" />
        </div>
        <p className="text-sm uppercase tracking-[0.2em] text-slate-400">{title}</p>
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
  );
}
