import { FC, useEffect } from "react";

import { useAppDispatch, useAppSelector } from "../../hooks";
import { getAllGenres, setGenreId } from "../../store/slices";
import "./GenreList.css";

const GenreList: FC = () => {
  const { genres } = useAppSelector((state) => state.genresReducer);
  const { isSwitched } = useAppSelector((state) => state.moviesReducer);
  const dispatch = useAppDispatch();

  useEffect(() => {
    dispatch(getAllGenres());
  }, []);

  return (
    <form className="dropdown-container">
      <select
        // multiple={true}
        style={{ backgroundColor: isSwitched ? "darkblue" : "#05020D" }}
        onChange={(e) => dispatch(setGenreId({ genreId: e.target.value }))}
      >
        <option value={0}>All Movies</option>
        {genres.map((genre) => (
          <option key={genre.id} value={genre.id}>
            {genre.name}
          </option>
        ))}
      </select>
    </form>
  );
};

export { GenreList };
