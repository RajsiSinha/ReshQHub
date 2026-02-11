import KPICards from "../../components/admin/KPICards";
import HeatmapSection from "../../components/admin/HeatmapSection";
import IncidentDistribution from "../../components/admin/IncidentDistribution";
import AssetPanel from "../../components/admin/AssetPanel";
import EscalationsSection from "../../components/admin/EscalationsSection";

export default function CommandCenter() {
  return (
    <div className="space-y-10">

      {/* KPI SECTION */}
      <KPICards />

      {/* MAIN GRID */}
      <div className="grid grid-cols-12 gap-8">

        {/* LEFT — HEATMAP */}
        <div className="col-span-8">
          <HeatmapSection />
        </div>

        {/* RIGHT — STACKED PANELS */}
        <div className="col-span-4 space-y-8">
          <IncidentDistribution />
          <AssetPanel />
        </div>

      </div>

      {/* RECENT ESCALATIONS */}
      <EscalationsSection />

    </div>
  );
}
