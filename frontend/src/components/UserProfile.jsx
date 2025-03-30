import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { logout, setUser } from "../redux/features/authSlice";
import { useNavigate } from "react-router-dom";

export default function UserProfile() {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const storedUser = JSON.parse(localStorage.getItem("profile")); 
  const { user } = useSelector((state) => state.auth);

  useEffect(() => {
    if (!user && storedUser) {
      dispatch(setUser(storedUser)); 
    }
  }, [user, storedUser, dispatch]);

  if (!user) {
    return (
      <h2 className="text-center mt-10 text-lg font-bold text-white">
        Please login to view profile
      </h2>
    );
  }

  const handleLogout = () => {
    dispatch(logout());
    localStorage.removeItem("profile");
    localStorage.removeItem("token");
    navigate("/auth"); 
  };

  return (
    <div className="flex justify-center items-center min-h-screen bg-[#121212] text-white">
      <div className="bg-[#1f1f1f] p-8 rounded-lg shadow-lg max-w-md w-full text-center">
        <div className="w-20 h-20 flex items-center justify-center bg-teal-500 text-white text-3xl font-semibold rounded-full">
          {user.name?.charAt(0).toUpperCase() || "U"}
        </div>
        <h2 className="text-2xl font-bold mb-2">{user.name || "N/A"}</h2>
        <p className="text-gray-400">{user.email || "No email provided"}</p>
        <button
          onClick={handleLogout}
          className="w-full mt-4 bg-red-500 text-white py-2 rounded hover:bg-red-600"
        >
          Logout
        </button>
      </div>
    </div>
  );
}
