import {api} from "./api";

function getMovies() {
  return api.get("/movies");
}

export default getMovies;