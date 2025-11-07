import { useState } from "react";
import { createUserWithEmailAndPassword } from "firebase/auth";
import { auth, db } from "../firebase";
import { doc, setDoc } from "firebase/firestore";
import { useNavigate, Link } from "react-router-dom";

export default function Signup() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirm, setConfirm] = useState("");
  const navigate = useNavigate();

  const handleSignup = async () => {
    if (password !== confirm) {
      alert("Passwords do not match!");
      return;v1
    }

    try {
      const userCred = await createUserWithEmailAndPassword(auth, email, password);
      await setDoc(doc(db, "users", userCred.user.uid), {
        name,
        email,
      });
      alert("Account created successfully!");
      navigate("/");
    } catch (err) {
      alert(err.message);
    }
  };

  return (
    <div className="flex flex-col items-center mt-16">
      <div className="border border-blue-400 p-8 rounded-md w-96 shadow-sm">
        <h2 className="text-xl mb-6 text-center font-semibold">
          Create a DEV@Deakin Account
        </h2>

        <input
          type="text"
          placeholder="Name"
          value={name}
          onChange={(e) => setName(e.target.value)}
          className="border w-full p-2 mb-3 rounded"
        />
        <input
          type="email"
          placeholder="Email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          className="border w-full p-2 mb-3 rounded"
        />
        <input
          type="password"
          placeholder="Password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          className="border w-full p-2 mb-3 rounded"
        />
        <input
          type="password"
          placeholder="Confirm password"
          value={confirm}
          onChange={(e) => setConfirm(e.target.value)}
          className="border w-full p-2 mb-6 rounded"
        />

        <button
          onClick={handleSignup}
          className="bg-blue-600 text-white w-full py-2 rounded hover:bg-blue-700"
        >
          Create
        </button>

        <div className="text-center mt-4">
          <Link to="/login" className="text-blue-600 text-sm underline">
            Back to Login
          </Link>
        </div>
      </div>
    </div>
  );
}
