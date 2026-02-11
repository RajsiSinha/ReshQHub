import { useState } from "react";
import BottomStats from "../../components/responder/BottomStats";
import AlertBanner from "../../components/responder/AlertBanner";
import MapView from "../../components/responder/MapView";
import LayerToggle from "../../components/responder/LayerToggle";
import RoutingCard from "../../components/responder/RoutingCard";

export default function ResponderDashboard() {

  const [incidents, setIncidents] = useState([
    {
      id: "INC-4092",
      severity: "HIGH",
      title: "Structural Fire - Industrial Zone",
      description: "Smoke reported on 4th floor.",
    },
    {
      id: "INC-4093",
      severity: "MEDIUM",
      title: "Road Accident - Sector 12",
      description: "Two vehicles involved. Minor injuries.",
    },
    {
      id: "INC-4094",
      severity: "LOW",
      title: "Water Leakage - Residential Block",
      description: "Basement flooding reported.",
    },
  ]);

  const [filter, setFilter] = useState("ALL");
  const [search, setSearch] = useState("");

  const handleAccept = (id) => {
    setIncidents(prev => prev.filter(i => i.id !== id));
  };

  const filteredIncidents = incidents.filter((incident) => {
    const matchesFilter =
      filter === "ALL" || incident.severity === filter;

    const matchesSearch =
      incident.title.toLowerCase().includes(search.toLowerCase()) ||
      incident.id.toLowerCase().includes(search.toLowerCase());

    return matchesFilter && matchesSearch;
  });

  return (
    <div className="flex flex-col w-full h-full bg-gradient-to-br from-[#0b1420] to-[#0e1c2f]">

      <div className="flex flex-1 min-h-0">

        {/* ================= LEFT PANEL ================= */}
        <div className="w-[460px] bg-[#0f1b2a] border-r border-blue-500/10 p-6 space-y-4 overflow-y-auto">

          <h2 className="text-slate-400 text-sm font-semibold tracking-wide">
            INCOMING INCIDENTS
          </h2>

          {/* Search */}
          <input
            type="text"
            placeholder="Search incidents..."
            value={search}
            onChange={(e) => setSearch(e.target.value)}
            className="w-full bg-[#162435] p-3 rounded-lg text-sm outline-none focus:ring-2 focus:ring-blue-600"
          />

          {/* Filters */}
          <div className="flex gap-3">
            {["ALL", "HIGH", "MEDIUM", "LOW"].map((level) => (
              <button
                key={level}
                onClick={() => setFilter(level)}
                className={`px-4 py-2 text-xs font-bold rounded-full transition ${
                  filter === level
                    ? "bg-blue-600 text-white"
                    : "bg-[#162435] text-slate-400"
                }`}
              >
                {level}
              </button>
            ))}
          </div>

          {/* Incident List */}
          {filteredIncidents.length === 0 ? (
            <p className="text-slate-500 text-sm">
              No incidents found.
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
                <span
                  className={`text-xs px-3 py-1 rounded-full font-bold ${
                    incident.severity === "HIGH"
                      ? "bg-red-600 text-white"
                      : incident.severity === "MEDIUM"
                      ? "bg-orange-500 text-white"
                      : "bg-slate-500 text-white"
                  }`}
                >
                  {incident.severity}
                </span>

                <h3 className="text-lg font-semibold mt-4">
                  {incident.title}
                </h3>

                <p className="text-xs text-slate-400 mt-2">
                  {incident.description}
                </p>

                <button
                  onClick={() => handleAccept(incident.id)}
                  className="mt-5 w-full bg-blue-600 hover:bg-blue-700 py-3 rounded-xl font-semibold transition"
                >
                  ACCEPT CASE {incident.id}
                </button>
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
