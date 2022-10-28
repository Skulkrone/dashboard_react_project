import React from "react";
import "./App.css";
import DashboardEmployees from "./Pages/DashboardEmployees/DashboardEmployees";
import DashboardFinance from "./Pages/DashboardFinance/DashboardFinance";
import Sidebar from "./Components/Sidebar/SideBar";
import { Routes, Route } from "react-router-dom";
import DashboardContextProvider from "./context/DashboardContext";

export default function App() {
  return (
    <>
      <DashboardContextProvider>
        <Sidebar></Sidebar>
        <Routes>
          <Route
            path="/"
            element={<DashboardFinance></DashboardFinance>}
          ></Route>
          <Route
            path="/dashboardEmployees"
            element={<DashboardEmployees />}
          ></Route>
        </Routes>
      </DashboardContextProvider>
    </>
  );
}
