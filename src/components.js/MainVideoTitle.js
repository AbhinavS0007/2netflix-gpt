import React, { useEffect, useState } from "react";
import { AdvanceMovieAPI_options } from "../utils.js/constents";

const MainVideoTitle = (props) => {
  const [movieDetails, setMovieDetails] = useState(null);
  const selectedMovieIMDB_ID = props.imdb_id;

  const AdvanceMovieAPI_url = selectedMovieIMDB_ID
    ? `https://advanced-movie-search.p.rapidapi.com/movies/getdetails?movie_id=${selectedMovieIMDB_ID}`
    : null;

  const getMovieDetails = async () => {
    if (!AdvanceMovieAPI_url) return;

    try {
      const response = await fetch(AdvanceMovieAPI_url, AdvanceMovieAPI_options);
      if (!response.ok) {
        throw new Error("Network response was not ok");
      }
      const result = await response.json();
      setMovieDetails(result);
    } catch (error) {
      console.error("Failed to fetch movie details:", error);
    }
  };

  useEffect(() => {
    if (AdvanceMovieAPI_url) {
      getMovieDetails();
    }
  }, [AdvanceMovieAPI_url]);

  if (!movieDetails) {
    return <div>Loading...</div>;
  }


  return (
    <div>
      <div className="px-12 pt-52 w-screen aspect-video absolute text-white bg-gradient-to-r from-black ">
        <h1 className="text-6xl font-bold">{movieDetails.title}</h1>
        <div className="w-3/12 m-4">
          <p className="text-lg">{movieDetails.overview}</p>
        </div>
        <div>
          <button className="w-32 h-12 bg-slate-600 m-4 rounded-xl text-white bg-opacity-50">
            Play
          </button>
          <button className="w-32 h-12 bg-slate-600 m-4 bg-opacity-50 rounded-xl text-white">
            More Info
          </button>
        </div>
      </div>
    </div>
  );
};

export default MainVideoTitle;
