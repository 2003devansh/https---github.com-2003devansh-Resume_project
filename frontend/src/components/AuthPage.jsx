import { useState } from "react";
import { useDispatch } from "react-redux";
import { login, signUp } from "../redux/features/authSlice";
import { useNavigate } from "react-router-dom";
import { motion } from "framer-motion";

export default function AuthPage() {
  const [isSignup, setIsSignup] = useState(false);
  const [formData, setFormData] = useState({ email: "", password: "" });
  const [error, setError] = useState("");
  const [loading, setLoading] = useState(false);

  const dispatch = useDispatch();
  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();
    setError(""); // Clear previous errors
    setLoading(true);

    try {
      const url = isSignup
        ? "http://localhost:5000/auth/signup"
        : "http://localhost:5000/auth/login";

      const res = await fetch(url, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(formData),
      });

      const data = await res.json();

      if (!res.ok) {
        throw new Error(data.message || "Authentication failed");
      }

      dispatch(isSignup ? signUp(data) : login(data));
      navigate("/");
    } catch (err) {
      setError(err.message);
    } finally {
      setLoading(false);
    }
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

        {error && <p className="text-red-500 text-center mb-4">{error}</p>}

        <form onSubmit={handleSubmit} className="space-y-4">
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
            disabled={loading}
            className="w-full bg-teal-500 text-white py-3 rounded-lg font-semibold hover:bg-teal-600 transition"
          >
            {loading ? "Processing..." : isSignup ? "Sign Up" : "Login"}
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
