import { useDispatch } from "react-redux";
import { addNowPlayingMovies } from "../utils.js/movieSlice";
import { API_Options, IMDB_TOP_100 } from "../utils.js/constents";
import { PopularMovies_Options,PopularMovies_URL } from "../utils.js/constents";
import { useEffect } from "react";

const useNowPlayingMovies = () => {

  const GetNowPlayingMovies = async () => {
    try {
      const response = await fetch(PopularMovies_Options, PopularMovies_URL);
      const result = await response.json();
      console.log(result);
    } catch (error) {
      console.error(error);
    }
  };
  useEffect(() => {
    GetNowPlayingMovies();
  }, []);
};

export default useNowPlayingMovies;
