import { Routes, Route } from "react-router-dom";  // Remove the Router import here
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import Hero from "./components/Hero";
import Featured from "./components/Featured";
import PostList from "./components/PostList";
import PostForm from "./components/PostForm";
import UserProfile from "./components/UserProfile";
import AuthPage from "./components/AuthPage";
import { useSelector } from "react-redux";  // Import useSelector for checking user authentication

export default function App() {
  const { user } = useSelector((state) => state.auth);  // Get user from Redux store

  return (
    <>
      {/* Navbar should be present on all pages */}
      <Navbar />

      {/* Main content section */}
      <div className="min-h-screen bg-[#121212] text-white">
        <Routes>
          <Route
            path="/"
            element={
              <>
                <Hero />
                <Featured />
                <PostList />
              </>
            }
          />
          <Route path="/create-post" element={user ? <PostForm /> : <AuthPage />} />  {/* Protect create-post route */}
          <Route path="/auth" element={<AuthPage />} />
          <Route path="/profile" element={user ? <UserProfile /> : <AuthPage />} />  {/* Protect profile route */}
        </Routes>
      </div>

      {/* Footer */}
      <Footer />
    </>
  );
}
