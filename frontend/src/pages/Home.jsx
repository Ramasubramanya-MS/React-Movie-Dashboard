import MovieCard from "../components/moviecard"
import { useState } from "react";

function Home() {
    const [searchQuery, setSearchQuery] = useState("");
    // When there is a change in state you can rerender the components
    const movies = [
        {id: 1, title: "John Wick", release_date: "2020"},
        {id: 1, title: "Terminator 1", release_date: "1999"},
        {id: 1, title: "Terminator 2", release_date: "2000"},
        {id: 1, title: "Terminator 3", release_date: "2001"},

    ]

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
                    (movie) => 
                    movie.title.toLowerCase().startsWith(searchQuery) && (<MovieCard movie={movie} key={movie.id} />
                ))}
            </div>
        </div>
    );
}

export default Home;