import styles from "./Card.module.css";
import { ThemeContextSupplier } from "../../Context/ThemeContext/ThemeContext";
import { DotsThreeVertical } from "phosphor-react";
export function Card({
  cardDisplay,
  cardDisplayColor,
  firstTextColor,
  firstText,
  backgroundColor,
  inconTodisplay,
  IconContainerBackgroundColor
}) {
  const { theme } = ThemeContextSupplier();
  currencyFormat = Intl.NumberFormat("en-US");

  const totalIncomeAmount = currencyFormat.format(cardDisplay);
  return (
    <>
      <div
        style={{
          backgroundColor: backgroundColor,
          color: theme.depthColor
        }}
        className={styles.card}
      >
        <div className={styles.contentSide}>
          <div className={styles.cardIconContainer}>
            <div
              className={styles.IconContainer}
              style={{ backgroundColor: IconContainerBackgroundColor }}
            ></div>
            {inconTodisplay}
          </div>
          <p
            style={{
              color: firstTextColor,
              margin: "20px 0",
              fontSize: "1.4rem",
              fontWeight: "500"
            }}
          >
            {firstText}
          </p>
          <h1 style={{ color: cardDisplayColor, fontSize: "2.5rem" }}>
            ₦{totalIncomeAmount}
          </h1>
        </div>
        <div className={`touchableOpacity ${styles.menuSide}`}>
          <DotsThreeVertical size={50} color={theme.colorThree} />
        </div>
      </div>
    </>
  );
}

/**
 *  const cardData = [
    {
      cardType: "Total balance",
      cardIcon: CurrencyNgn,
      cardDisplay: "$3140.74",
      cardBackground: theme.color,
      cardColor: theme.depthColor,
      cardSecondColor: theme.depthColorTwo,
      cardIconColor: theme.brandColor,
      cardIconBackground: theme.brandColor
    },
    {
      cardType: "Total spending",
      cardIcon: CreditCard,
      cardDisplay: "$42.040",
      cardBackground: theme.depthColor,
      cardColor: theme.colorThree,
      cardSecondColor: theme.color,
      cardIconColor: theme.color,
      cardIconBackground: theme.colorTwo
    },
    {
      cardType: "Total saved",
      cardIcon: Wallet,
      cardDisplay: "$501.085",
      cardBackground: theme.depthColor,
      cardColor: theme.depthColorThree,
      cardSecondColor: theme.color,
      cardIconColor: theme.color,
      cardIconBackground: theme.colorTwo
    }
 * 
 */
