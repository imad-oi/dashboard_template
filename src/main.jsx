import React from "react";
import ReactDOM from "react-dom/client";
import { Route, BrowserRouter as Router, Routes } from "react-router-dom";

import App from "./App.jsx";
import Sidebar from "./components/Sidebar.jsx";
import Auth from "./pages/Auth.jsx";
import Components from "./pages/Components.jsx";

import "./index.css";

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <Router>
      <div className="flex">
        <Sidebar />
        <Routes>
          <Route path="/dashboard" element={<App />} />
          <Route path="/components" element={<Components />} />
          <Route path="/auth" element={<Auth />} />
        </Routes>
      </div>
    </Router>
  </React.StrictMode>
);
