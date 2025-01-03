import styles from "./AllTransaction.module.css";

export default function TableComponent({ entries }) {
  return (
    <div className={styles.tableContainer}>
      <h3 className={styles.tableTitle}>Entries</h3>
      <table className={styles.table}>
        <thead>
          <tr
            style={{
              display: "flex",
              justifyContent: "space-between",
              gap: "30px",
            }}
          >
            <th>Type</th>
            <th>Category Name</th>
            <th>Category Description</th>
            {/* <th>Icon</th> */}
            <th>Amount</th>
            <th>Date</th>
          </tr>
        </thead>
        <tbody>
          {entries.map((entry, index) => (
            <tr
              key={index}
              style={{
                display: "flex",
                justifyContent: "space-between",
                gap: "30px",
              }}
            >
              <td>{entry.type || "-"}</td>
              <td>{entry.categoryName || "-"}</td>
              <td>{entry.categoryDescription || "-"}</td>
              <td>{entry.icon || "-"}</td>
              <td>{entry.amount || "-"}</td>
              <td>{entry.date || "-"}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}
