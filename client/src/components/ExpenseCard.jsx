import React from "react";

const ExpenseCard = ({ expense }) => {
  return (
    <div className="card expense-card">
  <h3>Total Expense</h3>
  <h1>₹ {expense}</h1>
</div>
  );
};

export default ExpenseCard;