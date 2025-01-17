"use client";
import { useState } from "react";

import IncomeExpenseDonutChart from "../Graph/ExpenseChart";
import styles from "./BalanceGraph.module.css";

export default function BalanceGraph() {
  const data = [
    {
      type: "expense",
      categoryName: "Apparel",
      categoryDescription: "Apparel expense",
      icon: "🧥",
      amount: "5944.44",
      date: "26/05/2023",
    },
    {
      type: "expense",
      categoryName: "Education",
      categoryDescription: "Education expense",
      icon: "📙",
      amount: "6273.28",
      date: "01/07/2022",
    },
    {
      type: "income",
      categoryName: "Petty cash",
      categoryDescription: "Petty cash income",
      icon: "💵",
      amount: "8234.34",
      date: "11/06/2022",
    },
    {
      type: "expense",
      categoryName: "Health",
      categoryDescription: "Health expense",
      icon: "🧘🏽‍♂️",
      amount: "5889.64",
      date: "12/02/2023",
    },
    {
      type: "income",
      categoryName: "Petty cash",
      categoryDescription: "Petty cash income",
      icon: "💵",
      amount: "3375.52",
      date: "20/04/2020",
    },
    {
      type: "expense",
      categoryName: "Social Life",
      categoryDescription: "Social Life expense",
      icon: "👬🏼",
      amount: "10563.65",
      date: "04/07/2022",
    },
    {
      type: "expense",
      categoryName: "Beauty",
      categoryDescription: "Beauty expense",
      icon: "💄",
      amount: "6084.35",
      date: "19/07/2022",
    },
    {
      type: "expense",
      categoryName: "Gift",
      categoryDescription: "Gift expense",
      icon: "🎁",
      amount: "7203.71",
      date: "06/05/2020",
    },
    {
      type: "expense",
      categoryName: "Apparel",
      categoryDescription: "Apparel expense",
      icon: "🧥",
      amount: "2781.99",
      date: "16/10/2020",
    },
    {
      type: "expense",
      categoryName: "Beauty",
      categoryDescription: "Beauty expense",
      icon: "💄",
      amount: "10704.63",
      date: "13/07/2020",
    },
    {
      type: "expense",
      categoryName: "Beauty",
      categoryDescription: "Beauty expense",
      icon: "💄",
      amount: "9250.32",
      date: "20/09/2022",
    },
    {
      type: "expense",
      categoryName: "Transport",
      categoryDescription: "Transport expense",
      icon: "🚕",
      amount: "2078.47",
      date: "10/04/2020",
    },
    {
      type: "expense",
      categoryName: "Gift",
      categoryDescription: "Gift expense",
      icon: "🎁",
      amount: "9524.40",
      date: "18/12/2021",
    },
    {
      type: "expense",
      categoryName: "Food",
      categoryDescription: "Food expense",
      icon: "🍜",
      amount: "6180.28",
      date: "02/05/2022",
    },
    {
      type: "expense",
      categoryName: "Gift",
      categoryDescription: "Gift expense",
      icon: "🎁",
      amount: "9107.48",
      date: "20/05/2023",
    },
    {
      type: "income",
      categoryName: "Bonus",
      categoryDescription: "Bonus income",
      icon: "🏅",
      amount: "2371.85",
      date: "27/01/2020",
    },
    {
      type: "expense",
      categoryName: "Health",
      categoryDescription: "Health expense",
      icon: "🧘🏽‍♂️",
      amount: "5468.56",
      date: "28/07/2020",
    },
    {
      type: "expense",
      categoryName: "Health",
      categoryDescription: "Health expense",
      icon: "🧘🏽‍♂️",
      amount: "9727.86",
      date: "26/12/2022",
    },
    {
      type: "expense",
      categoryName: "Health",
      categoryDescription: "Health expense",
      icon: "🧘🏽‍♂️",
      amount: "1010.07",
      date: "04/03/2023",
    },
    {
      type: "expense",
      categoryName: "Transport",
      categoryDescription: "Transport expense",
      icon: "🚕",
      amount: "10098.86",
      date: "21/03/2022",
    },
    {
      type: "income",
      categoryName: "Bonus",
      categoryDescription: "Bonus income",
      icon: "🏅",
      amount: "4881.77",
      date: "10/02/2021",
    },
    {
      type: "income",
      categoryName: "Petty cash",
      categoryDescription: "Petty cash income",
      icon: "💵",
      amount: "6707.64",
      date: "02/02/2022",
    },
    {
      type: "income",
      categoryName: "Salary",
      categoryDescription: "Salary income",
      icon: "💼",
      amount: "9610.10",
      date: "27/07/2023",
    },
    {
      type: "income",
      categoryName: "Allowance",
      categoryDescription: "Allowance income",
      icon: "💰",
      amount: "3819.10",
      date: "28/02/2022",
    },
    {
      type: "expense",
      categoryName: "Food",
      categoryDescription: "Food expense",
      icon: "🍜",
      amount: "1956.55",
      date: "30/06/2022",
    },
    {
      type: "income",
      categoryName: "Allowance",
      categoryDescription: "Allowance income",
      icon: "💰",
      amount: "2531.92",
      date: "30/06/2020",
    },
    {
      type: "income",
      categoryName: "Bonus",
      categoryDescription: "Bonus income",
      icon: "🏅",
      amount: "2503.86",
      date: "12/01/2022",
    },
    {
      type: "expense",
      categoryName: "Apparel",
      categoryDescription: "Apparel expense",
      icon: "🧥",
      amount: "9850.62",
      date: "05/03/2021",
    },
    {
      type: "expense",
      categoryName: "Transport",
      categoryDescription: "Transport expense",
      icon: "🚕",
      amount: "7883.56",
      date: "19/01/2022",
    },
    {
      type: "income",
      categoryName: "Bonus",
      categoryDescription: "Bonus income",
      icon: "🏅",
      amount: "2737.57",
      date: "03/03/2021",
    },
    {
      type: "expense",
      categoryName: "Transport",
      categoryDescription: "Transport expense",
      icon: "🚕",
      amount: "6545.17",
      date: "15/05/2020",
    },
    {
      type: "expense",
      categoryName: "Food",
      categoryDescription: "Food expense",
      icon: "🍜",
      amount: "1387.59",
      date: "13/11/2020",
    },
    {
      type: "expense",
      categoryName: "Health",
      categoryDescription: "Health expense",
      icon: "🧘🏽‍♂️",
      amount: "8143.88",
      date: "11/08/2021",
    },
    {
      type: "income",
      categoryName: "Petty cash",
      categoryDescription: "Petty cash income",
      icon: "💵",
      amount: "6378.77",
      date: "24/06/2023",
    },
    {
      type: "expense",
      categoryName: "Transport",
      categoryDescription: "Transport expense",
      icon: "🚕",
      amount: "6166.70",
      date: "10/06/2020",
    },
    {
      type: "expense",
      categoryName: "Culture",
      categoryDescription: "Culture expense",
      icon: "🖼",
      amount: "6496.49",
      date: "06/10/2023",
    },
    {
      type: "expense",
      categoryName: "Food",
      categoryDescription: "Food expense",
      icon: "🍜",
      amount: "9024.07",
      date: "13/09/2022",
    },
    {
      type: "income",
      categoryName: "Salary",
      categoryDescription: "Salary income",
      icon: "💼",
      amount: "6051.70",
      date: "06/11/2020",
    },
    {
      type: "expense",
      categoryName: "Transport",
      categoryDescription: "Transport expense",
      icon: "🚕",
      amount: "8678.13",
      date: "25/03/2022",
    },
    {
      type: "income",
      categoryName: "Allowance",
      categoryDescription: "Allowance income",
      icon: "💰",
      amount: "8265.41",
      date: "17/09/2023",
    },
    {
      type: "expense",
      categoryName: "Beauty",
      categoryDescription: "Beauty expense",
      icon: "💄",
      amount: "4441.61",
      date: "01/04/2021",
    },
    {
      type: "income",
      categoryName: "Salary",
      categoryDescription: "Salary income",
      icon: "💼",
      amount: "8556.45",
      date: "07/06/2023",
    },
    {
      type: "expense",
      categoryName: "Beauty",
      categoryDescription: "Beauty expense",
      icon: "💄",
      amount: "3447.96",
      date: "29/05/2021",
    },
    {
      type: "expense",
      categoryName: "Beauty",
      categoryDescription: "Beauty expense",
      icon: "💄",
      amount: "6504.29",
      date: "23/03/2022",
    },
    {
      type: "expense",
      categoryName: "Culture",
      categoryDescription: "Culture expense",
      icon: "🖼",
      amount: "7815.94",
      date: "12/06/2023",
    },
    {
      type: "expense",
      categoryName: "Apparel",
      categoryDescription: "Apparel expense",
      icon: "🧥",
      amount: "3100.33",
      date: "22/01/2023",
    },
    {
      type: "expense",
      categoryName: "Apparel",
      categoryDescription: "Apparel expense",
      icon: "🧥",
      amount: "7860.84",
      date: "30/06/2023",
    },
    {
      type: "expense",
      categoryName: "Transport",
      categoryDescription: "Transport expense",
      icon: "🚕",
      amount: "5107.95",
      date: "31/05/2021",
    },
    {
      type: "income",
      categoryName: "Petty cash",
      categoryDescription: "Petty cash income",
      icon: "💵",
      amount: "4833.62",
      date: "26/11/2021",
    },
    {
      type: "expense",
      categoryName: "Culture",
      categoryDescription: "Culture expense",
      icon: "🖼",
      amount: "8579.27",
      date: "04/10/2021",
    },
    {
      type: "income",
      categoryName: "Salary",
      categoryDescription: "Salary income",
      icon: "💼",
      amount: "3599.06",
      date: "01/01/2023",
    },
    {
      type: "expense",
      categoryName: "Social Life",
      categoryDescription: "Social Life expense",
      icon: "👬🏼",
      amount: "10621.89",
      date: "19/03/2021",
    },
    {
      type: "expense",
      categoryName: "Food",
      categoryDescription: "Food expense",
      icon: "🍜",
      amount: "9570.98",
      date: "19/03/2022",
    },
    {
      type: "expense",
      categoryName: "Transport",
      categoryDescription: "Transport expense",
      icon: "🚕",
      amount: "8342.94",
      date: "15/11/2022",
    },
    {
      type: "expense",
      categoryName: "Gift",
      categoryDescription: "Gift expense",
      icon: "🎁",
      amount: "8095.52",
      date: "26/10/2022",
    },
    {
      type: "expense",
      categoryName: "Health",
      categoryDescription: "Health expense",
      icon: "🧘🏽‍♂️",
      amount: "8286.94",
      date: "27/12/2022",
    },
    {
      type: "expense",
      categoryName: "Culture",
      categoryDescription: "Culture expense",
      icon: "🖼",
      amount: "2592.21",
      date: "12/09/2022",
    },
    {
      type: "expense",
      categoryName: "Apparel",
      categoryDescription: "Apparel expense",
      icon: "🧥",
      amount: "7824.63",
      date: "02/07/2023",
    },
    {
      type: "expense",
      categoryName: "Transport",
      categoryDescription: "Transport expense",
      icon: "🚕",
      amount: "8331.90",
      date: "05/07/2021",
    },
    {
      type: "expense",
      categoryName: "Beauty",
      categoryDescription: "Beauty expense",
      icon: "💄",
      amount: "4856.97",
      date: "19/07/2020",
    },
    {
      type: "income",
      categoryName: "Salary",
      categoryDescription: "Salary income",
      icon: "💼",
      amount: "2114.91",
      date: "01/12/2020",
    },
    {
      type: "expense",
      categoryName: "Education",
      categoryDescription: "Education expense",
      icon: "📙",
      amount: "1962.57",
      date: "07/07/2020",
    },
    {
      type: "expense",
      categoryName: "Culture",
      categoryDescription: "Culture expense",
      icon: "🖼",
      amount: "1944.84",
      date: "30/05/2020",
    },
    {
      type: "expense",
      categoryName: "Transport",
      categoryDescription: "Transport expense",
      icon: "🚕",
      amount: "3787.30",
      date: "10/07/2022",
    },
    {
      type: "expense",
      categoryName: "Food",
      categoryDescription: "Food expense",
      icon: "🍜",
      amount: "3700.09",
      date: "12/12/2021",
    },
    {
      type: "expense",
      categoryName: "Transport",
      categoryDescription: "Transport expense",
      icon: "🚕",
      amount: "9701.97",
      date: "18/12/2023",
    },
    {
      type: "expense",
      categoryName: "Education",
      categoryDescription: "Education expense",
      icon: "📙",
      amount: "4400.23",
      date: "02/03/2022",
    },
    {
      type: "expense",
      categoryName: "Health",
      categoryDescription: "Health expense",
      icon: "🧘🏽‍♂️",
      amount: "8594.11",
      date: "28/05/2022",
    },
    {
      type: "expense",
      categoryName: "Food",
      categoryDescription: "Food expense",
      icon: "🍜",
      amount: "2790.67",
      date: "30/04/2022",
    },
    {
      type: "income",
      categoryName: "Petty cash",
      categoryDescription: "Petty cash income",
      icon: "💵",
      amount: "7315.18",
      date: "04/01/2021",
    },
    {
      type: "expense",
      categoryName: "Social Life",
      categoryDescription: "Social Life expense",
      icon: "👬🏼",
      amount: "8201.24",
      date: "21/09/2023",
    },
    {
      type: "income",
      categoryName: "Salary",
      categoryDescription: "Salary income",
      icon: "💼",
      amount: "10167.55",
      date: "11/05/2023",
    },
    {
      type: "income",
      categoryName: "Allowance",
      categoryDescription: "Allowance income",
      icon: "💰",
      amount: "1443.76",
      date: "21/07/2020",
    },
    {
      type: "expense",
      categoryName: "Culture",
      categoryDescription: "Culture expense",
      icon: "🖼",
      amount: "2218.77",
      date: "03/01/2020",
    },
    {
      type: "expense",
      categoryName: "Health",
      categoryDescription: "Health expense",
      icon: "🧘🏽‍♂️",
      amount: "2024.24",
      date: "02/12/2022",
    },
    {
      type: "expense",
      categoryName: "Apparel",
      categoryDescription: "Apparel expense",
      icon: "🧥",
      amount: "9606.95",
      date: "17/03/2023",
    },
    {
      type: "expense",
      categoryName: "Culture",
      categoryDescription: "Culture expense",
      icon: "🖼",
      amount: "2326.13",
      date: "02/11/2023",
    },
    {
      type: "expense",
      categoryName: "Gift",
      categoryDescription: "Gift expense",
      icon: "🎁",
      amount: "8555.43",
      date: "10/11/2022",
    },
    {
      type: "expense",
      categoryName: "Culture",
      categoryDescription: "Culture expense",
      icon: "🖼",
      amount: "9526.31",
      date: "29/04/2022",
    },
    {
      type: "income",
      categoryName: "Bonus",
      categoryDescription: "Bonus income",
      icon: "🏅",
      amount: "9809.74",
      date: "28/04/2022",
    },
    {
      type: "income",
      categoryName: "Salary",
      categoryDescription: "Salary income",
      icon: "💼",
      amount: "9357.91",
      date: "30/11/2022",
    },
    {
      type: "expense",
      categoryName: "Education",
      categoryDescription: "Education expense",
      icon: "📙",
      amount: "7885.47",
      date: "16/04/2023",
    },
    {
      type: "expense",
      categoryName: "Gift",
      categoryDescription: "Gift expense",
      icon: "🎁",
      amount: "5792.15",
      date: "19/02/2022",
    },
    {
      type: "expense",
      categoryName: "Household",
      categoryDescription: "Household expense",
      icon: "🪑",
      amount: "10139.18",
      date: "30/12/2022",
    },
    {
      type: "expense",
      categoryName: "Gift",
      categoryDescription: "Gift expense",
      icon: "🎁",
      amount: "3478.36",
      date: "29/05/2023",
    },
    {
      type: "income",
      categoryName: "Petty cash",
      categoryDescription: "Petty cash income",
      icon: "💵",
      amount: "7094.87",
      date: "13/12/2022",
    },
    {
      type: "expense",
      categoryName: "Household",
      categoryDescription: "Household expense",
      icon: "🪑",
      amount: "1394.15",
      date: "14/01/2023",
    },
    {
      type: "expense",
      categoryName: "Transport",
      categoryDescription: "Transport expense",
      icon: "🚕",
      amount: "5799.18",
      date: "06/08/2023",
    },
    {
      type: "expense",
      categoryName: "Food",
      categoryDescription: "Food expense",
      icon: "🍜",
      amount: "7616.79",
      date: "06/06/2023",
    },
    {
      type: "expense",
      categoryName: "Beauty",
      categoryDescription: "Beauty expense",
      icon: "💄",
      amount: "7899.21",
      date: "19/01/2022",
    },
    {
      type: "expense",
      categoryName: "Social Life",
      categoryDescription: "Social Life expense",
      icon: "👬🏼",
      amount: "4744.21",
      date: "25/04/2021",
    },
    {
      type: "expense",
      categoryName: "Social Life",
      categoryDescription: "Social Life expense",
      icon: "👬🏼",
      amount: "7106.29",
      date: "30/03/2020",
    },
    {
      type: "expense",
      categoryName: "Gift",
      categoryDescription: "Gift expense",
      icon: "🎁",
      amount: "1499.14",
      date: "25/05/2020",
    },
    {
      type: "income",
      categoryName: "Bonus",
      categoryDescription: "Bonus income",
      icon: "🏅",
      amount: "6118.81",
      date: "10/05/2023",
    },
    {
      type: "income",
      categoryName: "Petty cash",
      categoryDescription: "Petty cash income",
      icon: "💵",
      amount: "4991.87",
      date: "05/05/2020",
    },
    {
      type: "expense",
      categoryName: "Transport",
      categoryDescription: "Transport expense",
      icon: "🚕",
      amount: "8649.15",
      date: "31/12/2020",
    },
    {
      type: "expense",
      categoryName: "Social Life",
      categoryDescription: "Social Life expense",
      icon: "👬🏼",
      amount: "5194.49",
      date: "21/05/2020",
    },
    {
      type: "expense",
      categoryName: "Education",
      categoryDescription: "Education expense",
      icon: "📙",
      amount: "4596.10",
      date: "25/01/2023",
    },
    {
      type: "expense",
      categoryName: "Social Life",
      categoryDescription: "Social Life expense",
      icon: "👬🏼",
      amount: "5843.96",
      date: "25/05/2020",
    },
    {
      type: "expense",
      categoryName: "Household",
      categoryDescription: "Household expense",
      icon: "🪑",
      amount: "10245.47",
      date: "10/09/2020",
    },
  ];
  const calculateTotalIncome = (transactions) => {
    return transactions
      .filter((transaction) => transaction.type === "income")
      .reduce(
        (total, transaction) => total + parseFloat(transaction.amount),
        0
      );
  };

  const totalIncome = calculateTotalIncome(data);
  console.log("totalIncome", totalIncome);

  const calculateTotalExpenses = (transactions) => {
    return transactions
      .filter((transaction) => transaction.type === "expense")
      .reduce(
        (total, transaction) => total + parseFloat(transaction.amount),
        0
      );
  };

  const totalExpense = calculateTotalExpenses(data);

  const calculateCurrentBalance = (transactions) => {
    const totalIncome = calculateTotalIncome(transactions);
    const totalExpenses = calculateTotalExpenses(transactions);
    return totalExpenses - totalIncome;
  };

  const totalBalence = calculateCurrentBalance(data);

  const [income, setIncome] = useState(5000); // Default income
  const [expense, setExpense] = useState(2000); // Default expense

  // Functions to update income and expense
  const increaseIncome = () => setIncome(income + 500);
  const increaseExpense = () => setExpense(expense + 300);
  return (
    <div className={styles.balanceGraph}>
      <div className={styles.balance}>
        <h3>Current Balance</h3>
        <p>₹{Math.round(totalBalence)}</p>
      </div>
      <div className={styles.incomeExpense}>
        <div className={styles.income}>
          <h4>Income</h4>
          <p>₹{totalIncome}</p>
        </div>
        <div className={styles.expense}>
          <h4>Expense</h4>
          <p>₹{totalExpense}</p>
        </div>
      </div>
      <div className={styles.graph}>
        <h4>Expense Graph</h4>
        <div>
          <h1>Income vs Expense</h1>
          <br />
          {/* Pass dynamic income and expense values to the IncomeExpenseDonutChart */}
          <IncomeExpenseDonutChart
            income={totalIncome}
            expense={totalExpense}
          />
        </div>
      </div>
    </div>
  );
}
