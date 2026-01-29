export default function Search() {
	  return (
	<div className="relative">
	  <input
		type="text"
		placeholder="Rechercher des joueurs..."
		className="w-full rounded-lg bg-white/10 px-4 py-2 pl-10 focus:outline-none focus:ring-2 focus:ring-blue-500 hover:bg-white/20 text-sm"
	  />
	  <i className="fas fa-search absolute left-3 top-1/2 transform -translate-y-1/2 text-white/50 pointer-events-none"></i>
	</div>
  );
}
