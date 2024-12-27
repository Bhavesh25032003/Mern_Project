// import React, { useState } from "react";
// import { X } from "lucide-react";

// const Modal = ({ modalType, onClose, toggleModalType }) => {
//     const [username, setUsername] = useState("");
//     const [email, setEmail] = useState("");
//     const [password, setPassword] = useState("");
//     const [error, setError] = useState("");

//     const handleSubmit = async (e) => {
//         e.preventDefault();

//         const payload = { email, password };
//         if (modalType === "createAccount") {
//             payload.username = username;
//         }

//         try {
//             const response = await fetch(`http://localhost:5000/api/auth/${modalType === "createAccount" ? "register" : "login"}`, {
//                 method: "POST",
//                 headers: { "Content-Type": "application/json" },
//                 body: JSON.stringify(payload),
//             });

//             const data = await response.json();

//             if (response.ok) {
//                 alert(`${modalType === "createAccount" ? "Registered" : "Logged In"} successfully!`);
//                 onClose();
//             } else {
//                 setError(data.msg);
//             }
//         } catch (err) {
//             setError("Server error");
//         }
//     };

//     return (
//         <div className="fixed inset-0 z-50 flex items-center justify-center bg-black bg-opacity-70 signIn">
//             <div className="border border-gray-300 rounded-lg shadow-xl p-6 w-96">
//                 <div className="flex justify-between items-center mb-6">
//                     <h2 className="text-2xl font-bold">
//                         {modalType === "signIn" ? "Sign In" : "Create An Account"}
//                     </h2>
//                     <button onClick={onClose} className="text-gray-600 hover:text-white">
//                         <X className="w-6 h-6" />
//                     </button>
//                 </div>
//                 <form onSubmit={handleSubmit}>
//                     {modalType === "createAccount" && (
//                         <div className="mb-4">
//                             <label htmlFor="username" className="block text-sm font-medium">Username</label>
//                             <input
//                                 id="username"
//                                 value={username}
//                                 onChange={(e) => setUsername(e.target.value)}
//                                 className="mt-2 block w-full rounded-lg border border-gray-300 p-3 focus:outline-none focus:ring-2 focus:ring-orange-500 focus:border-orange-500"
//                                 placeholder="Enter your username"
//                                 required
//                             />
//                         </div>
//                     )}
//                     <div className="mb-4">
//                         <label htmlFor="email" className="block text-sm font-medium">Email</label>
//                         <input
//                             id="email"
//                             value={email}
//                             onChange={(e) => setEmail(e.target.value)}
//                             className="mt-2 block w-full rounded-lg border border-gray-300 p-3 focus:outline-none focus:ring-2 focus:ring-orange-500 focus:border-orange-500"
//                             placeholder="example@domain.com"
//                             required
//                         />
//                     </div>
//                     <div className="mb-6">
//                         <label htmlFor="password" className="block text-sm font-medium">Password</label>
//                         <input
//                             id="password"
//                             type="password"
//                             value={password}
//                             onChange={(e) => setPassword(e.target.value)}
//                             className="mt-2 block w-full rounded-lg border border-gray-300 p-3 focus:outline-none focus:ring-2 focus:ring-orange-500 focus:border-orange-500"
//                             placeholder="Enter your password"
//                             required
//                         />
//                     </div>
//                     {error && <div className="text-red-500 text-sm mb-4">{error}</div>}
//                     <button
//                         type="submit"
//                         className="w-full py-2 px-4 bg-gradient-to-r from-orange-500 to-orange-800 text-white font-semibold rounded-md hover:from-orange-600 hover:to-orange-900 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-orange-500"
//                     >
//                         {modalType === "signIn" ? "Sign In" : "Register"}
//                     </button>
//                 </form>
//                 <div className="mt-4 text-center">
//                     {modalType === "signIn" ? (
//                         <p className="text-sm">
//                             Don't have an account?{" "}
//                             <button
//                                 onClick={() => toggleModalType("createAccount")}
//                                 className="text-orange-600 hover:underline"
//                             >
//                                 Create one
//                             </button>
//                         </p>
//                     ) : (
//                         <p className="text-sm">
//                             Already a user?{" "}
//                             <button
//                                 onClick={() => toggleModalType("signIn")}
//                                 className="text-orange-600 hover:underline"
//                             >
//                                 Sign In
//                             </button>
//                         </p>
//                     )}
//                 </div>
//             </div>
//         </div>
//     );
// };

// export default Modal;



import React, { useState } from "react";
import { useNavigate } from "react-router-dom"; // Import useNavigate
import { X } from "lucide-react";

const Modal = ({ modalType, onClose, toggleModalType }) => {
    const [username, setUsername] = useState("");
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [error, setError] = useState("");

    const navigate = useNavigate(); // Initialize navigate

    const handleSubmit = async (e) => {
        e.preventDefault();

        const payload = { email, password };
        if (modalType === "createAccount") {
            payload.username = username;
        }

        try {
            const response = await fetch(
                `http://localhost:5000/api/auth/${modalType === "createAccount" ? "register" : "login"}`,
                {
                    method: "POST",
                    headers: { "Content-Type": "application/json" },
                    body: JSON.stringify(payload),
                }
            );

            const data = await response.json();

            if (response.ok) {
                alert(`${modalType === "createAccount" ? "Registered" : "Logged In"} successfully!`);
                onClose(); // Close the modal
                navigate("/dashboard"); // Redirect to Dashboard
            } else {
                setError(data.msg);
            }
        } catch (err) {
            setError("Server error");
        }
    };

    return (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-black bg-opacity-70 signIn">
            <div className="border border-gray-300 rounded-lg shadow-xl p-6 w-96">
                <div className="flex justify-between items-center mb-6">
                    <h2 className="text-2xl font-bold">
                        {modalType === "signIn" ? "Sign In" : "Create An Account"}
                    </h2>
                    <button onClick={onClose} className="text-gray-600 hover:text-white">
                        <X className="w-6 h-6" />
                    </button>
                </div>
                <form onSubmit={handleSubmit}>
                    {modalType === "createAccount" && (
                        <div className="mb-4">
                            <label htmlFor="username" className="block text-sm font-medium">
                                Username
                            </label>
                            <input
                                id="username"
                                value={username}
                                onChange={(e) => setUsername(e.target.value)}
                                className="mt-2 block w-full rounded-lg border border-gray-300 p-3 focus:outline-none focus:ring-2 focus:ring-orange-500 focus:border-orange-500"
                                placeholder="Enter your username"
                                required
                            />
                        </div>
                    )}
                    <div className="mb-4">
                        <label htmlFor="email" className="block text-sm font-medium">
                            Email
                        </label>
                        <input
                            id="email"
                            value={email}
                            onChange={(e) => setEmail(e.target.value)}
                            className="mt-2 block w-full rounded-lg border border-gray-300 p-3 focus:outline-none focus:ring-2 focus:ring-orange-500 focus:border-orange-500"
                            placeholder="example@domain.com"
                            required
                        />
                    </div>
                    <div className="mb-6">
                        <label htmlFor="password" className="block text-sm font-medium">
                            Password
                        </label>
                        <input
                            id="password"
                            type="password"
                            value={password}
                            onChange={(e) => setPassword(e.target.value)}
                            className="mt-2 block w-full rounded-lg border border-gray-300 p-3 focus:outline-none focus:ring-2 focus:ring-orange-500 focus:border-orange-500"
                            placeholder="Enter your password"
                            required
                        />
                    </div>
                    {error && <div className="text-red-500 text-sm mb-4">{error}</div>}
                    <button
                        type="submit"
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
