import React, { useEffect, useState } from "react";

import { Container, Row, Col } from "react-bootstrap";
import axios from "axios";
import "./styles.css";
import Coins from "./coins";

function Home() {
  const [coins, setCoins] = useState([]);
  const [search, setSearch] = useState("");

  useEffect(() => {
    axios
      .get(
        "https://api.coingecko.com/api/v3/coins/markets?vs_currency=usd&order=market_cap_desc&per_page=100&page=1&sparkline=false"
      )
      .then((res) => {
        setCoins(res.data);
        console.log(res.data);
      })
      .catch((error) => console.log(error));
  }, []);

  const handleChange = (e) => {
    setSearch(e.target.value);
  };
  const filteredCoins = coins.filter((coin) =>
    coin.name.toLowerCase().includes(search.toLowerCase())
  );

  return (
    <Container fluid className="main-fld-cnt">
      <Container fluid className="inner-cnt">
        <h1 className="main-h1">CryptoTracker</h1>
        <form className="form-1">
          <input
            className="coin-input"
            type="text"
            onChange={handleChange}
            placeholder="Enter your coin here"
          />
        </form>
        <Row className="row-1">
          {filteredCoins.map((coin) => {
            return (
              <Coins
                //
                key={coin.id}
                coinimg={coin.image}
                name={coin.name}
                price={coin.current_price}
                volume={coin.market_cap}
                marketcap={coin.total_volume}
                priceChange={coin.price_change_percentage_24h}
              />
            );
          })}
        </Row>
      </Container>
    </Container>
  );
}

export default Home;
