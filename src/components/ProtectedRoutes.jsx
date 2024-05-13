import { Navigate, Outlet } from "react-router-dom";
import Dashboard from "../pages/Dashboard";

const ProtectedRoutes = () => {
  let auth = { token: false };
  return auth.token ? <Dashboard /> : <Navigate to="/login" />;
};

export default ProtectedRoutes;
