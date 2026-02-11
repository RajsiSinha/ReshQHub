export default function AssetPanel() {
  return (
    <div className="bg-[#162435] border border-blue-500/10 rounded-2xl p-6">

      <h3 className="font-semibold mb-4">
        Active Assets
      </h3>

      <div className="space-y-4 text-sm">

        <Asset name="Unit Alpha-4 (EMT)" status="Available" />
        <Asset name="Rescue Drone XR-2" status="En Route" />
        <Asset name="Fire Squad Delta" status="Engaged" />

      </div>
    </div>
  );
}

function Asset({ name, status }) {
  return (
    <div className="flex justify-between items-center p-3 bg-[#0f1b2a] rounded-xl">

      <span>{name}</span>

      <span className="text-xs text-blue-400 font-semibold">
        {status}
      </span>

    </div>
  );
}
