import { createContext, useContext, useState } from "react";

const IncidentContext = createContext();

export function IncidentProvider({ children }) {

  const [incidents, setIncidents] = useState([]);

  const addIncident = (incident) => {
    setIncidents((prev) => [
      ...prev,
      {
        ...incident,
        id: `INC-${Date.now()}`,
        status: "PENDING",
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
