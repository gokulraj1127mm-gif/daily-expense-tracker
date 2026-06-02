import React from "react";

const IncomeCard = ({ income }) => {
  return (
   <div className="card income-card">
  <h3>Total Income</h3>
  <h1>₹ {income}</h1>
</div>
  );
};

export default IncomeCard;