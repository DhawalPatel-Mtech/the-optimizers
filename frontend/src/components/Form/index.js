"use client";
import { useState } from "react";
import styles from "./Form.module.css";

export default function FormComponent({ onAddEntry }) {
  const [form, setForm] = useState({
    expense: "",
    income: "",
    category: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setForm({ ...form, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (form.expense || form.income) {
      onAddEntry(form);
      setForm({ expense: "", income: "", category: "" }); // Clear the form
    }
  };

  return (
    <form className={styles.form} onSubmit={handleSubmit}>
      <div className={styles.field}>
        <label htmlFor="expense" className={styles.inputLabel}>
          Expense
        </label>
        <input
          type="number"
          id="expense"
          name="expense"
          value={form.expense}
          onChange={handleChange}
          placeholder="Enter expense"
          className={styles.inputField}
        />
      </div>
      <div className={styles.field}>
        <label htmlFor="income" className={styles.inputLabel}>
          Income
        </label>
        <input
          type="number"
          id="income"
          name="income"
          value={form.income}
          onChange={handleChange}
          placeholder="Enter income"
          className={styles.inputField}
        />
      </div>
      <div className={styles.field}>
        <label htmlFor="category" className={styles.inputLabel}>
          Category
        </label>
        <input
          type="text"
          id="category"
          name="category"
          value={form.category}
          onChange={handleChange}
          placeholder="Enter category"
          className={styles.inputField}
        />
      </div>
      <button type="submit" className={styles.submitButton}>
        Add Entry
      </button>
    </form>
  );
}
