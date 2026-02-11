import { useState } from "react";
import BottomStats from "../../components/responder/BottomStats";
import AlertBanner from "../../components/responder/AlertBanner";
import MapView from "../../components/responder/MapView";
import LayerToggle from "../../components/responder/LayerToggle";
import RoutingCard from "../../components/responder/RoutingCard";
import { useIncidents } from "../../context/IncidentContext";

export default function ResponderDashboard() {

  const { incidents, updateStatus } = useIncidents();

  const [statusTab, setStatusTab] = useState("PENDING");
  const [severityFilter, setSeverityFilter] = useState("ALL");
  const [search, setSearch] = useState("");

  // Filter by Status
  const statusFiltered = incidents.filter(
    (incident) => incident.status === statusTab
  );

  // Filter by Severity + Search
  const filteredIncidents = statusFiltered.filter((incident) => {
    const matchesSeverity =
      severityFilter === "ALL" || incident.severity === severityFilter;

    const matchesSearch =
      incident.title.toLowerCase().includes(search.toLowerCase()) ||
      incident.id.toLowerCase().includes(search.toLowerCase());

    return matchesSeverity && matchesSearch;
  });

  return (
    <div className="flex flex-col w-full h-full bg-gradient-to-br from-[#0b1420] to-[#0e1c2f]">

      <div className="flex flex-1">

        {/* ================= LEFT PANEL ================= */}
        <div className="w-[460px] bg-[#0f1b2a] border-r border-blue-500/10 p-6 space-y-4 overflow-y-auto">

          <h2 className="text-slate-400 text-sm font-semibold tracking-wide">
            INCIDENT CONTROL CENTER
          </h2>

          {/* STATUS TABS */}
          <div className="flex gap-3">
            {["PENDING", "ASSIGNED", "RESOLVED"].map((status) => (
              <button
                key={status}
                onClick={() => setStatusTab(status)}
                className={`px-4 py-2 text-xs font-bold rounded-full transition ${
                  statusTab === status
                    ? "bg-blue-600 text-white"
                    : "bg-[#162435] text-slate-400"
                }`}
              >
                {status}
              </button>
            ))}
          </div>

          {/* SEARCH */}
          <input
            type="text"
            placeholder="Search incidents..."
            value={search}
            onChange={(e) => setSearch(e.target.value)}
            className="w-full bg-[#162435] p-3 rounded-lg text-sm outline-none focus:ring-2 focus:ring-blue-600"
          />

          {/* SEVERITY FILTER */}
          <div className="flex gap-3">
            {["ALL", "HIGH", "MEDIUM", "LOW"].map((level) => (
              <button
                key={level}
                onClick={() => setSeverityFilter(level)}
                className={`px-4 py-2 text-xs font-bold rounded-full transition ${
                  severityFilter === level
                    ? "bg-purple-600 text-white"
                    : "bg-[#162435] text-slate-400"
                }`}
              >
                {level}
              </button>
            ))}
          </div>

          {/* INCIDENT LIST */}
          {filteredIncidents.length === 0 ? (
            <p className="text-slate-500 text-sm">
              No incidents in {statusTab}.
            </p>
          ) : (
            filteredIncidents.map((incident) => (
              <div
                key={incident.id}
                className={`p-5 rounded-2xl border shadow-lg ${
                  incident.severity === "HIGH"
                    ? "bg-[#162435] border-red-500/30"
                    : incident.severity === "MEDIUM"
                    ? "bg-[#162435] border-orange-400/20"
                    : "bg-[#162435] border-slate-500/20"
                }`}
              >
                <div className="flex justify-between mb-2">
                  <span className="text-xs font-bold text-blue-400">
                    #{incident.id}
                  </span>

                  <span
                    className={`text-xs font-bold ${
                      incident.severity === "HIGH"
                        ? "text-red-400"
                        : incident.severity === "MEDIUM"
                        ? "text-orange-400"
                        : "text-slate-400"
                    }`}
                  >
                    {incident.severity}
                  </span>
                </div>

                <h3 className="text-lg font-semibold mt-2">
                  {incident.title}
                </h3>

                <p className="text-xs text-slate-400 mt-2">
                  {incident.description}
                </p>

                {/* ACTION BUTTONS */}
                {statusTab === "PENDING" && (
                  <button
                    onClick={() =>
                      updateStatus(incident.id, "ASSIGNED")
                    }
                    className="mt-5 w-full bg-blue-600 hover:bg-blue-700 py-3 rounded-xl font-semibold transition"
                  >
                    ACCEPT CASE
                  </button>
                )}

                {statusTab === "ASSIGNED" && (
                  <button
                    onClick={() =>
                      updateStatus(incident.id, "RESOLVED")
                    }
                    className="mt-5 w-full bg-green-600 hover:bg-green-700 py-3 rounded-xl font-semibold transition"
                  >
                    MARK RESOLVED
                  </button>
                )}

              </div>
            ))
          )}

        </div>

        {/* ================= MAP ================= */}
        <div className="flex-1 relative min-h-[650px]">

          <div className="absolute inset-0">
            <MapView />
          </div>

          <LayerToggle />
          <RoutingCard />
          <BottomStats />

        </div>

      </div>

      <AlertBanner />

    </div>
  );
}
