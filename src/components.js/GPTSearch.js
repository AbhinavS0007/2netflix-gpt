import React, { useState } from "react";
import Header from "./Header";
import { Search_Options } from "../utils.js/constents";
import SearchMovieList from "./SearchMovieList";

const GPTSearch = () => {
  const Search_Value = React.useRef(null);
  const [SuggestedMovies, setSuggestedMovies] = useState([]);
  const { GoogleGenerativeAI } = require("@google/generative-ai");
  const genAI = new GoogleGenerativeAI(
    "AIzaSyDjkua3rZ2hucqD20J6AVInI6YyNc5IHeY"
  );
  const model = genAI.getGenerativeModel({ model: "gemini-1.5-flash" });

  const gptSearchfun = async (movie) => {
    const Search_url =
      "https://online-movie-database.p.rapidapi.com/auto-complete?q=" + movie;
    try {
      const response = await fetch(Search_url, Search_Options);
      const result = await response.json();
      // console.log(result.d[0])
      return result.d[0];
    } catch (error) {
      console.error("this is search result error");
    }
  };

  const Handle_GPT_Search_Button = async (e) => {
    e.preventDefault();
    const Search_Curr_Value = Search_Value.current
      ? Search_Value.current.value
      : "";
    if (Search_Curr_Value) {
      try {
        const prompt =
          "Act as a Movie Recommendation system and suggest some movies for the query : " +
          Search_Curr_Value +
          ". only give me names of 5 movies, comma seperated like the example result given ahead. Example Result: ";

        const result = await model.generateContent(prompt);
        const response = await result.response;
        const Movies_list_Array = await response
          .text()
          .split(",")
          .map((movie) => movie.trim())
          .filter((movie) => movie);
        console.log(Movies_list_Array);
        const promiseArray = Movies_list_Array.map((movie) =>
          gptSearchfun(movie)
        );
        const fullMovies = await Promise.all(promiseArray);
        const allMovies = fullMovies.flat();
        setSuggestedMovies(allMovies);
      } catch (error) {
        console.error("Error fetching content:", error);
      }
    } else {
      console.log("Please enter a value");
    }
  };
  if (!SuggestedMovies) return null;


  return (
    <div>
      <Header />
      <div className="h-screen w-screen bg-[#B9BAA3] grid">
        <div className="h-16 w-auto mt-40 flex justify-center ">
          <input
            ref={Search_Value}
            className="p-4 h-full w-96 text-black rounded-lg"
            type="text"
            placeholder="Search for content..."
          />
          <button
            className="p-4 h-full text-black bg-red-700 rounded-lg"
            onClick={Handle_GPT_Search_Button}
          >
            Search
          </button>
        </div>
        <div className="w-44 h-96 relative flex  mx-4 " > 
      {SuggestedMovies.length > 0 ? (<img className="m-4 " src={SuggestedMovies[0].i.imageUrl}></img>) : ("")}
      {SuggestedMovies.length > 0 ? (<img className="m-4" src={SuggestedMovies[1].i.imageUrl}></img>) : ("")}
      {SuggestedMovies.length > 0 ? (<img className="m-4" src={SuggestedMovies[2].i.imageUrl}></img>) : ("")}
      {SuggestedMovies.length > 0 ? (<img className="m-4" src={SuggestedMovies[3].i.imageUrl}></img>) : ("")}
      {SuggestedMovies.length > 0 ? (<img className="m-4" src={SuggestedMovies[4].i.imageUrl}></img>) : ("")}

      </div>
      </div>
      
    </div>
  );
};

export default GPTSearch;
