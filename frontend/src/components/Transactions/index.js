import styles from "./Transaction.module.css";

export default function Transactions() {
  return (
    <div className={styles.transactions}>
      <h3>Current Transactions</h3>
      <ul>
        <li>Transaction 1</li>
        <li>Transaction 2</li>
        <li>Transaction 3</li>
      </ul>
    </div>
  );
}
