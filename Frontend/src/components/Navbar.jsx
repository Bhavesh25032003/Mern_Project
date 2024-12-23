import { Menu, X } from "lucide-react";
import { useState, useEffect } from "react";
import { Link } from "react-scroll";
import logo from "../assets/logo.png";
import Modal from "./Modal";
import { navItems } from "../constants";

const Navbar = ({ setIsBlurred }) => {
    const [mobileDrawerOpen, setMobileDrawerOpen] = useState(false);
    const [activeModal, setActiveModal] = useState(null);

    // Toggle mobile drawer
    const toggleNavbar = () => {
        if (activeModal) closeModal(); // Close modal if open
        setMobileDrawerOpen((prev) => !prev);
    };

    // Open modal
    const openModalHandler = (modalType) => {
        setMobileDrawerOpen(false); // Ensure drawer is closed
        setActiveModal(modalType);
        setIsBlurred(true); // Apply blur when modal opens
    };

    // Close modal
    const closeModal = () => {
        setActiveModal(null);
        setIsBlurred(false); // Remove blur when modal closes
    };

    // Close modal on 'Escape' key
    useEffect(() => {
        const handleEscape = (e) => e.key === "Escape" && closeModal();
        window.addEventListener("keydown", handleEscape);
        return () => window.removeEventListener("keydown", handleEscape);
    }, []);

    // Close mobile drawer on resize
    useEffect(() => {
        const handleResize = () =>
            window.innerWidth >= 1024 && setMobileDrawerOpen(false);
        window.addEventListener("resize", handleResize);
        return () => window.removeEventListener("resize", handleResize);
    }, []);

    return (
        <nav className="sticky top-0 z-50 py-3 backdrop-blur-lg border-b border-neutral-700/80">
            <div className="container mx-auto px-4 flex justify-between items-center">
                {/* Logo */}
                <div className="flex items-center">
                    <img src={logo} alt="Logo" className="h-10 w-10 mr-2" />
                    <span className="text-xl font-semibold">Easy-Dashy</span>
                </div>

                {/* Desktop Navigation */}
                <ul className="hidden lg:flex space-x-12">
                    {navItems.map(({ label, href }) => (
                        <li key={href}>
                            <Link
                                to={href}
                                smooth
                                duration={500}
                                className="cursor-pointer hover:text-orange-500"
                            >
                                {label}
                            </Link>
                        </li>
                    ))}
                </ul>

                {/* Desktop Actions */}
                <div className="hidden lg:flex space-x-6 items-center">
                    <button
                        onClick={() => openModalHandler("signIn")}
                        className="py-2 px-3 border border-gray-300 rounded-md hover:bg-gray-100 hover:text-black"
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

                {/* Mobile Menu Button */}
                <button
                    onClick={toggleNavbar}
                    className={`lg:hidden z-30 fixed top-4 right-4 ${
                        mobileDrawerOpen ? "text-white" : "text-neutral"
                    }`}
                >
                    {mobileDrawerOpen ? <X size={24} /> : <Menu size={24} />}
                </button>

                {/* Mobile Drawer */}
                {mobileDrawerOpen && (
                    <div className="absolute top-0 left-0 w-full h-screen bg-neutral-900 text-neutral p-6 z-20 lg:hidden">
                        <ul className="space-y-6">
                            {navItems.map(({ label, href }) => (
                                <li key={href}>
                                    <Link
                                        to={href}
                                        smooth
                                        duration={500}
                                        onClick={toggleNavbar}
                                        className="hover:text-orange-500"
                                    >
                                        {label}
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

                {/* Modal */}
                {activeModal && (
                    <Modal
                        modalType={activeModal}
                        onClose={closeModal}
                        toggleModalType={(type) => setActiveModal(type)}
                    />
                )}
            </div>
        </nav>
    );
};

export default Navbar;
