export default function BottomStats() {
  return (
    <div className="absolute bottom-6 left-1/2 -translate-x-1/2 w-[700px] bg-[#162435]/95 backdrop-blur-md border border-blue-500/10 rounded-2xl p-8 flex justify-between text-center shadow-2xl z-[1000]">

      <div>
        <p className="text-xs text-slate-400">Pending Requests</p>
        <h2 className="text-red-400 text-2xl font-bold mt-2">12</h2>
      </div>

      <div>
        <p className="text-xs text-slate-400">Active Dispatches</p>
        <h2 className="text-white text-2xl font-bold mt-2">28</h2>
      </div>

      <div>
        <p className="text-xs text-slate-400">Hospital Capacity</p>
        <h2 className="text-green-400 text-2xl font-bold mt-2">68%</h2>
      </div>

    </div>
  );
}
