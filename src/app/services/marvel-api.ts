import axios from "axios";
import { environment } from "src/environments/environment";

const marvelApi = axios.create({
    baseURL: environment.MARVEL_API,
});

export const getCharacters = () => {
  return marvelApi.get(`/characters?limit=10&apikey=${environment.API_KEY}`).then(({ data }) => data);
}

export default marvelApi;