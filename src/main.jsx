import React from "react";
import ReactDOM from "react-dom/client";
import { Route, BrowserRouter as Router, Routes } from "react-router-dom";

import Sidebar from "./components/Sidebar.jsx";
import Auth from "./pages/Auth.jsx";
import Components from "./pages/Components.jsx";
import Pages from "./pages/Pages.jsx";

import "./index.css";
import Dashboard from "./pages/Dashboard.jsx";
import CardOfPage from "./components/CardOfPage.jsx";
import NotFound from "./pages/NotFound.jsx";
import { SearchIcon } from "lucide-react";
import Input from "./components/Input.jsx";
import Switch from "./components/Switch.jsx";
import HeaderBar from "./components/HeaderBar.jsx";

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <Router>
      <div className="flex">
        <Sidebar />
        <div className="flex flex-col w-full flex-1 h-screen overflow-scroll ">
          <HeaderBar />
          <Routes>
            <Route path="/dashboard" element={<Dashboard />} />
            <Route path="/components" element={<Components />} />
            <Route path="/auth" element={<Auth />} />
            <Route path="/pages/*">
              <Route element={<Pages />} index />
              <Route path=":pageId" element={<NotFound />} />
            </Route>
          </Routes>
        </div>
      </div>
    </Router>
  </React.StrictMode>
);
