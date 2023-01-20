import "./App.css";
import { useEffect, useState } from "react";

function App() {
  const [popular, setPopular] = useState([]);

  const fetchPopular = async () => {
    const data = await fetch(
      "https://api.themoviedb.org/3/movie/popular?api_key=8a60434cec2287e948191fda92048912&language=en-US&page=1"
    );
    const movies = await data.json();
    console.log(movies);
    setPopular(movies.results);
  };

  useEffect(() => {
    fetchPopular();
  }, []);

  return (
    <div className="App">
      <h1>Hello</h1>
    </div>
  );
}

export default App;
