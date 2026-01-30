export default function ProfileHistoryHeader() {
  return (
    <div className="mt-8 flex items-center justify-between px-6">
      <h2 className="text-lg font-semibold uppercase tracking-widest text-slate-200">
        Historique :
      </h2>
      <span className="text-xs uppercase tracking-[0.2em] text-slate-500">
        Dernières sessions
      </span>
    </div>
  );
}
