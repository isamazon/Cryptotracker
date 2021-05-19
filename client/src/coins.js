import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import "./styles.css";

function Coins(props) {
  return (
    <Col lg={4} md={6} className="coin-column">
      <div className="coin-container">
        <img src={props.coinimg} alt={props.alt} />
        <h1>{props.name}</h1>
        <p>{props.symbol}</p>
        <p className="price">${props.price}</p>
      </div>
    </Col>
  );
}

export default Coins;
