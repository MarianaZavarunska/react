import { FC, useEffect } from "react";
import { useForm } from "react-hook-form";

import { useAppDispatch, useAppSelector } from "../../hooks";
import { getAllGenres } from "../../store/slices/genres.slice";
import DropdownList from "../DropdownList/DropdownList";

const GenreList: FC = () => {
  const { genres } = useAppSelector((state) => state.genresReducer);
  const dispatch = useAppDispatch();

  useEffect(() => {
    dispatch(getAllGenres());
  }, []);

  return (
    <select>
      {genres.map((genre) => (
        <DropdownList key={genre.id} genre={genre.name} />
      ))}
    </select>
  );
};

export default GenreList;
