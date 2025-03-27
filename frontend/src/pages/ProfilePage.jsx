import { useDispatch } from "react-redux";
import { logout } from "../redux/features/authSlice";
import { useNavigate } from "react-router-dom";

export default function ProfilePage() {
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const handleLogout = () => {
    dispatch(logout());
    navigate("/auth");
  };

  return (
    <div>
      <h2>Profile Page</h2>
      <button onClick={handleLogout}>Logout</button>
    </div>
  );
}
