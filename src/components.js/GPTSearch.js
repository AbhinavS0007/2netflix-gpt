import React, { useState } from "react";
import Header from "./Header";
import Search_Result from "./Search_Result";

const GPTSearch = () => {
  const Search_Value = React.useRef(null);
  const [Movie_List , setMovie_List] = useState([])

  const { GoogleGenerativeAI } = require("@google/generative-ai");
  const genAI = new GoogleGenerativeAI(
    "AIzaSyA6Lq4YPQMTnQ0IR8TNl2SKb7fsEmFYSAw"
  );
  const model = genAI.getGenerativeModel({ model: "gemini-1.5-flash" });

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
        const text = await response.text();
        const Movies_list = text.split(",");
        // console.log(text);
         setMovie_List(Movies_list);
      } catch (error) {
        console.error("Error fetching content:", error);
      }
    } else {
      console.log("Please enter a value");
    }
  };
  // if(!Movie_List)return null;
  console.log(Movie_List)


  return (
    <div>
      <Header />
      <div className="h-screen w-screen bg-[#B9BAA3] justify-center grid">
        <div className="h-16 w-auto mt-40 flex">
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
      </div>
      <div>
        <Search_Result result={Movie_List} />
      </div>
    </div>
  );
};

export default GPTSearch;
