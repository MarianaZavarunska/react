import { FC } from "react";
import { useLocation } from "react-router-dom";

import { IMovie } from "../../interfaces/movie.interface";
import { IMG_PATH } from "../../constants/urls";
import MovieInfo from "../../Components/MovieInfo/MovieInfo";
import "./MovieDetailsPage.css";
import MovieReviews from "../../Components/MovieReviews/MovieReviews";
import { useAppSelector } from "../../hooks";

interface IStateResponse {
  movie: IMovie;
  genresName: string[];
}

const MovieDetailsPage: FC = () => {
  const location = useLocation();
  const { movie, genresName } = location.state as IStateResponse;

  const { isSwitched } = useAppSelector((state) => state.moviesReducer);

  return (
    <div
      className="movie-details-container"
      style={{
        backgroundColor: isSwitched ? "#fff" : "#0448c8",
      }}
    >
      <div className="movie-info-wrapper">
        <div className="poster-container">
          {movie.poster_path !== null && (
            <img src={IMG_PATH + movie.poster_path} alt={movie.title} />
          )}
        </div>
        <MovieInfo movie={movie} genresName={genresName} />
      </div>
      <MovieReviews movieId={movie.id} />
    </div>
  );
};

export default MovieDetailsPage;
