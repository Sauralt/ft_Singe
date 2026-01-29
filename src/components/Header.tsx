import ProfilIcon from "./ProfilIcon";
import Search from "./Search";

export default function Header() {
  return (
    <header className="flex items-center justify-between rounded-2xl bg-white/5 p-6">
        <div className="flex items-center gap-3">
            <div className="flex h-10 w-10 items-center justify-center rounded-full bg-white/10 text-slate-200">
                <img className="ml-1 text-sm rounded-full" src="/Assets/logo.png" alt="Logo" />
            </div>
            <span className="text-lg font-semibold">Havre de Duel</span>
        </div>
      	<div className="flex items-center gap-4">
            <Search />
            <ProfilIcon />
     	</div>
    </header>
  );
}
