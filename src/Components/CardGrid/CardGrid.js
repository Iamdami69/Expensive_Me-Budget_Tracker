// CardGrid
import styles from "./CardGrid.module.css";
import { Card } from "../Card/Card";
import { CreditCard, CurrencyNgn, Wallet } from "phosphor-react";
import { ThemeContextSupplier } from "../../Context/ThemeContext/ThemeContext";
import { BudgetContextSupplier } from "../../Context/BudgetContext/BudgetContext";

export function CardGrid() {
  const { theme } = ThemeContextSupplier();
  const { budget } = BudgetContextSupplier();

  const totalSpent = budget
    .filter((record) => record.transactionType === "expense")
    .map((income) => income.transactionAmount)
    .reduce((previousValue, currentValue) => previousValue + currentValue, 0);
  // total balance is the amount you have - the amount you spent
  const totalBalance =
    budget
      .filter((record) => record.transactionType === "income")
      .map((income) => income.transactionAmount)
      .reduce(
        (previousValue, currentValue) => previousValue + currentValue,
        0
      ) - totalSpent;
  const totalIncome = totalBalance + totalSpent;
  return (
    <div className={styles.cardContainer}>
      <Card
        inconTodisplay={
          <CurrencyNgn
            className={styles.cardIcon}
            color={theme.brandColor}
            size={50}
            weight="fill"
          />
        }
        IconContainerBackgroundColor={theme.brandColor}
        backgroundColor={theme.color}
        firstText="Total income"
        firstTextColor={theme.depthColor}
        cardDisplay={totalIncome}
        cardDisplayColor={theme.brand}
      />
      <Card
        inconTodisplay={
          <Wallet
            className={styles.cardIcon}
            color={theme.color}
            size={50}
            weight="fill"
          />
        }
        IconContainerBackgroundColor={theme.colorThree}
        backgroundColor={theme.depthColor}
        firstText="Total balance"
        firstTextColor={theme.colorThree}
        cardDisplay={totalBalance}
        cardDisplayColor={theme.color}
      />
      <Card
        inconTodisplay={
          <CreditCard
            className={styles.cardIcon}
            color={theme.color}
            size={50}
            weight="fill"
          />
        }
        IconContainerBackgroundColor={theme.colorThree}
        backgroundColor={theme.depthColor}
        firstText="Total spending"
        firstTextColor={theme.colorThree}
        cardDisplay={totalSpent}
        cardDisplayColor={theme.color}
      />
    </div>
  );
}
