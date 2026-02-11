import { useIncidents } from "../../context/IncidentContext";

export default function IncidentDistribution() {
  const { incidents } = useIncidents();

  const high = incidents.filter(i => i.severity === "HIGH").length;
  const medium = incidents.filter(i => i.severity === "MEDIUM").length;
  const low = incidents.filter(i => i.severity === "LOW").length;

  return (
    <div className="bg-[#162435] border border-blue-500/10 rounded-2xl p-6">

      <h3 className="font-semibold mb-4">
        Incident Type Distribution
      </h3>

      <Bar label="High Severity" value={high} color="bg-red-500" />
      <Bar label="Medium Severity" value={medium} color="bg-orange-500" />
      <Bar label="Low Severity" value={low} color="bg-slate-500" />

    </div>
  );
}

function Bar({ label, value, color }) {
  return (
    <div className="mb-4">
      <div className="flex justify-between text-xs text-slate-400 mb-1">
        <span>{label}</span>
        <span>{value}</span>
      </div>

      <div className="w-full bg-[#0f1b2a] h-2 rounded-full">
        <div
          className={`${color} h-2 rounded-full`}
          style={{ width: `${value * 10}%` }}
        />
      </div>
    </div>
  );
}
