import { Navigate } from "react-router-dom";
import Dashboard from "../pages/Dashboard";

const ProtectedRoutes = () => {
  let auth = { token: true };
  return auth.token ? <Dashboard /> : <Navigate to="/login" />;
};

export default ProtectedRoutes;
