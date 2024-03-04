import NavBar from "./Components/NavBar/NavBar";
import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import Filter from "./Components/Filter/Filter";
import { useState } from "react";
import { Route, Routes } from "react-router-dom";
import MovieDetails from "./Components/MovieDetails/MovieDetails";

function App() {
  const [ratingchange, setRetingchange] = useState(1);
  const [searchInput, setSearchInput] = useState("");
  const [newMovies, setNewMovies] = useState({});
  const [movieData, setMovieData] = useState([
    {
      id: Math.random(),
      title: "Conjuring 3",
      posterUrl:
        "https://www.mediacritik.com/wp-content/uploads/2020/07/the-con-696x431.jpg",
      rating: 5,
      description:
        "A chilling story of terror, murder and unknown evil that shocked even experienced real-life paranormal investigators Ed and Lorraine Warren.",
      trailer: "https://www.youtube.com/embed/h9Q4zZS2v1k?si=pOS_WWN4_bRf1V2N",
    },

    {
      id: Math.random(),
      title: "Interstellar",
      posterUrl:
        "https://fr.web.img6.acsta.net/pictures/14/09/24/12/08/158828.jpg",
      rating: 4,
      description:
        "Earth's future has been riddled by disasters, famines, and droughts. There is only one way to ensure mankind's survival: Interstellar travel.",
      trailer: "https://www.youtube.com/embed/zSWdZVtXT7E?si=st-3XjVwoqod_eON",
    },

    {
      id: Math.random(),
      title: "No Time To Die",
      posterUrl:
        "https://i.dailymail.co.uk/1s/2020/10/01/01/33837226-8792377-image-a-45_1601513129403.jpg",
      rating: 4,
      description:
        "Bond has left active service and is enjoying a tranquil life in Jamaica. His peace is short-lived when his old friend Felix Leiter from the CIA turns up asking for help.",
    },
    {
      id: Math.random(),
      title: "The Purge Election Year",
      posterUrl:
        "http://gonewiththetwins.com/new/wp-content/uploads/2016/07/purgeelectionyear.jpg",
      rating: 3,
      description:
        "It's been two years since Leo Barnes (Frank Grillo) stopped himself from a regrettable act of revenge on Purge Night.",
    },
    {
      id: Math.random(),
      title: "The Curse of la llorona",
      posterUrl:
        "https://dci832c741skk.cloudfront.net/assets/files/10206/curse-of-la-llorona-movie-review.800x600.jpg",
      rating: 5,
      description:
        "Ignoring the eerie warning of a troubled mother suspected of child endangerment",
    },
    {
      id: Math.random(),
      title: "To All the Boys",
      posterUrl:
        "https://upload.wikimedia.org/wikipedia/en/d/d0/To_all_the_boys_always_and_forever.jpg",
      rating: 6,
      description:
        "Lara Jean Covey writes letters to all of her past loves, the letters are meant for her eyes only.",
    },
    {
      id: Math.random(),
      title: "spiderman No way Home",
      posterUrl:
        "https://static3.cbrimages.com/wordpress/wp-content/uploads/2021/10/Andrew-Gardfield-in-Spider-Man-No-Way-Home.confirmed.jpg?q=50&fit=crop&w=960&h=500&dpr=1.5",
      rating: 5,
      description:
        "With Spider-Man's identity now revealed, Peter asks Doctor Strange for help. When a spell goes wrong",
    },
    {
      id: Math.random(),
      title: "A Quiet Place Part II",
      posterUrl:
        "https://m.media-amazon.com/images/M/MV5BMTE2ODU4NDEtNmRjNS00OTk1LTg4NmMtNTAzYzVlNzJmYjgzXkEyXkFqcGdeQXVyODk4OTc3MTY@._V1_.jpg",
      rating: 4,
      description:
        "With the newly acquired knowledge of the seemingly invulnerable creatures' weakness, grief-stricken Evelyn Abbott finds herself on her own, with two young teens,",
    },
    {
      id: Math.random(),
      title: "Gravity",
      posterUrl:
        "https://fr.web.img6.acsta.net/pictures/210/232/21023233_20130729173134181.jpg",
      rating: 4,
      description:
        "Dr. Ryan Stone (Sandra Bullock) is a brilliant medical engineer on her first shuttle mission, with veteran astronaut Matt Kowalski (George Clooney) in command of his last flight before retiring.",
    },
    {
      id: Math.random(),
      title: "Get Out",
      posterUrl:
        "https://upload.wikimedia.org/wikipedia/en/a/a3/Get_Out_poster.png",
      rating: 7,
      description:
        "Chris and his girlfriend Rose go upstate to visit her parents for the weekend.",
    },
    {
      id: Math.random(),
      title: "X-MEN",
      posterUrl:
        "https://fr.web.img6.acsta.net/pictures/16/04/13/17/27/399447.jpg",
      rating: 5,
      description:
        "Since the dawn of civilization, he was worshiped as a god. Apocalypse, the first and most powerful mutant from Marvel's X-Men universe,",
    },
    {
      id: Math.random(),
      title: "Black Widow",
      posterUrl:
        "https://lumiere-a.akamaihd.net/v1/images/image_b97b56f3.jpeg?region=0%2C0%2C540%2C810",
      rating: 4,
      description:
        "In Marvel Studios' action-packed spy thriller Black Widow, Natasha Romanoff aka Black WidoNatasha Romanoff aka Black Widow confronts the darker parts of her .",
    },
  ]);
  const handelesave = () => {
    setMovieData([...movieData, newMovies]);
  };

  return (
    <>
      <NavBar
        ratingchange={ratingchange}
        setRetingchange={setRetingchange}
        setSearchInput={setSearchInput}
        newMovies={newMovies}
        setNewMovies={setNewMovies}
        handelesave={handelesave}
      />
      <br />
      <Routes>
        <Route
          path="/"
          element={
            <Filter
              ratingChange={ratingchange}
              searchInput={searchInput}
              movieData={movieData}
            />
          }
        />
        <Route
          path="/movie-details/:movieId"
          element={<MovieDetails movieData={movieData} />}
        />
      </Routes>
    </>
  );
}

export default App;
