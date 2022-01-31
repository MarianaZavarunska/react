import axios from "axios";

import mainURL from "../config/json.url";

const axiosJsonService = axios.create({ baseURL: mainURL });

export default axiosJsonService;
