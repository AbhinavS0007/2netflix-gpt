import React, { useEffect, useState } from "react";
import {
  PopularMovies_Options,
  PopularMovies_URL,
} from "../utils.js/constents";
import MovieList from "./MovieList";

const SecondaryContainer = () => {
  const [PopularMovies, setPopularMovies] = useState();

  const GetMovies = async () => {
    try {
      const response = await fetch(PopularMovies_URL, PopularMovies_Options);
      const result = await response.json();
      // console.log(result?.data.movies.edges);
      setPopularMovies(result?.data.movies.edges);
    }
     catch (error) {
      console.error(error);
    }
  };

  useEffect(() => {
    GetMovies();
  }, []);
  if (!PopularMovies) return null;

  return (
    <div className="bg-black">
      <div className="mt-0 md:-mt-80 pl-4 md:pl-12 relative z-20">
        {PopularMovies && <MovieList title={"Popular Movies "} movies={PopularMovies} />}
        {PopularMovies && <MovieList title={"Comming Soon "} movies={PopularMovies} />} 
        {PopularMovies && <MovieList title={"Top on IMDB "} movies={PopularMovies} />} 
        {PopularMovies && <MovieList title={"Made for you"} movies={PopularMovies} />}
        {PopularMovies && <MovieList title={"Hollywood"} movies={PopularMovies} />} 
        {PopularMovies && <MovieList title={"Bollywood"} movies={PopularMovies} />}
        {PopularMovies && <MovieList title={"Comedy Movies"} movies={PopularMovies} />} 
        {PopularMovies && <MovieList title={"Horror "} movies={PopularMovies} />}
        
      </div>
    </div>
  );
};

export default SecondaryContainer;
