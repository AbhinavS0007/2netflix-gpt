import React, { useEffect, useState } from "react";
import {
  RecentlyAddedMovies_Options,
  RecentlyAddedMovies,
} from "../utils.js/constents";
import MainVideoTitle from "./MainVideoTitle";
import BackgroundVideo from "./BackgroundVideo";

const MainContainer = () => {
  const [moviesID, setMoviesID] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  function getRandomArbitrary(min, max) {
    return Math.floor(Math.random() * (max - min + 1)) + min;
  }

  const getNowPlayingMovies = async () => {
    try {
      const response = await fetch(
        RecentlyAddedMovies,
        RecentlyAddedMovies_Options
      );
      if (!response.ok) {
        throw new Error("Network response was not ok");
      }
      const result = await response.json();
      // console.log(result)
      setMoviesID(result.movie_results || []);
    } catch (error) {
      console.error("Failed to fetch movies:", error);
      setError(error.message);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    getNowPlayingMovies();
  }, []);

  if (loading) {
    return <div>Loading...</div>;
  }

  if (error) {
    return <div>Error: {error}</div>;
  }

  if (moviesID.length === 0) {
    return <div>No movies found.</div>;
  }

  const randomIndex = getRandomArbitrary(0, moviesID.length - 1);
  const selectedMovie = moviesID[2]?.imdb_id;
  // console.log(selectedMovie)
  // setMoviesID("tt1630029");

  return (
    <div>
      {selectedMovie ? (
        <>
          <MainVideoTitle imdb_id={selectedMovie} />
          <BackgroundVideo bg_imdb_id={selectedMovie} />
        </>
      ) : (
        <div>No movie selected.</div>
      )}
    </div>
  );
};

export default MainContainer;
