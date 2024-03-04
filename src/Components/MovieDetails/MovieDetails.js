import React from "react";
import { useParams } from "react-router-dom";

const MovieDetails = ({ movieData }) => {
  const { movieId } = useParams();
  const parsedMovieId = parseFloat(movieId);

  const findsMovie = movieData.find((movie) => movie.id === parsedMovieId);
  return (
    <div
      style={{
        display: "flex",
        alignItems: "center",
        flexDirection: "column",
      }}
    >
      <h1>{findsMovie.title}</h1>
      <img
        src={findsMovie.posterUrl}
        alt=""
        style={{
          height: "280px",
        }}
      />
      <br />
      <p style={{ width: "500px" }}>{findsMovie.description} </p>
      <p> rating :{findsMovie.rating}</p>
      <iframe
        width="560"
        height="315"
        src={findsMovie.trailer}
        title="YouTube video player"
        frameborder="0"
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
        allowfullscreen
      ></iframe>
    </div>
  );
};

export default MovieDetails;
