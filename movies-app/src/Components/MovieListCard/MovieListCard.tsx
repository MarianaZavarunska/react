import { FC } from "react";
import { Link } from "react-router-dom";

import { IMG_PATH } from "../../constants";
import { useAppDispatch, useAppSelector } from "../../hooks";
import { IMovie } from "../../interfaces/movie.interface";
// import { setGenresName } from "../../store/slices";
import StarsRating from "../StartsRating/StarsRating";
import "./MovieListCard.css";

const MovieListCard: FC<{ movie: IMovie }> = ({ movie }) => {
  let index = movie.release_date.indexOf("-");
  let movie_data = movie.release_date.substring(0, index);

  // const dispatch = useAppDispatch();
  // const { genres } = useAppSelector((state) => state.genresReducer);

  // dispatch(setGenresName({ ids: movie.genre_ids, genres: genres }));

  return (
    <Link to={`/movies/${movie.id}`} state={movie} className="movie-card">
      <div>
        <img src={IMG_PATH + movie.poster_path} alt={movie.title} />
        <div className="data-container">{movie_data}</div>
      </div>
      <div className="movie-info">
        <div>{movie.title}</div>
        <div>
          <span>IMDb: </span>
          {movie.vote_average}
        </div>
        <StarsRating />
      </div>

      <div className="overview-container">{movie.overview}</div>
    </Link>
  );
};

export default MovieListCard;
