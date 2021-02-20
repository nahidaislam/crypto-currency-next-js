import styles from "./Header.module.css";

const Header = () => {
  return (
    <div className={styles.coinContainer}>
      <div className={styles.coinRow}>
        <p className={styles.name}>Coin</p>
        <p className={styles.price}>Price</p>
        <p className={styles.totV}>Total Volume</p>
        <p className={styles.percentage}>24h</p>
        <p className={styles.mktCap}> Mkt Cap </p>
      </div>
    </div>
  );
};

export default Header;
