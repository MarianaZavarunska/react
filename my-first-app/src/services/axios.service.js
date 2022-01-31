import axios from "axios";
import baseURL from "../config/car.url";

const axiosService = axios.create({ baseURL });

export default axiosService;
