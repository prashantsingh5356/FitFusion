// CSS Imports
import "./index.css";

// React Imports
import React from "react";
import ReactDOM from "react-dom/client";

//Component Imports
import App from "./App.jsx";

import { GoogleOAuthProvider } from "@react-oauth/google";

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <GoogleOAuthProvider clientId={import.meta.env.VITE_GOOGLE_ID}>
      <App />
    </GoogleOAuthProvider>
  </React.StrictMode>
);
