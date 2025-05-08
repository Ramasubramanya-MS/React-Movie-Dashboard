import MovieCard from "../components/moviecard"

function Home() {

    const movies = [
        {id: 1, title: "John Wick", release_date: "2020"},
        {id: 1, title: "Terminator 1", release_date: "1999"},
        {id: 1, title: "Terminator 2", release_date: "2000"},
        {id: 1, title: "Terminator 3", release_date: "2001"},

    ]

    const onSearch = () => {

    }

    return (
        <div className="home">
            <form onSubmit={onSearch} className="search-form">
                <input type="text" 
                placeholder="Search for Movies..." 
                className="search-input"/>

                <button type="submit" className="search-button">Search</button>
            </form>
            <div className="movies-grid">
                {movies.map((movie) => (
                    <MovieCard movie={movie} key={movie.id} />
                ))}
            </div>
        </div>
    );
}

export default Home;