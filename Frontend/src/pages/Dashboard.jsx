import React from "react";
import { Routes, Route } from "react-router-dom";
import SideNavbar from "../components/SideNavbar";
import InventoryManagement from "./InventoryManagement";
import SalesAnalytics from "./SalesAnalytics";
import CustomerEngagement from "./CustomerEngagement";
import OrderTracking from "./OrderTracking";

const Dashboard = () => {
    return (
        <div className="flex h-screen">
            {/* Sidebar */}
            <SideNavbar />

            {/* Main Content */}
            <main className="flex-1 bg-gray-100 p-6">
                <Routes>
                    <Route
                        path="/"
                        element={<h1 className="text-3xl font-bold text-black">Welcome to the Dashboard</h1>}
                    />
                    <Route
                        path="inventory"
                        element={<InventoryManagement />}
                    />
                    <Route
                        path="sales"
                        element={<SalesAnalytics />}
                    />
                    <Route
                        path="customers"
                        element={<CustomerEngagement />}
                    />
                    <Route
                        path="orders"
                        element={<OrderTracking />}
                    />
                </Routes>
            </main>
        </div>
    );
};

export default Dashboard;
