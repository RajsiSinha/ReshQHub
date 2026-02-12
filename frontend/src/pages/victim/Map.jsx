import { MapContainer, TileLayer, Marker, Popup } from "react-leaflet";
import L from "leaflet";
import { useIncidents } from "../../context/IncidentContext";

import "leaflet/dist/leaflet.css";

export default function Map() {
  const { incidents } = useIncidents();

  const offlineIncidents =
    JSON.parse(localStorage.getItem("offlineIncidents")) || [];

  const allIncidents = [...incidents, ...offlineIncidents];

  // 🔴 Create colored icons
  const createIcon = (color) =>
    new L.Icon({
      iconUrl: `https://raw.githubusercontent.com/pointhi/leaflet-color-markers/master/img/marker-icon-${color}.png`,
      shadowUrl:
        "https://unpkg.com/leaflet@1.9.3/dist/images/marker-shadow.png",
      iconSize: [25, 41],
      iconAnchor: [12, 41],
    });

  return (
    <div className="max-w-7xl mx-auto space-y-8">

      {/* Header */}
      <div>
        <h1 className="text-2xl font-bold">Safety Map</h1>
        <p className="text-slate-400 text-sm">
          View nearby incidents and safety alerts in your area.
        </p>
      </div>

      {/* Map Container */}
      <div className="bg-slate-900 rounded-xl border border-blue-500/10 p-4">
        <MapContainer
          center={[28.6139, 77.2090]} // Default Delhi
          zoom={12}
          className="h-[500px] w-full rounded-lg"
        >
          <TileLayer
            attribution='&copy; OpenStreetMap contributors'
            url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
          />

          {allIncidents.map((incident) => {
            if (!incident.location || incident.location.manual)
              return null;

            const icon =
              incident.severity === "HIGH"
                ? createIcon("red")
                : incident.severity === "MEDIUM"
                ? createIcon("orange")
                : createIcon("blue");

            return (
              <Marker
                key={incident.id}
                position={[
                  incident.location.lat,
                  incident.location.lng,
                ]}
                icon={icon}
              >
                <Popup>
                  <strong>{incident.title}</strong>
                  <br />
                  Status: {incident.status}
                </Popup>
              </Marker>
            );
          })}
        </MapContainer>
      </div>

      {/* Legend */}
      <div className="bg-slate-900 rounded-xl p-6 border border-blue-500/10">
        <h2 className="text-sm font-bold uppercase tracking-wider mb-4">
          Legend
        </h2>

        <div className="flex gap-8 text-sm">
          <div className="flex items-center gap-2">
            <div className="w-4 h-4 rounded-full bg-red-600"></div>
            High Priority
          </div>

          <div className="flex items-center gap-2">
            <div className="w-4 h-4 rounded-full bg-orange-500"></div>
            Medium Priority
          </div>

          <div className="flex items-center gap-2">
            <div className="w-4 h-4 rounded-full bg-blue-500"></div>
            Low Priority
          </div>
        </div>
      </div>

    </div>
  );
}
