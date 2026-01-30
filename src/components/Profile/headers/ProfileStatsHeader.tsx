type ProfileStatsHeaderProps = {
  points: number;
};

export default function ProfileStatsHeader({ points }: ProfileStatsHeaderProps) {
  return (
    <div className="mt-6 flex items-center gap-3 rounded-2xl bg-white/5 px-5 py-3 text-sm font-semibold text-slate-100 shadow-inner">
      <span className="uppercase tracking-[0.2em] text-slate-400">
        Championnat Points :
      </span>
      <span className="text-lg text-lime-400">{points}</span>
    </div>
  );
}
