import Agenda from "@/components/Main/Agenda";

export default function Home() {
  return (
    <div className="min-h-screen text-slate-100">
      <div className="relative mx-auto max-w-6xl px-6 pb-16 pt-8">
        <div className="pointer-events-none absolute inset-0 -z-10 opacity-50">
          <div className="absolute left-8 top-4 h-72 w-72 rounded-full bg-blue-500/10 blur-3xl" />
          <div className="absolute right-10 top-10 h-72 w-72 rounded-full bg-purple-500/10 blur-3xl" />
        </div>

        <main className="mt-10">
          <h1 className="text-center text-3xl font-semibold tracking-wide md:text-4xl">
            Prochains évènements
          </h1>

          <section className="mt-10 rounded-3xl bg-white/5 p-6 shadow-[0_20px_60px_-30px_rgba(0,0,0,0.8)]">
            <div className="grid gap-6 lg:grid-cols-[1.2fr_0.8fr]">
              <Agenda />

              <div className="flex flex-col justify-between rounded-2xl bg-white/5 p-6">
                <div className="rounded-xl bg-white/10 px-4 py-2 text-center text-lg font-semibold">
                  Session de ligue
                </div>

                <div className="mt-6 space-y-4 text-center">
                  <p className="text-sm uppercase tracking-widest text-slate-400">Parence</p>
                  <p className="text-2xl font-semibold">14h</p>
                  <p className="text-sm uppercase tracking-widest text-slate-400">Standard</p>
                  <p className="text-2xl font-semibold">5$</p>
                </div>

                <div className="mt-8 overflow-hidden rounded-2xl bg-gradient-to-br from-orange-500/20 via-purple-500/20 to-blue-500/20 p-6">
                  <div className="flex h-40 items-end justify-between">
                    <div className="space-y-2">
                      <div className="h-3 w-24 rounded-full bg-white/20" />
                      <div className="h-3 w-16 rounded-full bg-white/10" />
                    </div>
                    <div className="text-6xl">🔥</div>
                  </div>
                </div>
              </div>
            </div>
          </section>
        </main>
      </div>
    </div>
  );
}
