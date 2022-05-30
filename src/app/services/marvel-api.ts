import axios from "axios";
import { environment } from "src/environments/environment";

const marvelApi = axios.create({
    baseURL: environment.MARVEL_API,
});

export default marvelApi;