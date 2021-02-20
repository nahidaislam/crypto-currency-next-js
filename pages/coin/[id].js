import Layout from "../../components/Layout";
import styles from "./Coin.module.css";

const Coin = ({ coin }) => {
  return (
    <Layout>
      <div className={styles.coinPage}>
        <div className={styles.coinContainer}>
          <img
            src={coin.image.thumb}
            alt={coin.name}
            className={styles.coinImg}
          />
          <h1 className={styles.coinName}>{coin.name}</h1>
          <p className={styles.coinSymbol}>{coin.symbol}</p>
          <p className={styles.coinCurrent}>
            {coin.market_data.current_price.sek}
          </p>
        </div>
      </div>
    </Layout>
  );
};

export default Coin;

export async function getServerSideProps(context) {
  const { id } = context.query;

  const res = await fetch(`https://api.coingecko.com/api/v3/coins/${id}
  `);

  const data = await res.json();

  return {
    props: {
      coin: data,
    },
  };
}
