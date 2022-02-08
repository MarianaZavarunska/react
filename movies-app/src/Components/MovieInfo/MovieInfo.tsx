import { FC } from "react";

import { IMovie } from "../../interfaces/movie.interface";
import MovieImages from "../MovieImages/MovieImages";
import "./MovieInfo.css";

const MovieInfo: FC<{ movie: IMovie }> = ({ movie }) => {
  return (
    <div className="movie-details-content">
      <div>{movie.title}</div>
      <MovieImages movieId={movie.id} />
      <div>Original Title: {movie.original_title}</div>
      <div>Language: {movie.original_language}</div>
      <div>Date: {movie.release_date}</div>
      <div>Overview: {movie.overview}</div>
    </div>
  );
};

export default MovieInfo;
