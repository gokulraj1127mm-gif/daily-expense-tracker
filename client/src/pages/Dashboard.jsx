import React, { useEffect, useState } from "react";
import Navbar from "../components/Navbar";
import Sidebar from "../components/Sidebar";
import IncomeCard from "../components/IncomeCard";
import ExpenseCard from "../components/ExpenseCard";
import BalanceCard from "../components/BalanceCard";
import Charts from "../components/Charts";
import API from "../services/api";

const Dashboard = () => {
  const [summary, setSummary] = useState({
    income: 0,
    expense: 0,
    balance: 0,
  });

  useEffect(() => {
    fetchDashboard();
  }, []);

  const fetchDashboard = async () => {
    try {
      const user = JSON.parse(localStorage.getItem("user"));

      const res = await API.get("/transactions/dashboard", {
        headers: {
          Authorization: `Bearer ${user.token}`,
        },
      });

      setSummary(res.data);
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <>
      <Navbar />

      <div className="dashboard-container">
        <Sidebar />

        <div className="main-content">
          <h1>Dashboard</h1>

          <div className="card-container">
            <IncomeCard income={summary.income} />
            <ExpenseCard expense={summary.expense} />
            <BalanceCard balance={summary.balance} />
          </div>

          <div className="analytics-section">
            <h2>Expense Analytics</h2>
            <Charts
              income={summary.income}
              expense={summary.expense}
            />
          </div>
        </div>
      </div>
    </>
  );
};

export default Dashboard;