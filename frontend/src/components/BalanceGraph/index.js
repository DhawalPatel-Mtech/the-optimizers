import styles from "./BalanceGraph.module.css";

export default function BalanceGraph() {
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
      </div>
    </div>
  );
}
