import { createContext, useContext, useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";

const AuthContext = createContext();

export function AuthProvider({ children }) {
  const navigate = useNavigate();

  const [user, setUser] = useState(() => {
    const savedUser = localStorage.getItem("currentUser");
    return savedUser ? JSON.parse(savedUser) : null;
  });

  // 🔐 LOGIN
  const login = (userData) => {
    setUser(userData);
    localStorage.setItem("currentUser", JSON.stringify(userData));

    // ✅ Correct Role-Based Redirect
    if (userData.role === "victim") {
      navigate("/victim/dashboard");
    } 
    else if (userData.role === "responder") {
      navigate("/responder/dashboard");
    } 
    else if (userData.role === "admin") {
      navigate("/admin/dashboard");
    }
  };

  // 🔓 LOGOUT
  const logout = () => {
    setUser(null);
    localStorage.removeItem("currentUser");
    navigate("/login");
  };

  // 🔁 Auto Restore On Refresh
  useEffect(() => {
    const savedUser = localStorage.getItem("currentUser");
    if (savedUser && !user) {
      setUser(JSON.parse(savedUser));
    }
  }, []);

  return (
    <AuthContext.Provider value={{ user, login, logout }}>
      {children}
    </AuthContext.Provider>
  );
}

export function useAuth() {
  return useContext(AuthContext);
}
