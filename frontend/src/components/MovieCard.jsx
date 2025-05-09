import "../css/MovieCard.css"

function MovieCard({movie}){

    function onFavoriteClick() {
        alert("clicked")
    }

    return <div className="movie-card">
        <div className="movie-poster">
            <img src={movie.url} alt={movie.title}/>
            <div className="movie-overlay">
                <button className="favorite-btn" onClick={onFavoriteClick}>❤️</button>
            </div>
        </div>
        <div className="movie-info">
            <h5>{movie.title}</h5>
            <p>{movie.releaseDate}</p>
        </div>
    </div>
}

export default MovieCard;