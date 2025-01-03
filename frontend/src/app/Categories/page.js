import styles from "./Page.module.css";
import categoriesData from "../../categoryData.json";

export default function Categories() {
  return (
    <div className={styles.container}>
      <h2 className={styles.title}>Categories</h2>
      <div className={styles.itemWrapper}>
        {categoriesData?.map((transaction, index) => (
          <div className={styles.transactionItem} key={index}>
            <div className={styles.transactionIcon}>{transaction.icon}</div>
            <div className={styles.transactionCategoryName}>
              {transaction.categoryName}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
