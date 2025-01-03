"use client";
import { useState } from "react";
import styles from "./Form.module.css";

export default function FormComponent({ onAddEntry }) {
  const [form, setForm] = useState({
    type: "",
    categoryName: "",
    categoryDescription: "",
    amount: "",
    date: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setForm({ ...form, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (form.amount && form.type && form.categoryName && form.date) {
      onAddEntry(form);
      setForm({
        type: "",
        categoryName: "",
        categoryDescription: "",
        amount: "",
        date: "",
      }); // Clear the form
    }
  };

  return (
    <form className={styles.form} onSubmit={handleSubmit}>
      <div className={styles.field}>
        <label htmlFor="type" className={styles.inputLabel}>
          Type
        </label>
        <input
          type="text"
          id="type"
          name="type"
          value={form.type}
          onChange={handleChange}
          placeholder="Enter type"
          className={styles.inputField}
        />
      </div>
      <div className={styles.field}>
        <label htmlFor="categoryName" className={styles.inputLabel}>
          Category Name
        </label>
        <input
          type="text"
          id="categoryName"
          name="categoryName"
          value={form.categoryName}
          onChange={handleChange}
          placeholder="Enter category name"
          className={styles.inputField}
        />
      </div>
      <div className={styles.field}>
        <label htmlFor="categoryDescription" className={styles.inputLabel}>
          Category Description
        </label>
        <input
          type="text"
          id="categoryDescription"
          name="categoryDescription"
          value={form.categoryDescription}
          onChange={handleChange}
          placeholder="Enter category description"
          className={styles.inputField}
        />
      </div>
      <div className={styles.field}>
        <label htmlFor="amount" className={styles.inputLabel}>
          Amount
        </label>
        <input
          type="number"
          id="amount"
          name="amount"
          value={form.amount}
          onChange={handleChange}
          placeholder="Enter amount"
          className={styles.inputField}
        />
      </div>
      <div className={styles.field}>
        <label htmlFor="date" className={styles.inputLabel}>
          Date
        </label>
        <input
          type="date"
          id="date"
          name="date"
          value={form.date}
          onChange={handleChange}
          className={styles.inputField}
        />
      </div>
      <button type="submit" className={styles.submitButton}>
        Add Entry
      </button>
    </form>
  );
}
