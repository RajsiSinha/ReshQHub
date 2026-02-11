import AnimatedProgress from "./AnimatedProgress";

export default function KPICards() {
  return (
    <div className="grid grid-cols-3 gap-8">

      {/* TOTAL INCIDENTS */}
      <div className="bg-[#121f32] rounded-2xl p-6 border border-blue-500/10 shadow-xl hover:shadow-blue-500/10 transition">

        <div className="flex justify-between items-start mb-6">
          <div className="bg-[#1e2f44] p-3 rounded-xl">
            ⚠️
          </div>
          <span className="text-emerald-400 text-sm font-semibold">
            +12.4%
          </span>
        </div>

        <p className="text-slate-400 text-sm uppercase tracking-wide">
          Total Incidents
        </p>

        <h2 className="text-4xl font-bold mt-2">
          1,284
        </h2>

        <p className="text-slate-500 text-sm mt-1">
          Last 24h
        </p>

        <div className="mt-6">
          <AnimatedProgress value={65} color="bg-blue-500" />
        </div>

      </div>

      {/* ACTIVE CASES */}
      <div className="bg-[#121f32] rounded-2xl p-6 border border-blue-500/10 shadow-xl hover:shadow-orange-500/10 transition">

        <div className="flex justify-between items-start mb-6">
          <div className="bg-[#1e2f44] p-3 rounded-xl">
            🔄
          </div>
          <span className="text-orange-400 text-sm font-semibold">
            CRITICAL
          </span>
        </div>

        <p className="text-slate-400 text-sm uppercase tracking-wide">
          Active Cases
        </p>

        <h2 className="text-4xl font-bold mt-2">
          42
        </h2>

        <p className="text-slate-500 text-sm mt-1">
          Requiring Attention
        </p>

        <div className="mt-6">
          <AnimatedProgress value={40} color="bg-orange-500" />
        </div>

      </div>

      {/* RESOLVED */}
      <div className="bg-[#121f32] rounded-2xl p-6 border border-blue-500/10 shadow-xl hover:shadow-emerald-500/10 transition">

        <div className="flex justify-between items-start mb-6">
          <div className="bg-[#1e2f44] p-3 rounded-xl">
            ✅
          </div>
          <span className="text-emerald-400 text-sm font-semibold">
            SUCCESS
          </span>
        </div>

        <p className="text-slate-400 text-sm uppercase tracking-wide">
          Resolved
        </p>

        <h2 className="text-4xl font-bold mt-2">
          1,242
        </h2>

        <p className="text-slate-500 text-sm mt-1">
          Closing Rate: 96%
        </p>

        <div className="mt-6">
          <AnimatedProgress value={96} color="bg-emerald-500" />
        </div>

      </div>

    </div>
  );
}
