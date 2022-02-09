import { FC } from "react";
import { useAppSelector } from "../../hooks";

import { IMovie } from "../../interfaces";
import MovieImages from "../MovieImages/MovieImages";
import "./MovieInfo.css";

const MovieInfo: FC<{ movie: IMovie; genresName: string[] }> = ({
  movie,
  genresName,
}) => {
  const { isSwitched } = useAppSelector((state) => state.moviesReducer);

  return (
    <div
      className="movie-details-content"
      style={{ color: isSwitched ? "#05020D" : "#fff" }}
    >
      <div>{movie.title}</div>

      <div>Original Title: {movie.original_title}</div>

      <div
        className="genre-movie-container"
        style={{ color: isSwitched ? "#fff" : "#05020D" }}
      >
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

      <MovieImages movieId={movie.id} />
    </div>
  );
};

export default MovieInfo;
