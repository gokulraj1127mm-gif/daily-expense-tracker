import React from "react";

const TransactionTable = ({
  transactions,
  deleteTransaction,
}) => {
  return (
    <table
      border="1"
      cellPadding="10"
      width="100%"
    >
      <thead>
        <tr>
          <th>Title</th>
          <th>Amount</th>
          <th>Category</th>
          <th>Type</th>
          <th>Date</th>
          <th>Action</th>
        </tr>
      </thead>

      <tbody>
        {transactions.map((item) => (
          <tr key={item._id}>
            <td>{item.title}</td>
            <td>₹ {item.amount}</td>
            <td>{item.category}</td>
            <td>{item.type}</td>
            <td>
              {new Date(
                item.date
              ).toLocaleDateString()}
            </td>
            <td>
              <button
                onClick={() =>
                  deleteTransaction(item._id)
                }
              >
                Delete
              </button>
            </td>
          </tr>
        ))}
      </tbody>
    </table>
  );
};

export default TransactionTable;