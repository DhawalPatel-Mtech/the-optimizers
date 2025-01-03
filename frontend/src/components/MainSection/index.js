import Header from "../Header";
import BalanceGraph from "../BalanceGraph";
import Transactions from "../Transactions";
import styles from "./Main.module.css";

export default function Main() {
  return (
    <div className={styles.main}>
      <Header />
      <div className={styles.content}>
        <BalanceGraph />
        <Transactions />
      </div>
    </div>
  );
}
