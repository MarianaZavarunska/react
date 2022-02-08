import { FC } from "react";

import { IMovie } from "../../interfaces/movie.interface";
import MovieImages from "../MovieImages/MovieImages";
import "./MovieInfo.css";

const MovieInfo: FC<{ movie: IMovie; genresName: string[] }> = ({
  movie,
  genresName,
}) => {
  return (
    <div className="movie-details-content">
      <div>{movie.title}</div>
      <MovieImages movieId={movie.id} />
      <div>Original Title: {movie.original_title}</div>
      <div className="genre-movie-container">
        {genresName &&
          genresName.map((genre, index) => <span key={index}>{genre}</span>)}
      </div>
      <div>
        Language: <span>{movie.original_language}</span>
      </div>
      <div>
        Date: <span>{movie.release_date}</span>
      </div>
      <div>
        Overview: <span>{movie.overview}</span>
      </div>
    </div>
  );
};

export default MovieInfo;
