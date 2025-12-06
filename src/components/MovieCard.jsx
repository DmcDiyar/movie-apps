<<<<<<< HEAD
import React from 'react'

const MovieCard = ({ movie:
  { title, vote_average, poster_path, release_date, original_language }
=======
import React from "react";

export const MovieCard = ({
  movie: { title, vote_average, poster_path, release_date, original_language },
>>>>>>> b6c7eb5bcc9226133a83f588a7c22372bbd0cf57
}) => {
  return (
    <div className="movie-card">
      <img
<<<<<<< HEAD
        src={poster_path ?
          `https://image.tmdb.org/t/p/w500/${poster_path}` : '/no-movie.png'}
        alt={title}
      />

      <div className="mt-4">
        <h3>{title}</h3>

        <div className="content">
          <div className="rating">
            <img src="star.svg" alt="Star Icon" />
            <p>{vote_average ? vote_average.toFixed(1) : 'N/A'}</p>
          </div>

          <span>•</span>
          <p className="lang">{original_language}</p>

          <span>•</span>
          <p className="year">
            {release_date ? release_date.split('-')[0] : 'N/A'}
          </p>
        </div>
      </div>
    </div>
  )
}
export default MovieCard
=======
        src={
          poster_path
            ? `https://image.tmdb.org/t/p/w500${poster_path}`
            : "./no-movie.png"
        }
        alt={title}
      />
      <div className="mt-4">
        <h3>{title}</h3>
        <div className="content">
          <div className="rating">
            <img src="./star.svg" alt="Star Icon" />
            <span>{vote_average ? vote_average.toFixed(1) : "N/A"}</span>
            <span>.</span>
            <p className="lang">{original_language}</p>
            <p className="year">
              {release_date ? release_date.split("-")[0] : "N/A"}
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};
>>>>>>> b6c7eb5bcc9226133a83f588a7c22372bbd0cf57
