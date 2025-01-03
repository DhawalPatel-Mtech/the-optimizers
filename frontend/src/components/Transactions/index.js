import styles from "./Transaction.module.css";

export default function Transactions() {
  return (
    <div className={styles.transactions}>
      <div className={styles.heading}>
        <h3>Current Transactions</h3>
      </div>
      <div className={styles.transactionList}>
        <div className={styles.transactionItem}>
          <span className={styles.transactionLabel}>Transaction 1:</span>
          <span className={styles.transactionValue}>$100</span>
        </div>
        <div className={styles.transactionItem}>
          <span className={styles.transactionLabel}>Transaction 2:</span>
          <span className={styles.transactionValue}>$200</span>
        </div>
        <div className={styles.transactionItem}>
          <span className={styles.transactionLabel}>Transaction 3:</span>
          <span className={styles.transactionValue}>$300</span>
        </div>
      </div>
    </div>
  );
}
