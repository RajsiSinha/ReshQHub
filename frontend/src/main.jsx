import React from "react";
import ReactDOM from "react-dom/client";
import { BrowserRouter } from "react-router-dom";
import { AuthProvider } from "./context/AuthContext";
import App from "./App";
import "./index.css";
import "leaflet/dist/leaflet.css";
import { IncidentProvider } from "./context/IncidentContext";


ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <BrowserRouter>
    <AuthProvider>
      <IncidentProvider>
        <App />
      </IncidentProvider>
      </AuthProvider>
    </BrowserRouter>
  </React.StrictMode>
);
