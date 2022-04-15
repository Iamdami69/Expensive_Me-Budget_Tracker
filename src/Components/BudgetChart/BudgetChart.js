import styles from "./BudgetChart.module.css";
import { ThemeContextSupplier } from "../../Context/ThemeContext/ThemeContext";
import { BudgetContextSupplier } from "../../Context/BudgetContext/BudgetContext";
import { useEffect, useState } from "react";
import { Bar } from "react-chartjs-2";
import { Chart, registerables } from "chart.js";

export function BudgetChart() {
  const { theme } = ThemeContextSupplier();
  const { budget } = BudgetContextSupplier();
  Chart.register(...registerables);

  const data = {
    labels: budget.map((data) => data.transactionCategory.substring(0, 8)),
    datasets: [
      {
        label: "transaction",
        data: budget.map((amount) => amount.transactionAmount),
        backgroundColor: theme.brandColor,
        barPercentage: 0.6,
        categoryPercentage: 0.9
      }
    ]
  };
  const options = {
    responsive: true,
    aspectRatio: 1 / 1,
    maintainAspectRatio: false,
    plugins: {
      legend: {
        display: false
      }
    }
  };
  useEffect(() => {}, []);
  return (
    <section className={styles.BudgetChart}>
      <Bar data={data} options={options} />
    </section>
  );
}
