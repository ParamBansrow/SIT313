import { Link, useNavigate } from "react-router-dom";
import { useEffect, useState } from "react";
import { auth } from "../firebase";
import { signOut, onAuthStateChanged } from "firebase/auth";

export default function Navbar() {
  const [user, setUser] = useState(null);
  const navigate = useNavigate();


  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (currentUser) => {
      setUser(currentUser);
      console.log("Auth state changed:", currentUser.email);
    });
    return () => unsubscribe();
  }, []);

  const handleSignOut = async () => {
    await signOut(auth);
    navigate("/login");
  };

  return (
    <nav className="flex items-center justify-between bg-gray-100 px-6 py-3 border-b">
      <div className="font-bold text-lg text-gray-700">DEV@Deakin</div>

      <input
        type="text"
        placeholder="Search..."
        className="border rounded px-3 py-1 w-1/3"
      />

      <div className="flex items-center gap-4">
        <button className="text-gray-600 hover:text-blue-600">Post</button>

        {user ? (
          
          <button
            onClick={handleSignOut}
            className="bg-red-600 text-white px-4 py-1 rounded hover:bg-red-700"
          >
            Sign Out
          </button>
        ) : (
          
          <Link
            to="/login"
            className="bg-blue-600 text-white px-4 py-1 rounded hover:bg-blue-700"
          >
            Login
          </Link>
        )}
      </div>
    </nav>
  );
}
