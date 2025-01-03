"use client";
import Header from "../Header";
import BalanceGraph from "../BalanceGraph";
import Transactions from "../Transactions";
import styles from "./Main.module.css";
import { useEffect } from "react";
import { fetchData } from "@/api/categories";

export default function Main() {
  // Function to fetch data
  const getCategory = async (type) => {
    console.log("Fetching data...");
    try {
      const response = await fetchData(type);
      console.log("Data fetched:", response.data);
      setCategories(response.data); // Store data in state
      setLoading(false); // Set loading to false once data is fetched
    } catch (error) {
      console.error("Error fetching data:", error);
      setError(error); // Set error state in case of failure
      setLoading(false); // Set loading to false even if an error occurs
    }
  };

  // Call fetchData when the component is mounted
  useEffect(() => {
    getCategory();
  }, []);

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
