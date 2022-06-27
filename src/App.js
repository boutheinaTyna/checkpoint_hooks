import './App.css';
import React, {useState, useEffect} from "react" ;
import MoviesList from "./movieslist/MoviesList";
import NavBar from "./navbar/NavBar"; 
import AddMovie from "./modal/AddMovie";
import { data } from "./data";
function App() {
    const [movies, setMovies] = useState(data);
    const [search, setSearch] = useState("");
    const [rate, setRate] = useState(0);
    // const getMovies = () => {
    //     setMovies(data);
    // };
    // useEffect(getMovies(), [movies]);
    return (
        <div className="App">
            <NavBar setSearch={setSearch} setRate={setRate} rate={rate} />
            <section>
                <AddMovie movies={movies} setMovies={setMovies} />
                <MoviesList movies={movies} search={search} rate={rate} />
            </section>
        </div>
    );
}

export default App;
 