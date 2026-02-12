import { createContext, useContext, useState, useEffect } from "react";

const IncidentContext = createContext();

export function IncidentProvider({ children }) {
  const [incidents, setIncidents] = useState([]);

  const addIncident = (incident) => {
    setIncidents((prev) => [
      ...prev,
      {
        ...incident,
        id: `INC-${Date.now()}`,
        status: incident.status || "PENDING",
        createdAt: new Date(),
      },
    ]);
  };

  const updateStatus = (id, newStatus) => {
    setIncidents((prev) =>
      prev.map((inc) =>
        inc.id === id ? { ...inc, status: newStatus } : inc
      )
    );
  };

  const removeIncident = (id) => {
    setIncidents((prev) => prev.filter((inc) => inc.id !== id));
  };

  // 🔁 GLOBAL AUTO-SYNC WHEN INTERNET RETURNS
  useEffect(() => {
    const handleOnline = () => {
      const offlineIncidents =
        JSON.parse(localStorage.getItem("offlineIncidents")) || [];

      if (offlineIncidents.length === 0) return;

      offlineIncidents.forEach((incident) => {
        addIncident({
          ...incident,
          synced: true,
        });
      });

      localStorage.removeItem("offlineIncidents");

      alert("✅ Connection restored. Offline incidents synced globally.");
    };

    window.addEventListener("online", handleOnline);

    return () => {
      window.removeEventListener("online", handleOnline);
    };
  }, []);

  return (
    <IncidentContext.Provider
      value={{
        incidents,
        addIncident,
        updateStatus,
        removeIncident,
      }}
    >
      {children}
    </IncidentContext.Provider>
  );
}

export function useIncidents() {
  return useContext(IncidentContext);
}
