import "./App.css";
import { useEffect, useState } from "react";
import Movie from "./Movie";
import Filter from "./Filter";

function App() {
  const [popular, setPopular] = useState([]);
  const [filtered, setFiltered] = useState([]);
  const [activeGenre, setActiveGenre] = useState(0);

  const fetchPopular = async () => {
    const data = await fetch(
      "https://api.themoviedb.org/3/movie/popular?api_key=8a60434cec2287e948191fda92048912&language=en-US&page=1"
    );
    const movies = await data.json();
    setPopular(movies.results);
    setFiltered(movies.results);
  };

  useEffect(() => {
    fetchPopular();
  }, []);

  return (
    <div className="App">
      <Filter
        popular={popular}
        setFiltered={setFiltered}
        activeGenre={activeGenre}
        setActiveGenre={setActiveGenre}
      />
      <div className="popular-movies">
        {popular.map((movie) => {
          return <Movie key={movie.id} movie={movie} />;
        })}
      </div>
    </div>
  );
}

export default App;
