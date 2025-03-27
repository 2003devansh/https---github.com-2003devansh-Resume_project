import { useDispatch, useSelector } from "react-redux";
import { logout } from "../redux/features/authSlice";
import { motion } from "framer-motion";

export default function UserProfile() {
  const dispatch = useDispatch();
  const { user } = useSelector((state) => state.auth);

  if (!user) {
    return (
      <h2 className="text-center mt-10 text-lg font-bold text-white">
        Please login to view profile
      </h2>
    );
  }

  return (
    <div className="flex justify-center items-center min-h-screen bg-[#121212] text-white">
      <motion.div
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        className="bg-[#1f1f1f] p-8 rounded-lg shadow-lg max-w-md w-full text-center"
      >
        {/* Profile Avatar */}
        <div className="flex justify-center mb-4">
          <div className="w-20 h-20 flex items-center justify-center bg-teal-500 text-white text-3xl font-semibold rounded-full">
            {user.name ? user.name.charAt(0).toUpperCase() : "U"}
          </div>
        </div>

        <h2 className="text-2xl font-bold mb-2">{user.name || "N/A"}</h2>
        <p className="text-gray-400">{user.email}</p>

        <div className="mt-6">
          <motion.button
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            onClick={() => dispatch(logout())}
            className="w-full bg-red-500 text-white py-3 rounded-lg font-semibold hover:bg-red-600 transition"
          >
            Logout
          </motion.button>
        </div>
      </motion.div>
    </div>
  );
}
