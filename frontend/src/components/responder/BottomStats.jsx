import { useIncidents } from "../../context/IncidentContext";

export default function BottomStats() {

  const { incidents } = useIncidents();

  const pending = incidents.filter(i => i.status === "PENDING").length;
  const assigned = incidents.filter(i => i.status === "ASSIGNED").length;
  const resolved = incidents.filter(i => i.status === "RESOLVED").length;

  return (
    <div className="absolute bottom-6 left-1/2 -translate-x-1/2 w-[700px] bg-[#162435]/95 backdrop-blur-md border border-blue-500/10 rounded-2xl p-8 flex justify-between text-center shadow-2xl z-[1000]">

      <div>
        <p className="text-xs text-slate-400">Pending</p>
        <h2 className="text-red-400 text-2xl font-bold mt-2">{pending}</h2>
      </div>

      <div>
        <p className="text-xs text-slate-400">Assigned</p>
        <h2 className="text-yellow-400 text-2xl font-bold mt-2">{assigned}</h2>
      </div>

      <div>
        <p className="text-xs text-slate-400">Resolved</p>
        <h2 className="text-green-400 text-2xl font-bold mt-2">{resolved}</h2>
      </div>

    </div>
  );
}
