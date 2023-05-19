import React, { useState } from "react";
import { Outlet, useNavigate, useLocation } from "react-router-dom";
import { DashboardRoutes } from "../../routes/routes";
import {
  HiMenu,
  HiOutlineChevronLeft,
  HiOutlineUserCircle,
} from "react-icons/hi";
import "./Dashboard.css";

const Dashboard = () => {
  const navigate = useNavigate();
  const location = useLocation();
  const [isSidebarOpen, setIsSidebarOpen] = useState(true);
  const [selectedRoute, setSelectedRoute] = useState("");

  const isRouteDashboard = location.pathname === "/dashboard";
  const handleNavigate = (route) => {
    navigate(route);
  };

  const handleToggleSidebar = () => {
    setIsSidebarOpen(!isSidebarOpen);
  };
  const handleSelectRoute = (selectedRouteName) => {
    setSelectedRoute(selectedRouteName);
  };

  return (
    <div className="dashboard-container">
      <div
        style={{ width: isSidebarOpen ? "20rem" : "3.8rem" }}
        className="dashboard-sidebar"
      >
        {isSidebarOpen && (
          <div className="admin-icon">
            <HiOutlineUserCircle size={40} />
          </div>
        )}
        {isSidebarOpen && <h3>Admin Dashboard</h3>}
        <div className="dashboard-sidebar-links-container">
          {DashboardRoutes.map((route) => (
            <div
              onClick={() => {
                handleNavigate(route.path);
                handleSelectRoute(route.name);
              }}
              key={route.path}
              className="dashboard-sidebar-links"
              style={{
                marginTop: route.gap ? "14rem" : route.hasMargin ? "5rem" : "0",
                background: selectedRoute === route.name && "#618362",
                backgroundColor: route.isFilled && "#618362",
                color:
                  selectedRoute === route.name && route.isFilled
                    ? "white"
                    : "black",
              }}
            >
              <p style={{ marginLeft: isSidebarOpen ? "0" : "0.6rem" }}>
                {route.icon}
              </p>
              <p style={{ opacity: isSidebarOpen ? "1" : "0" }}>{route.name}</p>
            </div>
          ))}
        </div>
        <div onClick={handleToggleSidebar} className="dashboard-menu">
          {!isSidebarOpen && <HiMenu color="white" size={27} />}
          {isSidebarOpen && <HiOutlineChevronLeft color="white" size={27} />}
        </div>
      </div>
      <div className="dashboard-content">
        {!isRouteDashboard && (
          <div className="dashboard-content-main">
            <Outlet />
          </div>
        )}
        {isRouteDashboard && (
          <div className="dashboard-content-main">
            <h3>Welcome to admin dashboard</h3>
          </div>
        )}
      </div>
    </div>
  );
};

export default Dashboard;
