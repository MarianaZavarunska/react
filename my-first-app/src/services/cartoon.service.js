import { urls } from "../configs/urls";
import axiosService from "./axios.service";

const cartoonService = {
  getAllEpisodes: (page) =>
    axiosService
      .get(`${urls.episodes}?page=${page}`)
      .then((response) => response.data),
  getAllCharacters: (charactersId) =>
    axiosService
      .get(`${urls.character}/[${charactersId}]`)
      .then((response) => response.data),
};

export default cartoonService;
