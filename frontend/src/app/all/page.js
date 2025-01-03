"use client";
import { useState } from "react";
import FormComponent from "../../components/Form";
import TableComponent from "../../components/AllTransaction";
// import styles from "./TablePage.module.css";

export default function TablePage() {
  const [entries, setEntries] = useState([]);

  const handleAddEntry = (entry) => {
    setEntries((prevEntries) => [...prevEntries, entry]);
  };

  return (
    <div>
      <h2>Expense Tracker</h2>
      <div
        style={{
          display: "flex",
          height: "100vh",
          background: "#f2f2f2",
          width: "83vw",
        }}
      >
        <FormComponent onAddEntry={handleAddEntry} />
        <TableComponent entries={entries} />
      </div>
    </div>
  );
}
