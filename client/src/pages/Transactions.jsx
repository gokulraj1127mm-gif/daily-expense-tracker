import React, {
  useEffect,
  useState,
} from "react";

import API from "../services/api";
import Navbar from "../components/Navbar";
import TransactionTable from "../components/TransactionTable";
import BackButton from "../components/BackButton";

const Transactions = () => {
  const [transactions, setTransactions] =
    useState([]);

  const [loading, setLoading] =
    useState(true);

  useEffect(() => {
    fetchTransactions();
  }, []);

  const fetchTransactions = async () => {
    try {
      const user = JSON.parse(
        localStorage.getItem("user")
      );

      const res = await API.get(
        "/transactions",
        {
          headers: {
            Authorization: `Bearer ${user.token}`,
          },
        }
      );

      setTransactions(res.data);
    } catch (error) {
      console.error(error);
      alert("Failed to load transactions");
    } finally {
      setLoading(false);
    }
  };

  const deleteTransaction = async (
    id
  ) => {
    const confirmDelete =
      window.confirm(
        "Are you sure you want to delete this transaction?"
      );

    if (!confirmDelete) return;

    try {
      const user = JSON.parse(
        localStorage.getItem("user")
      );

      await API.delete(
        `/transactions/${id}`,
        {
          headers: {
            Authorization: `Bearer ${user.token}`,
          },
        }
      );

      alert(
        "Transaction Deleted Successfully"
      );

      fetchTransactions();
    } catch (error) {
      console.error(error);
      alert(
        "Failed to delete transaction"
      );
    }
  };

  return (
    <>
      <Navbar />

      <div
        style={{
          padding: "30px",
        }}
      >
        <BackButton />

        <h1
          style={{
            marginBottom: "20px",
          }}
        >
          Transactions
        </h1>

        {loading ? (
          <h3>Loading Transactions...</h3>
        ) : (
          <TransactionTable
            transactions={transactions}
            deleteTransaction={
              deleteTransaction
            }
          />
        )}
      </div>
    </>
  );
};

export default Transactions;