import React from "react";
import { Link } from "react-router-dom";

const Sidebar = () => {
  return (
    <div className="sidebar">
      <ul>
        <li>
          <Link to="/dashboard">Dashboard</Link>
        </li>

        <li>
          <Link to="/add-transaction">
            Add Transaction
          </Link>
        </li>

        <li>
          <Link to="/transactions">
            Transactions
          </Link>
        </li>

        <li>
          <Link to="/profile">
            Profile
          </Link>
        </li>
      </ul>
    </div>
  );
};

export default Sidebar;