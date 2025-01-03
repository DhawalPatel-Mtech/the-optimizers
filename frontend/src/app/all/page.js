import TransactionCard from "../../components/TransactionCard";
import styles from "./page.module.css";
import data from "../../data.json";

export default function All() {
  return (
    <div className={styles.transactions}>
      <div className={styles.heading}>
        <h3>Current Transactions</h3>
      </div>
      <div className={styles.transactionList}>
        {data?.map((transaction, index) => (
          <div className={styles.transactionItem} key={index}>
            <TransactionCard
              type={transaction?.type}
              categoryName={transaction?.categoryName}
              categoryDesciption={transaction?.categoryDescription}
              amount={transaction?.amount}
              icon={transaction?.icon}
              date={transaction?.date}
            />
          </div>
        ))}
      </div>
    </div>
  );
}
