import { Menu, X } from "lucide-react";
import { useState, useEffect } from "react";
import logo from "../assets/logo.png";
import { navItems } from "../constants";
import { Link } from "react-scroll";

const Navbar = ({ setIsBlurred }) => {
    const [mobileDrawerOpen, setMobileDrawerOpen] = useState(false);
    const [activeModal, setActiveModal] = useState(null); // Tracks which modal is open
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");

    // Toggle the mobile menu
    const toggleNavbar = () => {
        // Close the modal if it's open when toggling the mobile menu
        if (activeModal) {
            setActiveModal(null); // Close modal
            setIsBlurred(false); // Remove blur effect
        }
        setMobileDrawerOpen((prev) => !prev);
    };

    // Open a modal (Sign In or Create Account)
    const openModalHandler = (modal) => {
        setMobileDrawerOpen(false); // Close mobile menu
        setEmail(""); // Clear email
        setPassword(""); // Clear password
        setActiveModal(modal); // Set the active modal
        setIsBlurred(true); // Apply blur effect
    };

    // Close the active modal
    const closeModal = () => {
        setActiveModal(null); // Clear the active modal
        setIsBlurred(false); // Remove blur effect
    };

    // Handle closing modal with the Escape key
    useEffect(() => {
        const handleKeyDown = (e) => {
            if (e.key === "Escape") {
                closeModal();
            }
        };
        document.addEventListener("keydown", handleKeyDown);
        return () => document.removeEventListener("keydown", handleKeyDown);
    }, []);

    // Handle window resize to reset mobile menu state
    useEffect(() => {
        const handleResize = () => {
            if (window.innerWidth >= 1024) {
                setMobileDrawerOpen(false); // Close the menu on larger screens
            }
        };

        window.addEventListener("resize", handleResize);
        return () => window.removeEventListener("resize", handleResize);
    }, []);

    return (
        <nav className="sticky top-0 z-50 py-3 backdrop-blur-lg border-b border-neutral-700/80">
            <div className="container px-4 mx-auto relative">
                <div className="flex justify-between items-center">
                    {/* Logo Section */}
                    <div className="flex items-center flex-shrink-0">
                        <img className="h-10 w-10 mr-2" src={logo} alt="logo" />
                        <span className="text-xl font-semibold tracking-tight">
                            Easy-Dashy
                        </span>
                    </div>

                    {/* Desktop Navigation */}
                    <ul className="hidden lg:flex ml-14 space-x-12">
                        {navItems.map((item, index) => (
                            <li key={index}>
                                <Link
                                    to={item.href}
                                    smooth={true}
                                    duration={500}
                                    className="cursor-pointer hover:text-orange-500"
                                >
                                    {item.label}
                                </Link>
                            </li>
                        ))}
                    </ul>

                    {/* Desktop Action Buttons */}
                    <div className="hidden lg:flex space-x-6 items-center">
                        <button
                            onClick={() => openModalHandler("signIn")}
                            className="py-2 px-3 border border-gray-300 rounded-md hover:bg-gray-100 hover:text-black"
                            aria-label="Open Sign-In Modal"
                        >
                            Sign In
                        </button>
                        <button
                            onClick={() => openModalHandler("createAccount")}
                            className="bg-gradient-to-r from-orange-500 to-orange-800 py-2 px-4 rounded-md text-white hover:from-orange-600 hover:to-orange-900"
                        >
                            Create An Account
                        </button>
                    </div>

                    {/* Mobile Hamburger Menu */}
                    <button
                        onClick={toggleNavbar}
                        className="lg:hidden flex items-center"
                        aria-expanded={mobileDrawerOpen}
                        aria-controls="mobile-navigation"
                        aria-label="Toggle Navigation"
                    >
                        {mobileDrawerOpen ? <X size={24} /> : <Menu size={24} />}
                    </button>
                </div>

                {/* Mobile Drawer */}
                {mobileDrawerOpen && (
                    <div
                        id="mobile-navigation"
                        className="absolute top-0 left-0 w-full bg-neutral-900 text-white p-6 z-20 lg:hidden"
                    >
                        <ul className="space-y-6">
                            {navItems.map((item, index) => (
                                <li key={index}>
                                    <Link
                                        to={item.href}
                                        smooth={true}
                                        duration={500}
                                        onClick={toggleNavbar}
                                        className="cursor-pointer hover:text-orange-500"
                                    >
                                        {item.label}
                                    </Link>
                                </li>
                            ))}
                        </ul>
                        <div className="mt-6 flex flex-col space-y-4">
                            <button
                                onClick={() => openModalHandler("signIn")}
                                className="py-2 px-4 border border-gray-300 rounded-md"
                            >
                                Sign In
                            </button>
                            <button
                                onClick={() => openModalHandler("createAccount")}
                                className="bg-gradient-to-r from-orange-500 to-orange-800 py-2 px-4 rounded-md text-center text-white hover:from-orange-600 hover:to-orange-900"
                            >
                                Create An Account
                            </button>
                        </div>
                    </div>
                )}
            </div>

            {/* Sign-In Modal */}
            {activeModal === "signIn" && (
                <div className="fixed inset-0 z-50 flex items-center justify-center bg-black bg-opacity-70 signIn">
                    {/* Sign-In Modal Content */}
                    <div className="border border-gray-300 shadow-xl rounded-lg w-96 p-6">
                        <div className="flex justify-between items-center mb-6">
                            <h2 className="text-2xl font-bold">Sign In</h2>
                            <button
                                onClick={closeModal}
                                aria-label="Close Modal"
                                className="text-gray-600 hover:text-black"
                            >
                                <X className="w-6 h-6 hover:bg-white" />
                            </button>
                        </div>
                        <form>
                            <div className="mb-6">
                                <label
                                    htmlFor="email"
                                    className="block text-sm font-medium"
                                >
                                    Email Address
                                </label>
                                <input
                                    type="email"
                                    id="email"
                                    value={email}
                                    onChange={(e) => setEmail(e.target.value)}
                                    className="mt-2 block w-full rounded-lg border border-gray-300 p-3 focus:outline-none focus:ring-2 focus:ring-orange-500 focus:border-orange-500"
                                    placeholder="example@domain.com"
                                />
                            </div>
                            <div className="mb-6">
                                <label
                                    htmlFor="password"
                                    className="block text-sm font-medium"
                                >
                                    Password
                                </label>
                                <input
                                    type="password"
                                    id="password"
                                    value={password}
                                    onChange={(e) => setPassword(e.target.value)}
                                    className="mt-2 block w-full rounded-lg border border-gray-300 p-3 focus:outline-none focus:ring-2 focus:ring-orange-500 focus:border-orange-500"
                                    placeholder="Enter your password"
                                />
                            </div>
                            <button
                                type="submit"
                                className="w-full bg-orange-500 hover:bg-orange-600 text-white py-3 px-4 rounded-lg font-medium shadow-lg"
                            >
                                Sign In
                            </button>
                        </form>
                        <div className="mt-4 text-center">
                            <p className="text-sm">
                                Don't have an account?{" "}
                                <button
                                    onClick={() => openModalHandler("createAccount")}
                                    className="text-orange-500 hover:underline"
                                >
                                    Create an Account
                                </button>
                            </p>
                        </div>
                    </div>
                </div>
            )}

            {/* Create Account Modal */}
            {activeModal === "createAccount" && (
                <div className="fixed inset-0 z-50 flex items-center justify-center bg-black bg-opacity-70 createAn">
                    {/* Create Account Modal Content */}
                    <div className="border border-gray-300 shadow-xl rounded-lg w-96 p-6">
                        <div className="flex justify-between items-center mb-6">
                            <h2 className="text-2xl font-bold">Create An Account</h2>
                            <button
                                onClick={closeModal}
                                aria-label="Close Modal"
                                className="text-gray-600 hover:text-black"
                            >
                                <X className="w-6 h-6 hover:bg-gray-200" />
                            </button>
                        </div>
                        <form>
                            <div className="mb-4">
                                <label
                                    htmlFor="username"
                                    className="block text-sm font-medium"
                                >
                                    Username
                                </label>
                                <input
                                    type="text"
                                    id="username"
                                    className="mt-2 block w-full rounded-lg border border-gray-300 p-3 focus:outline-none focus:ring-2 focus:ring-orange-500 focus:border-orange-500"
                                    placeholder="Enter your username"
                                    required
                                />
                            </div>
                            <div className="mb-4">
                                <label
                                    htmlFor="email"
                                    className="block text-sm font-medium"
                                >
                                    Email
                                </label>
                                <input
                                    type="email"
                                    id="email"
                                    className="mt-2 block w-full rounded-lg border border-gray-300 p-3 focus:outline-none focus:ring-2 focus:ring-orange-500 focus:border-orange-500"
                                    placeholder="example@domain.com"
                                    required
                                />
                            </div>
                            <div className="mb-6">
                                <label
                                    htmlFor="password"
                                    className="block text-sm font-medium"
                                >
                                    Password
                                </label>
                                <input
                                    type="password"
                                    id="password"
                                    className="mt-2 block w-full rounded-lg border border-gray-300 p-3 focus:outline-none focus:ring-2 focus:ring-orange-500 focus:border-orange-500"
                                    placeholder="Enter your password"
                                    required
                                />
                            </div>
                            <button
                                type="submit"
                                className="w-full py-2 px-4 bg-gradient-to-r from-orange-500 to-orange-800 text-white font-semibold rounded-md hover:from-orange-600 hover:to-orange-900 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-orange-500"
                            >
                                Register
                            </button>
                        </form>
                        <div className="mt-4 text-center">
                            <p className="text-sm">
                                Already have an account?{" "}
                                <button
                                    onClick={() => openModalHandler("signIn")}
                                    className="text-orange-500 hover:underline"
                                >
                                    Sign In
                                </button>
                            </p>
                        </div>
                    </div>
                </div>
            )}
        </nav>
    );
};

export default Navbar;
