import { useState } from "react";
import { useDispatch } from "react-redux";
import { login, signUp } from "../redux/features/authSlice";
import { useNavigate } from "react-router-dom";
import { motion } from "framer-motion";

export default function AuthPage() {
  const [isSignup, setIsSignup] = useState(false);
  const [formData, setFormData] = useState({ name: "", email: "", password: "" });
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();
    if (isSignup) {
      dispatch(signUp(formData));
    } else {
      dispatch(login({ email: formData.email, password: formData.password }));
    }
    navigate("/"); // Redirect to home page after login/signup
  };

  return (
    <div className="flex justify-center items-center min-h-screen bg-[#121212] text-white">
      <motion.div
        initial={{ opacity: 0, y: -30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, ease: "easeOut" }}
        className="bg-[#1f1f1f] p-8 rounded-lg shadow-lg max-w-sm w-full"
      >
        <h2 className="text-2xl font-semibold text-center mb-6">
          {isSignup ? "Create an Account" : "Welcome Back"}
        </h2>

        <form onSubmit={handleSubmit} className="space-y-4">
          {isSignup && (
            <input
              type="text"
              placeholder="Full Name"
              value={formData.name}
              onChange={(e) => setFormData({ ...formData, name: e.target.value })}
              required
              className="w-full p-3 border rounded bg-gray-800 text-white focus:outline-none focus:ring-2 focus:ring-teal-400"
            />
          )}
          <input
            type="email"
            placeholder="Email"
            value={formData.email}
            onChange={(e) => setFormData({ ...formData, email: e.target.value })}
            required
            className="w-full p-3 border rounded bg-gray-800 text-white focus:outline-none focus:ring-2 focus:ring-teal-400"
          />
          <input
            type="password"
            placeholder="Password"
            value={formData.password}
            onChange={(e) => setFormData({ ...formData, password: e.target.value })}
            required
            className="w-full p-3 border rounded bg-gray-800 text-white focus:outline-none focus:ring-2 focus:ring-teal-400"
          />
          <motion.button
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            type="submit"
            className="w-full bg-teal-500 text-white py-3 rounded-lg font-semibold hover:bg-teal-600 transition"
          >
            {isSignup ? "Sign Up" : "Login"}
          </motion.button>
        </form>

        <p className="text-center mt-4">
          {isSignup ? "Already have an account?" : "New here?"}{" "}
          <motion.span
            whileHover={{ scale: 1.1 }}
            className="text-teal-400 cursor-pointer font-medium"
            onClick={() => setIsSignup(!isSignup)}
          >
            {isSignup ? "Login" : "Sign Up"}
          </motion.span>
        </p>
      </motion.div>
    </div>
  );
}
