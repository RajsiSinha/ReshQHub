import { useMap } from "react-leaflet";

export default function MapControls() {
  const map = useMap();

  const zoomIn = () => map.zoomIn();
  const zoomOut = () => map.zoomOut();

  const locate = () => {
    map.locate().on("locationfound", function (e) {
      map.flyTo(e.latlng, 14);
    });
  };

  return (
    <div className="absolute top-6 left-6 bg-[#162435] p-2 rounded-xl shadow-lg flex flex-col gap-2 z-[1000]">

      <button
        onClick={zoomIn}
        className="w-10 h-10 bg-[#0b1420] hover:bg-blue-600 transition rounded-lg flex items-center justify-center text-lg font-bold"
      >
        +
      </button>

      <button
        onClick={zoomOut}
        className="w-10 h-10 bg-[#0b1420] hover:bg-blue-600 transition rounded-lg flex items-center justify-center text-lg font-bold"
      >
        −
      </button>

      <button
        onClick={locate}
        className="w-10 h-10 bg-blue-600 hover:bg-blue-700 transition rounded-lg flex items-center justify-center text-sm"
      >
        📍
      </button>

    </div>
  );
}
