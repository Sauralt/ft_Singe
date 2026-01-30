import { getTypeIconPath } from "@/types";

const colorStyles: Record<string, string> = {
  psychic: "bg-fuchsia-400/40",
  fighting: "bg-orange-400/40",
  water: "bg-sky-400/40",
  fire: "bg-rose-400/40",
  grass: "bg-emerald-400/40",
  lightning: "bg-yellow-300/50",
  dark: "bg-slate-500/50",
  metal: "bg-zinc-400/50",
  fairy: "bg-pink-400/40"
};

interface DeckColorIconProps {
  color: string;
}

export default function DeckColorIcon({ color }: DeckColorIconProps) {
  const iconPath = getTypeIconPath(color);

  return iconPath ? (
    <img src={iconPath} alt={color} className="h-6 w-6" />
  ) : (
    <span
      className={`h-5 w-5 rounded-full ring-1 ring-white/20 ${colorStyles[color.toLowerCase()] ?? "bg-slate-400/40"}`}
    />
  );
}
