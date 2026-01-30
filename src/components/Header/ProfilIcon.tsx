import Link from "next/link";

export default function ProfilIcon() {
	  return (
	<Link href="/profil" aria-label="Profil">
		<div className="flex h-10 w-10 items-center justify-center rounded-full bg-white/10 text-slate-200">
		<img className="ml-1 text-sm rounded-full hover:brightness-125" src="/Assets/icon.jpg" alt="Profile Icon" />
		</div>
	</Link>
  );
}
