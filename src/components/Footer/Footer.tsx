export default function Footer() {
  return (
    <footer className="border-t border-blue-500/30 bg-gradient-to-br from-[#0b0f1b] via-[#141826] to-[#0b0f1b] text-slate-100">
      <div className="mx-auto max-w-6xl px-6 py-12">
        <div className="grid grid-cols-3 gap-8">
          {/* Navigation */}
          <div>
            <h3 className="text-sm font-semibold uppercase tracking-widest text-blue-400 mb-4 pb-3 border-b border-blue-500/30">
              Navigation
            </h3>
            <ul className="space-y-2">
              <li>
                <a href="/" className="text-slate-400 hover:text-slate-100 transition">
                  Accueil
                </a>
              </li>
              <li>
                <a href="/deck" className="text-slate-400 hover:text-slate-100 transition">
                  Deck
                </a>
              </li>
              <li>
                <a href="/planning" className="text-slate-400 hover:text-slate-100 transition">
                  Planning
                </a>
              </li>
              <li>
                <a href="/contact" className="text-slate-400 hover:text-slate-100 transition">
                  Contact
                </a>
              </li>
            </ul>
          </div>

          {/* Ressources */}
          <div>
            <h3 className="text-sm font-semibold uppercase tracking-widest text-blue-400 mb-4 pb-3 border-b border-blue-500/30">
              Ressources
            </h3>
            <ul className="space-y-2">
              <li>
                <a
                  href="https://discord.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-slate-400 hover:text-slate-100 transition"
                >
                  Discord
                </a>
              </li>
              <li>
                <a
                  href="#"
                  className="text-slate-400 hover:text-slate-100 transition"
                >
                  TCG Guide
                </a>
              </li>
              <li>
                <a
                  href="https://www.pokemon.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-slate-400 hover:text-slate-100 transition"
                >
                  Site Pokémon
                </a>
              </li>
            </ul>
          </div>

          {/* Legal */}
          <div>
            <h3 className="text-sm font-semibold uppercase tracking-widest text-blue-400 mb-4 pb-3 border-b border-blue-500/30">
              Legal
            </h3>
            <ul className="space-y-2">
              <li>
                <a href="#" className="text-slate-400 hover:text-slate-100 transition">
                  Conditions d'utilisation
                </a>
              </li>
              <li>
                <a href="#" className="text-slate-400 hover:text-slate-100 transition">
                  Politique de confidentialité
                </a>
              </li>
            </ul>
          </div>
        </div>

        {/* Copyright */}
        <div className="mt-8 pt-8 border-t border-white/10 text-center text-slate-500 text-xs uppercase tracking-widest">
          <p>&copy; 2026 Havre de Duel. Tous droits réservés.</p>
        </div>
      </div>
    </footer>
  );
}
