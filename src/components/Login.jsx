import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";

const Login = () => {
    const navigate = useNavigate();
    const [username, setUsername] = useState("");
    const [password, setPassword] = useState("");
    const [message, setMessage] = useState("");

    useEffect(() => {
        const loggedIn = localStorage.getItem("loggedIn");
        if (loggedIn === "true") {
            navigate("/home");
        }
    }, [navigate]);

    const handleLogin = (e) => {
        e.preventDefault();

        if (username === "admin" && password === "1234") {
            localStorage.setItem("loggedIn", "true");
            localStorage.setItem("username", username);
            setMessage("Բարի գալուստ!");
            navigate("/home");
        } else {
            setMessage("Սխալ տվյալներ, փորձիր կրկին");
        }
    };

    return (
        <div className="flex items-center justify-center min-h-screen bg-gray-100 p-4">
            <div className="w-full max-w-sm bg-white p-8 rounded-lg shadow-md">
                <h2 className="text-center text-2xl font-bold text-gray-800 mb-6">Login</h2>
                <form onSubmit={handleLogin} className="space-y-4">
                    <input
                        type="text"
                        placeholder="Օգտանուն"
                        value={username}
                        onChange={(e) => setUsername(e.target.value)}
                        className="w-full px-4 py-3 border border-gray-300 rounded-lg text-lg focus:outline-none focus:ring-2 focus:ring-purple-500 placeholder-gray-500"
                    />
                    <input
                        type="password"
                        placeholder="Գաղտնաբառ"
                        value={password}
                        onChange={(e) => setPassword(e.target.value)}
                        className="w-full px-4 py-3 border border-gray-300 rounded-lg text-lg focus:outline-none focus:ring-2 focus:ring-purple-500 placeholder-gray-500"
                    />
                    <button
                        type="submit"
                        className="w-full bg-purple-600 hover:bg-purple-700 text-white font-bold py-3 px-4 rounded-lg text-lg transition duration-300 ease-in-out shadow-md"
                    >
                        Մուտք
                    </button>
                </form>
                {message && (
                    <p className="mt-4 text-center text-sm font-medium text-gray-700">
                        {message}
                    </p>
                )}
            </div>
        </div>
    );
};

export default Login;