export default function AdminHeader() {
  return (
    <div className="h-20 flex items-center justify-between px-8 border-b border-blue-500/10 bg-[#0f1b2a]">

      <div>
        <h1 className="text-2xl font-bold">
          Real-time Dashboard
        </h1>
        <p className="text-sm text-slate-400">
          Live system status across all emergency sectors
        </p>
      </div>

      <div className="flex items-center gap-4">

        <input
          type="text"
          placeholder="Search incidents, assets..."
          className="bg-[#162435] px-4 py-2 rounded-lg text-sm outline-none w-72"
        />

        <button className="bg-blue-600 hover:bg-blue-700 px-5 py-2 rounded-lg text-sm font-semibold">
          Broadcast Alert
        </button>

        <div className="w-9 h-9 rounded-full bg-[#162435] flex items-center justify-center">
          🔔
        </div>

      </div>

    </div>
  );
}
