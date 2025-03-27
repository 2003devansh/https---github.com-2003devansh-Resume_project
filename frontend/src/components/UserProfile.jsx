import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { logout } from "../redux/features/authSlice";

export default function UserProfile() {
  const dispatch = useDispatch();
  const storedUser = JSON.parse(localStorage.getItem("user"));
  const { user } = useSelector((state) => state.auth) || storedUser;

  useEffect(() => {
    if (!user && storedUser) {
      dispatch({ type: "auth/login/fulfilled", payload: storedUser }); // Restore user if needed
    }
  }, [user, storedUser, dispatch]);

  if (!user) {
    return <h2 className="text-center mt-10 text-lg font-bold text-white">Please login to view profile</h2>;
  }

  return (
    <div className="flex justify-center items-center min-h-screen bg-[#121212] text-white">
      <div className="bg-[#1f1f1f] p-8 rounded-lg shadow-lg max-w-md w-full text-center">
        <div className="w-20 h-20 flex items-center justify-center bg-teal-500 text-white text-3xl font-semibold rounded-full">
          {user.name ? user.name.charAt(0).toUpperCase() : "U"}
        </div>
        <h2 className="text-2xl font-bold mb-2">{user.name || "N/A"}</h2>
        <p className="text-gray-400">{user.email}</p>
        <button
          onClick={() => {
            dispatch(logout());
            localStorage.removeItem("user"); // Clear user on logout
          }}
          className="w-full mt-4 bg-red-500 text-white py-2 rounded hover:bg-red-600"
        >
          Logout
        </button>
      </div>
    </div>
  );
}
