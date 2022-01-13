import { useCallback, useEffect, useState } from "react";
import { useParams } from "react-router-dom";


function Detail() {
    const [loading, setLoading] = useState(true); 
    const [movie, setMovie] = useState([]);
    const {id} = useParams();
    const getMovie = useCallback(async () => {
        const json = await(
            await fetch(`https://yts.mx/api/v2/movie_details.json?movie_id=${id}`)
        ).json();
        setLoading(false);
        setMovie(json.data.movie);
    }, [id]);
    useEffect(() => {
        getMovie();
    }, [getMovie]);
    return (
        <div>
            {loading ? (
                <h1>Loading...</h1>
            ) : (
                <div>
                    <img src={movie.medium_cover_image} alt={movie.title}></img>
                    <h1>{movie.title_long}</h1>
                    <h4>Rating : {movie.rating}</h4>
                    <h4>Runtime : {movie.runtime}min</h4>
                    <p>{movie.description_intro}</p>
                </div>
            )}
        </div>
    );
}

export default Detail;