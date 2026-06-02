import React from "react";
import { useNavigate } from "react-router-dom";

const Navbar = () => {
  const navigate = useNavigate();

  const user = JSON.parse(
    localStorage.getItem("user")
  );

  const logout = () => {
    localStorage.removeItem("user");
    navigate("/");
  };

  return (
    <nav className="navbar">
      <div className="navbar-left">
        <h2>Expense Tracker</h2>
      </div>

      <div className="navbar-right">
        <span className="user-name">
          Welcome, {user?.user?.name}
        </span>

        <button
          className="profile-btn-nav"
          onClick={() =>
            navigate("/profile")
          }
        >
          Profile
        </button>

        <button
          className="logout-btn"
          onClick={logout}
        >
          Logout
        </button>
      </div>
    </nav>
  );
};

export default Navbar;