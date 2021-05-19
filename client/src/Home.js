import React from "react";
import { Link } from "react-router-dom";
import { Container, Row, Col } from "react-bootstrap";
import axios from "axios";

const options = {
  method: "GET",
  url: "https://movie-database-imdb-alternative.p.rapidapi.com/",
  params: { s: "<REQUIRED>", page: "1", r: "json" },
  headers: {
    "x-rapidapi-key": "665fd51168mshea629af9ef26f82p17df05jsn8ce41d18d992",
    "x-rapidapi-host": "movie-database-imdb-alternative.p.rapidapi.com",
  },
};

function Home() {
  const [movies, setMovies] = useState([]);
  const [input, setInput] = useState("");
  return (
    <Container fluid className="main-fld-cnt">
      <Container className="inner-cnt"></Container>
    </Container>
  );
}

export default Home;
