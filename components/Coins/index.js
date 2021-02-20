import styles from "./Coins.module.css";
import Link from "next/Link";

const Coins = ({
  name,
  id,
  price,
  symbol,
  marketcap,
  volume,
  image,
  priceChange,
}) => {
  return (
    <Link href="/coin/[id]" as={`/coin/${id}`}>
      <a>
        <div className={styles.coinContainer}>
          <div className={styles.coinRow}>
            <div className={styles.coin}>
              <img src={image} alt={name} className={styles.coinImg} />
              <h1 className={styles.coinName}>{name}</h1>
              <p className={styles.coinSymbol}>{symbol}</p>
            </div>
            <div className={styles.coinData}>
              <p className={styles.coinPrice}>{price.toLocaleString()} </p>
              <p className={styles.coinVolume}>{volume.toLocaleString()} </p>

              {priceChange < 0 ? (
                <p className={(styles.coinPercent, styles.red)}>
                  {priceChange.toFixed(2)}%
                </p>
              ) : (
                <p className={(styles.coinPercent, styles.green)}>
                  {priceChange.toFixed(2)}%
                </p>
              )}
              <p className={styles.coinMarket}>{marketcap.toLocaleString()}</p>
            </div>
          </div>
        </div>
      </a>
    </Link>
  );
};

export default Coins;
