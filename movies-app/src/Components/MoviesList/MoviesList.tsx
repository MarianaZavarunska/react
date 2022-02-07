import { FC, useEffect } from "react";

import { useAppSelector, useAppDispatch } from "../../hooks";
import {
  getAllMovies,
  getAllMoviesByName,
  getAllMoviesByYear,
  setPage,
} from "../../store/slices";
import MovieListCard from "../MovieListCard/MovieListCard";
import "./MoviesList.css";

const MoviesList: FC = () => {
  const { movies, currentPage, movieName, isNewMovie } = useAppSelector(
    (state) => state.moviesReducer
  );
  const dispatch = useAppDispatch();

  useEffect(() => {
    // movieName
    //   ? dispatch(getAllMoviesByName(movieName))
    //   : dispatch(getAllMovies(currentPage));
    if (movieName) {
      dispatch(getAllMoviesByName(movieName));
    } else if (isNewMovie === true) {
      dispatch(getAllMoviesByYear(currentPage));
    } else {
      dispatch(getAllMovies(currentPage));
    }
  }, [currentPage, movieName, isNewMovie]);

  return (
    <div className="movies-page">
      <div className="nav-btns">
        <button onClick={() => dispatch(setPage({ action: -1 }))}>Prev</button>
        <button onClick={() => dispatch(setPage({ action: 1 }))}>Next</button>
      </div>
      <div className="movies-container">
        {movies.map((movie) => (
          <MovieListCard key={movie.id} movie={movie} />
        ))}
      </div>
    </div>
  );
};

export default MoviesList;
