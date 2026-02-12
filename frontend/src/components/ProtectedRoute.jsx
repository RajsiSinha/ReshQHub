import { Navigate } from "react-router-dom";
import { useAuth } from "../context/AuthContext";
import useNetworkStatus from "../hooks/useNetworkStatus";

export default function ProtectedRoute({ children, allowedRole }) {
  const isOnline = useNetworkStatus();
  const { user } = useAuth();

  // 🛰 OFFLINE MODE — allow access
  if (!isOnline) {
    return children;
  }

  // 🔐 Online → normal auth check
  if (!user) {
    return <Navigate to="/login" replace />;
  }

  // Optional role check
  if (allowedRole && user.role !== allowedRole) {
    return <Navigate to="/" replace />;
  }

  return children;
}
