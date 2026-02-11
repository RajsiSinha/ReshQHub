import { MapContainer, TileLayer, Marker, Popup } from "react-leaflet";
import L from "leaflet";
import "leaflet/dist/leaflet.css";
import MapControls from "./MapControls";

delete L.Icon.Default.prototype._getIconUrl;
L.Icon.Default.mergeOptions({
  iconRetinaUrl:
    "https://unpkg.com/leaflet@1.9.4/dist/images/marker-icon-2x.png",
  iconUrl:
    "https://unpkg.com/leaflet@1.9.4/dist/images/marker-icon.png",
  shadowUrl:
    "https://unpkg.com/leaflet@1.9.4/dist/images/marker-shadow.png",
});

export default function MapView() {
  return (
    <MapContainer
      center={[28.6139, 77.209]}
      zoom={13}
      zoomControl={false}
      className="w-full h-full"
    >
      <TileLayer
        attribution="&copy; OpenStreetMap contributors"
        url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
      />

      {/* MUST BE INSIDE */}
      <MapControls />

      <Marker position={[28.6239, 77.219]}>
        <Popup>High Severity Fire Reported</Popup>
      </Marker>

      <Marker position={[28.6039, 77.199]}>
        <Popup>Your Unit Location</Popup>
      </Marker>
    </MapContainer>
  );
}
