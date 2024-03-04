import MovieCard from "../MovieCard/MovieCard";
import "./Movielist.css";

const Movielist = ({ filterMovie }) => {
  return (
    <div className="movie-list">
      {filterMovie.map((movie) => (
        <MovieCard key={movie.id} movie={movie} />
      ))}
    </div>
  );
};

export default Movielist;
