import axios from "axios";

import movieURL from "../constants/urls";
import { IMoviesResponse } from "../interfaces/movie.interface";
import { SEARCH_API_BY_NAME, SEARCH_API_BY_GENRE } from "../constants";


const moviesService = {
    getAll: () => axios.get<IMoviesResponse>(movieURL),
    searchMovieByName:(name:string) => axios.get<IMoviesResponse>(SEARCH_API_BY_NAME + name),
    searchMovieByGenre:() => axios.get<IMoviesResponse>(SEARCH_API_BY_GENRE),
}
export default moviesService;