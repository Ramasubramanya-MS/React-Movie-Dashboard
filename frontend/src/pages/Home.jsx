import MovieCard from "../components/moviecard"
import { useState, useEffect, use } from "react";
import "../css/Home.css"
import { getPopularMovies, searchMovies } from "../services/api";

function Home() {
    const [searchQuery, setSearchQuery] = useState("");
    const [movies, setMovies] = useState([]);
    const [error, setError] = useState(null);
    const [loading, setLoading] = useState(true);
    // When there is a change in state you can rerender the components
    useEffect(() => {
        const loadPopularMovies = async () => {
            try {
                const popularMovies = await getPopularMovies();
                setMovies(popularMovies);
            } catch (err) {
                console.log(err)
                setError("Failed to load movies...");
            }
            finally {
                setLoading(false);
            }
        }

        loadPopularMovies();
    }, [])

    const onSearch = (e) => {
        e.preventDefault();
        alert(searchQuery);
        setSearchQuery("");
    }

    return (
        <div className="home">
            <form onSubmit={onSearch} className="search-form">
                <input type="text" 
                placeholder="Search for Movies..." 
                className="search-input"
                value = {searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                />

                <button type="submit" className="search-button">Search</button>
            </form>
            <div className="movies-grid">
                {movies.map(
                    (movie) => (
                    <MovieCard movie={movie} key={movie.imdbID} />
                ))}
            </div>
        </div>
    );
}

export default Home;