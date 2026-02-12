import { useState } from "react";

export default function Resources() {
  const [openGuide, setOpenGuide] = useState(null);

  const guides = [
    {
      title: "First Aid Basics",
      content:
        "Check airway, breathing, and circulation. Apply pressure to bleeding wounds. Keep the person calm and call emergency services immediately.",
    },
    {
      title: "Fire Safety Tips",
      content:
        "Stay low to avoid smoke. Do not use elevators. Cover mouth with cloth and evacuate immediately. Call fire control services.",
    },
    {
      title: "Earthquake Preparedness",
      content:
        "Drop, Cover, and Hold On. Stay away from windows. After shaking stops, evacuate to open areas safely.",
    },
    {
      title: "Flood Survival Guide",
      content:
        "Move to higher ground. Avoid walking in moving water. Switch off electricity supply if safe to do so.",
    },
  ];

  return (
    <div className="max-w-7xl mx-auto space-y-10">

      {/* Header */}
      <div>
        <h1 className="text-2xl font-bold">Emergency Resources</h1>
        <p className="text-slate-400 text-sm">
          Access important contacts, safety guides, and emergency support.
        </p>
      </div>

      {/* Emergency Contacts */}
      <section className="bg-slate-900 rounded-xl p-6 border border-blue-500/10">
        <h2 className="text-lg font-bold mb-6 uppercase tracking-tight">
          Emergency Contacts
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">

          <a
            href="tel:112"
            className="bg-red-600/10 border border-red-600/20 p-5 rounded-xl hover:bg-red-600/20 transition block"
          >
            <h3 className="font-bold text-red-400 mb-2">
              National Emergency
            </h3>
            <p className="text-2xl font-bold text-white">112</p>
            <p className="text-xs text-slate-400 mt-1">
              Unified emergency helpline
            </p>
          </a>

          <a
            href="tel:108"
            className="bg-blue-600/10 border border-blue-600/20 p-5 rounded-xl hover:bg-blue-600/20 transition block"
          >
            <h3 className="font-bold text-blue-400 mb-2">Ambulance</h3>
            <p className="text-2xl font-bold text-white">108</p>
            <p className="text-xs text-slate-400 mt-1">
              Medical emergency support
            </p>
          </a>

          <a
            href="tel:1078"
            className="bg-orange-500/10 border border-orange-500/20 p-5 rounded-xl hover:bg-orange-500/20 transition block"
          >
            <h3 className="font-bold text-orange-400 mb-2">
              Disaster Management
            </h3>
            <p className="text-2xl font-bold text-white">1078</p>
            <p className="text-xs text-slate-400 mt-1">
              Natural disaster assistance
            </p>
          </a>

        </div>
      </section>

      {/* Safety Guides */}
      <section className="bg-slate-900 rounded-xl p-6 border border-blue-500/10">
        <h2 className="text-lg font-bold mb-6 uppercase tracking-tight">
          Safety Guides
        </h2>

        <div className="space-y-4">

          {guides.map((guide, index) => (
            <div
              key={index}
              className="bg-slate-800 rounded-xl p-5 transition"
            >
              <button
                onClick={() =>
                  setOpenGuide(openGuide === index ? null : index)
                }
                className="w-full text-left font-semibold flex justify-between items-center"
              >
                {guide.title}
                <span>
                  {openGuide === index ? "−" : "+"}
                </span>
              </button>

              {openGuide === index && (
                <p className="text-sm text-slate-400 mt-3 leading-relaxed">
                  {guide.content}
                </p>
              )}
            </div>
          ))}

        </div>
      </section>

      {/* Download Section */}
      <section className="bg-gradient-to-br from-blue-600 to-blue-800 rounded-xl p-6 text-white shadow-lg">
        <h2 className="font-bold text-sm uppercase tracking-wider mb-4">
          Emergency Kit Checklist
        </h2>

        <p className="text-xs mb-6">
          Prepare water, flashlight, batteries, first aid kit, important documents, and power bank.
        </p>

        <a
          href="/emergency-checklist.pdf"
          download
          className="bg-white text-blue-700 px-5 py-2 rounded-lg font-semibold hover:bg-slate-200 transition"
        >
          Download Checklist
        </a>
      </section>

    </div>
  );
}
