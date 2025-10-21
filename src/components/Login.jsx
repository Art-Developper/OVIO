import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import {
    signInWithEmailAndPassword,
    onAuthStateChanged
} from "firebase/auth";
import { auth } from '../fireBaseConfig';
import Header from "./Header2"

const Login = () => {
    const navigate = useNavigate();
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [message, setMessage] = useState("");
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        const unsubscribe = onAuthStateChanged(auth, (user) => {
            if (user) {
                localStorage.setItem("loggedIn", "true");
                localStorage.setItem("userEmail", user.email); // Պահպանում ենք էլ. փոստը
                localStorage.setItem("userId", user.uid); // Պահպանում ենք օգտատիրոջ ID-ն
                navigate("/"); // Մուտքից հետո ուղղել դեպի չաթի էջ
            } else {
                localStorage.removeItem("loggedIn");
                localStorage.removeItem("userEmail");
                localStorage.removeItem("userId");
            }
            setLoading(false);
        });

        return () => unsubscribe();
    }, [navigate]);

    const handleLogin = async (e) => {
        e.preventDefault();
        setMessage("");

        try {
            const userCredential = await signInWithEmailAndPassword(auth, email, password);
            const user = userCredential.user;
            console.log("Մուտք հաջողվեց:", user);

            localStorage.setItem("loggedIn", "true");
            localStorage.setItem("userEmail", user.email);
            localStorage.setItem("userId", user.uid);
            setMessage("Բարի գալուստ!");
            navigate("/");
        } catch (error) {
            console.error("Մուտքի սխալ:", error.message);
            switch (error.code) {
                case 'auth/user-not-found':
                case 'auth/wrong-password':
                    setMessage("Սխալ էլ. փոստ կամ գաղտնաբառ, փորձիր կրկին");
                    break;
                case 'auth/invalid-email':
                    setMessage("Սխալ էլ. փոստի ձևաչափ, խնդրում ենք մուտքագրել վավեր էլ. փոստ");
                    break;
                case 'auth/too-many-requests':
                    setMessage("Չափից շատ մուտքի փորձեր։ Խնդրում ենք փորձել ավելի ուշ։");
                    break;
                default:
                    setMessage("Մուտքի սխալ: " + error.message);
            }
        }
    };

    if (loading) {
        return <div className="flex items-center justify-center min-h-screen bg-gray-100 p-4">Բեռնում...</div>;
    }

    return (<>
        <Header/>
        <div className="flex items-center justify-center min-h-screen bg-gray-100 p-4">
            <div className="w-full max-w-sm bg-white p-8 rounded-lg shadow-md">
                <h2 className="text-center text-2xl font-bold text-gray-800 mb-6">Մուտք</h2>
                <form onSubmit={handleLogin} className="space-y-4">
                    <input
                        type="email"
                        placeholder="Էլ. փոստ"
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                        className="w-full px-4 py-3 border border-gray-300 rounded-lg text-lg focus:outline-none focus:ring-2 focus:ring-purple-500 placeholder-gray-500"
                        required
                    />
                    <input
                        type="password"
                        placeholder="Գաղտնաբառ"
                        value={password}
                        onChange={(e) => setPassword(e.target.value)}
                        className="w-full px-4 py-3 border border-gray-300 rounded-lg text-lg focus:outline-none focus:ring-2 focus:ring-purple-500 placeholder-gray-500"
                        required
                    />
                    <button
                        type="submit"
                        className="w-full bg-purple-600 hover:bg-purple-700 text-white font-bold py-3 px-4 rounded-lg text-lg transition duration-300 ease-in-out shadow-md"
                    >
                        Մուտք
                    </button>
                </form>
                {message && (
                    <p className="mt-4 text-center text-sm font-medium text-red-600">
                        {message}
                    </p>
                )}
            </div>
        </div>
    </>
    );
};

export default Login;