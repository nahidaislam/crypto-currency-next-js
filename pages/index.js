import { useState, useEffect } from "react";
import axios from "axios";
import Layout from "../components/Layout";
import CoinList from "../components/CoinList";
import SearchBar from "../components/SearchBar";

export default function Home() {
  const url =
    " https://api.coingecko.com/api/v3/coins/markets?vs_currency=sek&order=market_cap_desc&per_page=10&page=1&sparkline=false";
  const [search, setSearch] = useState("");
  const [filteredCoins, setfilteredCoins] = useState([]);

  useEffect(() => {
    fetchData();
    const interval = setInterval(() => {
      fetchData();
    }, 5000);
    return () => clearInterval(interval);
  }, []);

  const fetchData = async () => {
    try {
      const res = await axios(url);
      setfilteredCoins(res.data);
    } catch (err) {
      throw new Error(err);
    }
  };

  const allCoins = filteredCoins.filter((coin) =>
    coin.name.toLowerCase().includes(search.toLowerCase())
  );

  const handleChange = (e) => {
    e.preventDefault();

    setSearch(e.target.value.toLowerCase());
  };

  return (
    <Layout>
      <div className="coin_app">
        <SearchBar type="text" placeholder="Search" onChange={handleChange} />
        <CoinList filteredCoins={allCoins} />
      </div>
    </Layout>
  );
}

// export const getServerSideProps = async () => {
//   const res = await fetch(
//     "  https://api.coingecko.com/api/v3/coins/markets?vs_currency=sek&order=market_cap_desc&per_page=20&page=1&sparkline=false"
//   );

//   const filteredCoins = await res.json();

//   return {
//     props: {
//       filteredCoins,
//     },
//   };
// };
