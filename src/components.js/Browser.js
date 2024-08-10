import React from "react";

import { getAuth, signOut } from "firebase/auth";
import { useNavigate } from "react-router-dom";
import { useSelector } from "react-redux";
import MainContainer from "./MainContainer";
import { NETFLIX_LOGO } from "../utils.js/constents";
import SecondaryContainer from "./SecondaryContainer";

const Browser = () => {
  // useNowPlayingMovies();

  const navigate = useNavigate();
  const user = useSelector((store) => store.user);

  const handleSignout = () => {
    const auth = getAuth();
    signOut(auth)
      .then(() => {
        navigate("/");
      })
      .catch((error) => {
        console.error("Sign-out error:", error);
      });
  };

  return (
    <div>
      <div className="w-full h-20 absolute   bg-gradient-to-b from-black flex items-center justify-between px-4 py-1 z-10">
        <div className="w-44">
          <img src={NETFLIX_LOGO} alt="homepage logo" />
        </div>
        <div className="flex txt-xl text-white items-center ">
          {user && <h1 className="text-xl mx-7">{user.displayName}</h1>}
          <button className=" text-xl py-2 px-4" onClick={handleSignout}>
            Sign-Out
          </button>
        </div>
      </div>
      <MainContainer />
      <SecondaryContainer />
    </div>
  );
};

export default Browser;
