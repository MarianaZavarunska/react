import axios from "axios";

import movieURL from "../constants/urls";
import { IMoviesResponse } from "../interfaces/movie.interface";
import {
  SEARCH_API_BY_NAME,
  SEARCH_API_BY_GENRE,
  newMoviesURL,
} from "../constants";

const moviesService = {
  getAll: (page: number) => axios.get<IMoviesResponse>(movieURL + page),
  getAllByYear: (page: number) =>
    axios.get<IMoviesResponse>(newMoviesURL + page),
  searchMovieByName: (name: string) =>
    axios.get<IMoviesResponse>(SEARCH_API_BY_NAME + name),

  searchMovieByGenre: (genreId: number) =>
    axios.get<IMoviesResponse>(SEARCH_API_BY_GENRE + genreId),
};
export default moviesService;
