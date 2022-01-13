import PropTypes from "prop-types";
import { Link } from "react-router-dom";


function Movie({coverImg, title, genres, id}) {
  return <div>
    <img src={coverImg} alt={title} />
    <h2>
      <Link to={`/movie/${id}`}>{title}</Link>
    </h2>
    <ul>
      {genres && genres.map((g) => (
        <li key={g}>{g}</li>
      ))}
    </ul>
  </div>
}

/*
{genres ? (
  <ul>
    {genres && genres.map((g) => (
      <li key={g}>{g}</li>
    ))}
  </ul>
) : ( null )}

    {genres ? (
      <ul>
        {genres.map((g) => (
          <li key={g}>{g}</li>
        ))}
      </ul>
    ) : ( null )}
*/


Movie.propTypes = {
  id: PropTypes.number.isRequired,
  coverImg: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
  genres: PropTypes.arrayOf(PropTypes.string),
}

export default Movie;