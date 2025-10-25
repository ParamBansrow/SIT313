import { Link } from "react-router-dom";

export default function Navbar() {
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

        {/* Login button navigates to login route */}
        <Link
          to="/login"
          className="bg-blue-600 text-white px-4 py-1 rounded hover:bg-blue-700"
        >
          Login
        </Link>
      </div>
    </nav>
  );
}
