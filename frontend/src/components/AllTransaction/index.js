import styles from "./AllTransaction.module.css";

export default function TableComponent({ entries }) {
  return (
    <div className={styles.tableContainer}>
      <h3 className={styles.tableTitle}>Entries</h3>
      <table className={styles.table}>
        <thead>
          <tr>
            <th>Expense</th>
            <th>Income</th>
            <th>Category</th>
          </tr>
        </thead>
        <tbody style={{ display: "flex", gap: "20px" }}>
          {entries.map((entry, index) => (
            <tr key={index}>
              <td>{entry.expense || "-"}</td>
              <td>{entry.income || "-"}</td>
              <td>{entry.category || "-"}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}
