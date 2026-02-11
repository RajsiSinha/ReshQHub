export default function EscalationsSection() {
  return (
    <div className="bg-[#0f1b2a] border border-blue-500/10 rounded-2xl p-6">

      <div className="flex justify-between items-center mb-6">
        <h2 className="text-lg font-semibold">
          Recent Escalations
        </h2>

        <button className="text-blue-400 text-sm font-semibold hover:underline">
          Export CSV
        </button>
      </div>

      <div className="space-y-4">

        <div className="flex justify-between text-sm bg-[#162435] p-4 rounded-lg">
          <span>Flood Alert - Sector 7-G</span>
          <span className="text-red-400 font-semibold">CRITICAL</span>
        </div>

        <div className="flex justify-between text-sm bg-[#162435] p-4 rounded-lg">
          <span>Power Grid Failure - Zone 3</span>
          <span className="text-orange-400 font-semibold">HIGH</span>
        </div>

        <div className="flex justify-between text-sm bg-[#162435] p-4 rounded-lg">
          <span>Medical Supply Shortage</span>
          <span className="text-yellow-400 font-semibold">MODERATE</span>
        </div>

      </div>

    </div>
  );
}
