export default function ContactPage() {
  return (
    <div className="min-h-screen text-slate-100">
      <div className="relative mx-auto max-w-6xl px-6 pb-16 pt-8">
        <div className="pointer-events-none absolute inset-0 -z-10 opacity-50">
          <div className="absolute left-8 top-4 h-72 w-72 rounded-full bg-blue-500/10 blur-3xl" />
          <div className="absolute right-10 top-10 h-72 w-72 rounded-full bg-purple-500/10 blur-3xl" />
        </div>

        <main className="mt-10">
          <h1 className="text-center text-3xl font-semibold tracking-wide md:text-4xl">
            Contact
          </h1>

          <section className="mt-10 rounded-3xl bg-white/5 p-6 shadow-[0_20px_60px_-30px_rgba(0,0,0,0.8)]">
            <div className="text-center text-slate-400">
              <p>Formulaire de contact à venir</p>
            </div>
          </section>
        </main>
      </div>
    </div>
  );
}
