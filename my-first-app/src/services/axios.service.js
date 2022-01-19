import axios from "axios";

import mainURL from "../configs/urls";

const axiosService = axios.create({
  baseURL: mainURL,
});

export default axiosService;
