import React, { useState } from "react";
import API from "../services/api";
import { useNavigate } from "react-router-dom";
import BackButton from "../components/BackButton";

const AddTransaction = () => {
  const navigate = useNavigate();

  const [formData, setFormData] = useState({
    title: "",
    amount: "",
    category: "",
    type: "expense",
    date: "",
  });

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const user = JSON.parse(
        localStorage.getItem("user")
      );

      if (!user?.token) {
        alert("Please login again");
        navigate("/");
        return;
      }

      await API.post(
        "/transactions",
        formData,
        {
          headers: {
            Authorization: `Bearer ${user.token}`,
          },
        }
      );

      alert("Transaction Added Successfully!");

      setFormData({
        title: "",
        amount: "",
        category: "",
        type: "expense",
        date: "",
      });

      navigate("/transactions");
    } catch (error) {
      console.error(error);
      alert(
        error?.response?.data?.message ||
          "Error adding transaction"
      );
    }
  };

  return (
    <div className="transaction-page">
      <div className="transaction-card">

        <BackButton />

        <h1>Add Transaction</h1>

        <form
          onSubmit={handleSubmit}
          className="transaction-form"
        >
          <input
            type="text"
            name="title"
            placeholder="Transaction Title"
            value={formData.title}
            onChange={handleChange}
            required
          />

          <input
            type="number"
            name="amount"
            placeholder="Amount"
            value={formData.amount}
            onChange={handleChange}
            min="1"
            required
          />

          <input
            type="text"
            name="category"
            placeholder="Category (Food, Salary, Travel...)"
            value={formData.category}
            onChange={handleChange}
            required
          />

          <select
            name="type"
            value={formData.type}
            onChange={handleChange}
          >
            <option value="expense">
              Expense
            </option>

            <option value="income">
              Income
            </option>
          </select>

          <input
            type="date"
            name="date"
            value={formData.date}
            onChange={handleChange}
            required
          />

          <button type="submit">
            Add Transaction
          </button>
        </form>
      </div>
    </div>
  );
};

export default AddTransaction;