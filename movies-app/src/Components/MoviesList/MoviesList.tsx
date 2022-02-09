import { FC, useEffect } from "react";

import { useAppSelector, useAppDispatch } from "../../hooks";
import {
  getAllMovies,
  getAllMoviesByGenre,
  getAllMoviesByName,
  getAllMoviesByYear,
  setPage,
} from "../../store/slices";
import MovieListCard from "../MovieListCard/MovieListCard";
import "./MoviesList.css";

const MoviesList: FC = () => {
  let { movies, currentPage, movieName, isNewMovie, totalPage } =
    useAppSelector((state) => state.moviesReducer);

  const { genreId } = useAppSelector((state) => state.genresReducer);

  const { isSwitched } = useAppSelector((state) => state.moviesReducer);
  const dispatch = useAppDispatch();

  useEffect(() => {
    // movieName
    //   ? dispatch(getAllMoviesByName(movieName))
    //   : dispatch(getAllMovies(currentPage));

    if (movieName && currentPage <= totalPage) {
      dispatch(getAllMoviesByName({ movieName, currentPage }));
      return;
    }
    if (isNewMovie === true) {
      dispatch(getAllMoviesByYear(currentPage));
      return;
    }
    if (genreId > 0 && currentPage <= totalPage) {
      dispatch(getAllMoviesByGenre({ genreId, currentPage }));
      return;
    }
    dispatch(getAllMovies(currentPage));
  }, [currentPage, movieName, isNewMovie, genreId]);

  return (
    <div
      className="movies-page"
      style={{ backgroundColor: isSwitched ? "#fff" : "#0448c8" }}
    >
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
