import React from "react";
import { Link, useNavigate } from "react-router-dom";

const SideNavbar = () => {
    const navigate = useNavigate();

    // Handle logout
    const handleLogout = () => {
        // Clear user session (e.g., remove tokens from localStorage)
        localStorage.removeItem("authToken"); // Example of token removal

        // Redirect to the login page
        navigate("/login");
    };

    return (
        <aside className="w-64 bg-gray-800 text-white h-screen flex flex-col p-4">
            <h2 className="text-2xl font-bold mb-6">Easy-Dashy</h2>
            <ul className="space-y-4">
                <li>
                    <Link to="/dashboard" className="hover:text-orange-500">
                        Dashboard
                    </Link>
                </li>
                <li>
                    <Link to="/dashboard/inventory" className="hover:text-orange-500">
                        Inventory Management
                    </Link>
                </li>
                <li>
                    <Link to="/dashboard/sales" className="hover:text-orange-500">
                        Sales Analytics
                    </Link>
                </li>
                <li>
                    <Link to="/dashboard/customers" className="hover:text-orange-500">
                        Customer Engagement
                    </Link>
                </li>
                <li>
                    <Link to="/dashboard/orders" className="hover:text-orange-500">
                        Order Tracking
                    </Link>
                </li>
            </ul>
            {/* Log Out Button */}
            <button
                onClick={handleLogout}
                className="mt-auto bg-red-500 hover:bg-red-600 text-white py-2 px-4 rounded"
            >
                Log Out
            </button>
        </aside>
    );
};

export default SideNavbar;
