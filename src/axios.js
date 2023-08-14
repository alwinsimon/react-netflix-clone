import axios from "axios";

import { TMDB_BASE_URL } from "./constants/constants";

export const axiosInstanceForMovieData = axios.create({
    baseURL: TMDB_BASE_URL
});