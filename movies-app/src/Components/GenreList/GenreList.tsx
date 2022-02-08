import { FC, useEffect } from "react";

import { useAppDispatch, useAppSelector } from "../../hooks";
import { getAllGenres, setGenreName } from "../../store/slices";

const GenreList: FC = () => {
  const { genres } = useAppSelector((state) => state.genresReducer);
  const dispatch = useAppDispatch();

  useEffect(() => {
    dispatch(getAllGenres());
  }, []);

  return (
    <form>
      <select
        // multiple={true}
        onChange={(e) => dispatch(setGenreName({ genreId: e.target.value }))}
      >
        {genres.map((genre) => (
          <option key={genre.id} value={genre.id}>
            {genre.name}
          </option>
        ))}
      </select>
    </form>
  );
};

export default GenreList;
