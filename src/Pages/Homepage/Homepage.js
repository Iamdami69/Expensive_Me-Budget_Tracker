import { PageWarpper } from "../../Components/PageWarpper/PageWarpper";
import { ThemeContextSupplier } from "../../Context/ThemeContext/ThemeContext";

import styles from "./Homepage.module.css";
import { CardGrid } from "../../Components/CardGrid/CardGrid";
import { BudgetChart } from "../../Components/BudgetChart/BudgetChart";

export default function App() {
  const { theme } = ThemeContextSupplier();

  return (
    <PageWarpper customClass={styles.homepage}>
      <section className={`subpage`}>
        <div className={styles.Homehero}>
          <div className={styles.homeHeroCardReportAndChart}>
            <CardGrid />
            <BudgetChart />
          </div>
          <div className={styles.homeHeroAside}>
            <h1>Home Sidebar</h1>
          </div>
        </div>
      </section>
    </PageWarpper>
  );
}
