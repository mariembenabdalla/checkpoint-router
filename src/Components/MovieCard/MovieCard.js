import React from "react";
import { Button, Card } from "react-bootstrap";
import ReactStars from "react-rating-stars-component";
import "./MovieCard.css";
import { Link } from "react-router-dom";

const MovieCard = ({ movie, index }) => {
  return (
    <div key={index}>
      <Card
        style={{
          width: "18rem",
          height: "575px",
          marginTop: "55px",
        }}
        className="cards"
      >
        <Card.Img
          variant="top"
          src={movie.posterUrl}
          alt="errer"
          className="img"
        />
        <Card.Body>
          <Card.Title>
            <Link to={`/movie-details/${movie.id}`}>{movie.title}</Link>
          </Card.Title>
          <Card.Text>{movie.description}</Card.Text>
          <ReactStars
            count={5}
            size={24}
            isHalf={true}
            activeColor="#ffd700"
            edit={false}
            value={movie.rating}
          />
          <Button variant="primary">Go somewhere</Button>
        </Card.Body>
      </Card>
    </div>
  );
};

export default MovieCard;
