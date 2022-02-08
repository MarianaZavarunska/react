import axios from "axios";

import movieURL from "../constants/urls";
import { IMoviesResponse } from "../interfaces/movie.interface";
import {
  SEARCH_API_BY_NAME,
  SEARCH_API_BY_GENRE,
  newMoviesURL,
} from "../constants";

// let url:URL;
  // url = new URL(SEARCH_API_BY_NAME);
    // url.searchParams.set('page', 3);
    // url.searchParams.set('query', name);
    // url.toString();

const moviesService = {
  getAll: (page: number) => axios.get<IMoviesResponse>(movieURL + page),
  getAllByYear: (page: number) =>
    axios.get<IMoviesResponse>(newMoviesURL + page),
  searchMovieByName: (name: string, currentPage: number) =>
    axios.get<IMoviesResponse>(
      SEARCH_API_BY_NAME + name + "&page=" + currentPage
    ),

  searchMovieByGenre: (genreId: number) =>
    axios.get<IMoviesResponse>(SEARCH_API_BY_GENRE + genreId),
};
export default moviesService;
