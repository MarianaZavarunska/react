import { FC } from "react";
import { useLocation } from "react-router-dom";

import { IMovie } from "../../interfaces/movie.interface";
import { IMG_PATH } from "../../constants/urls";
import "./MovieDetailsPage.css";
import { useAppSelector } from "../../hooks";
import { MovieInfo, MovieReviews, MovieVideo } from "../../Components";

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
      <h2>Reviews</h2>
      <MovieReviews movieId={movie.id} />
      <h2>Trailers</h2>
      <MovieVideo movieId={movie.id} />
    </div>
  );
};

export { MovieDetailsPage };
