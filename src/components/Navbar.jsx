import { Menu, X } from "lucide-react";
import { useState, useEffect } from "react";
import logo from "../assets/logo.png";
import { navItems } from "../constants";
import { Link } from "react-scroll";

const Navbar = ({ setIsBlurred }) => {
    const [mobileDrawerOpen, setMobileDrawerOpen] = useState(false);
    const [isSignInModalOpen, setIsSignInModalOpen] = useState(false);
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");

    const toggleNavbar = () => {
        setMobileDrawerOpen((prev) => !prev);
    };

    const openSignInModal = () => {
        setEmail(""); // Clear email field
        setPassword(""); // Clear password field
        setIsSignInModalOpen(true);
        setIsBlurred(true); // Apply blur effect
    };

    const closeSignInModal = () => {
        setIsSignInModalOpen(false);
        setIsBlurred(false); // Remove blur effect
    };

    // Close modal with Escape key
    useEffect(() => {
        const handleKeyDown = (e) => {
            if (e.key === "Escape") closeSignInModal();
        };
        document.addEventListener("keydown", handleKeyDown);
        return () => document.removeEventListener("keydown", handleKeyDown);
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
                            onClick={openSignInModal}
                            className="py-2 px-3 border border-gray-300 rounded-md hover:bg-gray-100"
                            aria-label="Open Sign-In Modal"
                        >
                            Sign In
                        </button>
                        <a
                            href="#"
                            className="bg-gradient-to-r from-orange-500 to-orange-800 py-2 px-4 rounded-md text-white hover:from-orange-600 hover:to-orange-900"
                        >
                            Create An Account
                        </a>
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
                                onClick={openSignInModal}
                                className="py-2 px-4 border border-gray-300 rounded-md"
                            >
                                Sign In
                            </button>
                            <a
                                href="#"
                                className="bg-gradient-to-r from-orange-500 to-orange-800 py-2 px-4 rounded-md text-center text-white hover:from-orange-600 hover:to-orange-900"
                            >
                                Create An Account
                            </a>
                        </div>
                    </div>
                )}
            </div>

            {/* Sign-In Modal */}
            {isSignInModalOpen && (
               <div className="fixed inset-0 z-50 flex items-center justify-center bg-black bg-opacity-70 signIn">
               <div className="border border-gray-300 shadow-xl rounded-lg w-96 p-6">
                   {/* Header */}
                   <div className="flex justify-between items-center mb-6">
                       <h2 className="text-2xl font-bold">Sign In</h2>
                       <button
                           onClick={closeSignInModal}
                           aria-label="Close Modal"
                           className="text-gray-600 hover:text-white-900"
                       >
                           <X className="w-6 h-6" />
                       </button>
                   </div>
                   {/* Form */}
                   <form>
                       {/* Email Field */}
                       <div className="mb-6">
                           <label
                               htmlFor="email"
                               className="block text-sm font-medium text-gray-700"
                           >
                               Email Address
                           </label>
                           <input
                               type="email"
                               id="email"
                               value={email}
                               onChange={(e) => setEmail(e.target.value)}
                               className="mt-2 block w-full rounded-lg border border-gray-300 p-3 focus:outline-none focus:ring-2 focus:ring-orange-500 focus:border-orange-500 shadow-sm"
                               placeholder="example@domain.com"
                           />
                       </div>
                       {/* Password Field */}
                       <div className="mb-6">
                           <label
                               htmlFor="password"
                               className="block text-sm font-medium text-gray-700"
                           >
                               Password
                           </label>
                           <input
                               type="password"
                               id="password"
                               value={password}
                               onChange={(e) => setPassword(e.target.value)}
                               className="mt-2 block w-full rounded-lg border border-gray-300 p-3 focus:outline-none focus:ring-2 focus:ring-orange-500 focus:border-orange-500 shadow-sm"
                               placeholder="Enter your password"
                           />
                       </div>
                       {/* Submit Button */}
                       <button
                           type="submit"
                           className="w-full bg-orange-500 hover:bg-orange-600 text-white py-3 px-4 rounded-lg font-medium shadow-lg focus:outline-none focus:ring-2 focus:ring-orange-500 focus:ring-offset-2 transition duration-300"
                       >
                           Sign In
                       </button>
                   </form>
                   {/* Footer */}
                   <div className="mt-6 text-sm text-center text-gray-600">
                       Don't have an account?{" "}
                       <a
                           href="#"
                           className="text-orange-500 hover:underline font-medium"
                       >
                           Sign up here
                       </a>
                   </div>
               </div>
           </div>           
            )}
        </nav>
    );
};

export default Navbar;
