import { Outlet } from "react-router-dom";
import Logo from "../assets/logo.png";

export default function ResponderLayout() {
  return (
    <div className="min-h-screen bg-[#0b1420] text-slate-100 flex flex-col">

      {/* Top Header */}
      <header className="h-16 flex items-center justify-between px-6 border-b border-blue-500/10 bg-[#0f1b2a]">

      <div className="flex items-center">

  <img
    src={Logo}
    alt="ResQHub Logo"
    className="w-8 h-8 object-contain"
  />

  <span className="ml-1 text-lg font-semibold tracking-tight">
    ResQ<span className="text-blue-400">Hub</span>
    <span className="text-slate-400 ml-1 text-sm font-medium">
      Responder
    </span>
  </span>

</div>

        <div className="flex items-center gap-6 text-sm text-slate-400">
          <span>🟢 42 Responders Online</span>
          <span>Avg. Response: 4.2m</span>

          <div className="flex items-center gap-2">
            <div className="w-8 h-8 rounded-full bg-blue-600 flex items-center justify-center text-xs font-bold">
              OM
            </div>
            <span>Officer Miller</span>
          </div>
        </div>

      </header>

      {/* Main Content - natural flow */}
      <div className="flex flex-1">
        <Outlet />
      </div>

    </div>
  );
}
