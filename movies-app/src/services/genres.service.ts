import axios from "axios";
import { genreURL } from "../constants";
import { IGenre } from "../interfaces/genre.interface";

const genresService = {
    getAll: () => axios.get<IGenre[]>(genreURL),
    
}

export default genresService;