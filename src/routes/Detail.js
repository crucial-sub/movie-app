import { useCallback, useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import styles from "./Detail.module.css";


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
        <div className={styles.container}>
            {loading ? (
                <div className={styles.loader}>
                    <span>Loading...</span>
                </div>
            ) : (
                <div className={styles.background} style={{backgroundImage: `url(${movie.background_image_original})`}}>
                    <div className={styles.info}>
                        <div className={styles.detail__box}>
                            <img src={movie.medium_cover_image} alt={movie.title}></img>
                            <div className={styles.details}>
                                <h1>{movie.title_long}</h1>
                                <h3>{movie.genres && movie.genres.join(" / ")}</h3>
                                <h3>{movie.rating} ⭐️</h3>
                                <h3>{movie.runtime}min</h3>
                            </div>
                        </div>
                        <div className={styles.description}>
                            <p>{movie.description_intro}</p>
                        </div>
                    </div>
                </div>
            )}
        </div>
    );
}

export default Detail;