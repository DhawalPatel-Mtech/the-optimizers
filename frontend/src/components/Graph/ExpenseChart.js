// import React from "react";
"use client";
import { useState } from "react";

// import * as React from "react";
import { Doughnut } from "react-chartjs-2";

import { Chart as ChartJS, ArcElement, Tooltip, Legend } from "chart.js";

// Registering required chart elements
ChartJS.register(ArcElement, Tooltip, Legend);

const IncomeExpenseDonutChart = ({ income, expense }) => {
  // Donut chart data
  const data = {
    labels: ["Income", "Expense"],
    datasets: [
      {
        data: [income, expense],
        backgroundColor: ["#4caf50", "#f44336"], // Green for income, red for expense
        borderColor: ["#4caf50", "#f44336"],
        borderWidth: 1,
      },
    ],
  };

  // Donut chart options
  const options = {
    plugins: {
      legend: {
        position: "top",
      },
    },
    responsive: true,
    cutout: "70%", // This creates the donut chart effect
  };

  return (
    <div style={{ width: "300px", height: "300px" }}>
      <Doughnut data={data} options={options} />
    </div>
  );
};

export default IncomeExpenseDonutChart;
