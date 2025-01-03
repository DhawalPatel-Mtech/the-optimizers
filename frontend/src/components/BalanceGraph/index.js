"use client";
import { useState } from "react";

import IncomeExpenseDonutChart from "../Graph/ExpenseChart";
import styles from "./BalanceGraph.module.css";

export default function BalanceGraph() {
  const [income, setIncome] = useState(5000); // Default income
  const [expense, setExpense] = useState(2000); // Default expense

  // Functions to update income and expense
  const increaseIncome = () => setIncome(income + 500);
  const increaseExpense = () => setExpense(expense + 300);
  return (
    <div className={styles.balanceGraph}>
      <div className={styles.balance}>
        <h3>Current Balance</h3>
        <p>$10,000</p>
      </div>
      <div className={styles.incomeExpense}>
        <div className={styles.income}>
          <h4>Income</h4>
          <p>$5,000</p>
        </div>
        <div className={styles.expense}>
          <h4>Expense</h4>
          <p>$2,000</p>
        </div>
      </div>
      <div className={styles.graph}>
        <h4>Expense Graph</h4>
        <div>
          <h1>Income vs Expense</h1>
          <br />
          {/* Pass dynamic income and expense values to the IncomeExpenseDonutChart */}
          <IncomeExpenseDonutChart income={income} expense={expense} />
        </div>
      </div>
    </div>
  );
}
