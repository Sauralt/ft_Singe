import ProfilIcon from "./ProfilIcon";
import Search from "./Search";

export default function Header() {
  return (
    <header className="flex items-center justify-between text-sm">
      <div className="flex items-center gap-2 font-semibold tracking-wide">
        <span className="flex h-8 w-8 items-center justify-center rounded-full bg-white/10 text-xs font-bold">
          H
        </span>
        Havre De Duel
      </div>
	  <Search />
	  <ProfilIcon />
    </header>
  );
}
