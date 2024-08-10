import React, { useState } from "react";

import { getAuth, signOut } from "firebase/auth";
import { useNavigate } from "react-router-dom";
import { useSelector } from "react-redux";
import MainContainer from "./MainContainer";
import { NETFLIX_LOGO } from "../utils.js/constents";
import SecondaryContainer from "./SecondaryContainer";
import GPTSearch from "./GPTSearch";
import Header from "./Header";

const Browser = () => {
  const navigate = useNavigate();
  const user = useSelector((store) => store.user);

  return (
    <div>
      <Header />
      <MainContainer />
      <SecondaryContainer />
    </div>
  );
};

export default Browser;

// useNowPlayingMovies();
// const [GptSearch, setGptSearch] = useState(false);

// const handleSignout = () => {
//   const auth = getAuth();
//   signOut(auth)
//     .then(() => {
//       navigate("/");
//     })
//     .catch((error) => {
//       console.error("Sign-out error:", error);
//     });
// };

// const HandleGPTSearch = () => {
//   setGptSearch(!GptSearch);
// };

// <div>
//   <div className="w-full h-20 absolute   bg-gradient-to-b from-black flex items-center justify-between px-4 py-1 z-10">
//     <div className="w-44">
//       <img src={NETFLIX_LOGO} alt="homepage logo" />
//     </div>
//     <div className="flex text-xl text-white items-center ">
//       <button
//         className=" text-xl py-2 px-4 bg-red-400 rounded-lg"
//         onClick={HandleGPTSearch}
//       >
//         GPT Search
//       </button>
//       {user && <h1 className="text-xl mx-7">{user.displayName}</h1>}
//       <button className=" text-xl py-2 px-4" onClick={handleSignout}>
//         Sign-Out
//       </button>
//     </div>
//   </div>
