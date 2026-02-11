export default function RoutingCard() {
  return (
    <div className="absolute top-28 right-6 w-[320px] bg-[#162435]/60 backdrop-blur-xl border border-white/10 p-6 rounded-2xl shadow-2xl shadow-blue-500/10 z-[1000]">

      <p className="text-xs text-slate-400 uppercase font-semibold">
        Dynamic Routing
      </p>

      <p className="mt-4 text-sm text-slate-300">
        Recommended route adjusted due to traffic congestion.
      </p>

      <div className="mt-6">
        <p className="text-xs text-slate-400 mb-2">Current ETA</p>

        <div className="w-full bg-[#0b1420] h-2 rounded-full">
          <div className="bg-green-400 h-2 rounded-full w-[60%]"></div>
        </div>

        <p className="mt-2 text-green-400 font-bold">
          7.5 mins
        </p>
      </div>

    </div>
  );
}
