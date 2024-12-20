import { X } from "lucide-react";

const Modal = ({ modalType, onClose, toggleModalType }) => {
    return (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-black bg-opacity-70 signIn">
            <div className="border border-gray-300 rounded-lg shadow-xl p-6 w-96">
                <div className="flex justify-between items-center mb-6">
                    <h2 className="text-2xl font-bold">
                        {modalType === "signIn" ? "Sign In" : "Create An Account"}
                    </h2>
                    <button onClick={onClose} className="text-gray-600 hover:text-black">
                        <X className="w-6 h-6" />
                    </button>
                </div>
                <form>
                    {modalType === "createAccount" && (
                        <div className="mb-4">
                            <label htmlFor="username" className="block text-sm font-medium">Username</label>
                            <input
                                id="username"
                                className="mt-2 block w-full rounded-lg border border-gray-300 p-3 focus:outline-none focus:ring-2 focus:ring-orange-500 focus:border-orange-500"
                                placeholder="Enter your username"
                                required
                            />
                        </div>
                    )}
                    <div className="mb-4">
                        <label htmlFor="email" className="block text-sm font-medium">Email</label>
                        <input
                            id="email"
                            className="mt-2 block w-full rounded-lg border border-gray-300 p-3 focus:outline-none focus:ring-2 focus:ring-orange-500 focus:border-orange-500"
                            placeholder="example@domain.com"
                            required
                        />
                    </div>
                    <div className="mb-6">
                        <label htmlFor="password" className="block text-sm font-medium">Password</label>
                        <input
                            id="password"
                            type="password"
                            className="mt-2 block w-full rounded-lg border border-gray-300 p-3 focus:outline-none focus:ring-2 focus:ring-orange-500 focus:border-orange-500"
                            placeholder="Enter your password"
                            required
                        />
                    </div>
                    <button
                        className="w-full py-2 px-4 bg-gradient-to-r from-orange-500 to-orange-800 text-white font-semibold rounded-md hover:from-orange-600 hover:to-orange-900 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-orange-500"
                    >
                        {modalType === "signIn" ? "Sign In" : "Register"}
                    </button>
                </form>
                <div className="mt-4 text-center">
                    {modalType === "signIn" ? (
                        <p className="text-sm">
                            Don't have an account?{" "}
                            <button
                                onClick={() => toggleModalType("createAccount")}
                                className="text-orange-600 hover:underline"
                            >
                                Create one
                            </button>
                        </p>
                    ) : (
                        <p className="text-sm">
                            Already a user?{" "}
                            <button
                                onClick={() => toggleModalType("signIn")}
                                className="text-orange-600 hover:underline"
                            >
                                Sign In
                            </button>
                        </p>
                    )}
                </div>
            </div>
        </div>
    );
};

export default Modal;
