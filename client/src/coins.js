import React from "react";
import { Col } from "react-bootstrap";
import "./styles.css";

function Coins(props) {
  return (
    <Col lg={4} md={6} className="coin-column">
      <div className="coin-container">
        <img src={props.coinimg} alt={props.alt} />
        <h1 className="crypto-h1">{props.name}</h1>
        <p>{props.symbol}</p>
        <p className="price">Current price: ${props.price}</p>
        <p className="coin-volume">Volume: ${props.volume.toLocaleString()}</p>
        <p className="change-p">24hr change:</p>
        {props.priceChange < 0 ? (
          <p className="coin-percent-red">
            🔻{props.priceChange.toFixed(2)}%🔻
          </p>
        ) : (
          <p className="coin-percent-green">
            🚀{props.priceChange.toFixed(2)}%🚀
          </p>
        )}

        <p className="coin-marketcap">
          Mkt Cap: ${props.marketcap.toLocaleString()}
        </p>
      </div>
    </Col>
  );
}

export default Coins;
