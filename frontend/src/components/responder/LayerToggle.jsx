export default function LayerToggle() {
  return (
    <div className="absolute top-6 right-6 bg-[#162435]/60 backdrop-blur-xl border border-white/10 p-4 rounded-2xl shadow-2xl shadow-blue-500/10 z-[1000] space-y-3">

      <p className="text-xs text-slate-400 font-semibold uppercase">
        Layer Toggle
      </p>

      <div className="flex gap-2">
        <button className="px-3 py-1 bg-blue-600 rounded-full text-xs">
          Traffic
        </button>
        <button className="px-3 py-1 bg-[#0b1420] rounded-full text-xs text-slate-400">
          Hydrants
        </button>
        <button className="px-3 py-1 bg-[#0b1420] rounded-full text-xs text-slate-400">
          CCTV
        </button>
      </div>

    </div>
  );
}
