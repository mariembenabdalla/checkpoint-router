import Movielist from "../Movielist/Movielist";

const Filter = ({ ratingChange, searchInput, movieData }) => {
  var filterMovie = movieData.filter(
    (movie) =>
      movie.title &&
      movie.title.toLowerCase().includes(searchInput.toLowerCase()) &&
      movie.rating >= ratingChange
  );

  return (
    <div>
      <Movielist filterMovie={filterMovie} />
    </div>
  );
};

export default Filter;
