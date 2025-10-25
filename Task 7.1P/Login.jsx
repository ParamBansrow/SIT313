import { useState } from "react";
import { signInWithEmailAndPassword } from "firebase/auth";
import { auth } from "../firebase";
import { Link, useNavigate } from "react-router-dom";

export default function Login() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate();

  const handleLogin = async () => {
    try {
      await signInWithEmailAndPassword(auth, email, password);
      alert("Login successful!");
      navigate("/home"); // You can later create a Home page
    } catch (err) {
      alert("Invalid email or password!");
    }
  };

  return (
    <div className="flex flex-col items-center mt-16">
      <div className="border border-blue-400 p-8 rounded-md w-80 shadow-sm">
        <h2 className="text-xl mb-6 text-center font-semibold">Login</h2>

        <input
          type="email"
          placeholder="Your email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          className="border w-full p-2 mb-4 rounded"
        />
        <input
          type="password"
          placeholder="Your password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          className="border w-full p-2 mb-6 rounded"
        />

        <button
          onClick={handleLogin}
          className="bg-blue-600 text-white w-full py-2 rounded hover:bg-blue-700"
        >
          Login
        </button>

        <div className="text-center mt-4">
          <Link to="/signup" className="text-blue-600 text-sm underline">
            Sign up
          </Link>
        </div>
      </div>
    </div>
  );
}
