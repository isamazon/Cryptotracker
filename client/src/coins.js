import React from "react";
import { Col } from "react-bootstrap";
import "./styles.css";

function Coins(props) {
  return (
    <Col lg={4} md={6} className="coin-column">
      <div className="coin-container">
        <img src={props.coinimg} alt={props.alt} />
        <h1>{props.name}</h1>
        <p>Current price:</p>
        <p>{props.symbol}</p>
        <p className="price">${props.price}</p>
        <p>Market cap:</p>
        <p className="coin-volume">${props.volume.toLocaleString()}</p>
      </div>
    </Col>
  );
}

export default Coins;
