import React, { useState } from "react";
import { NETFLIX_LOGO } from "../utils.js/constents";
import { useSelector } from "react-redux";
import { getAuth, signOut } from "firebase/auth";
import { useNavigate } from "react-router-dom";
import { Link } from "react-router-dom";

const Header = () => {
  // const [GptSearch, setGptSearch] = useState(false);
  const navigate = useNavigate();
  const user = useSelector((store) => store.user);
  // if (!user) {
  //   return null;
  // }

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
  const HandleGPTSearch = () => {
    // setGptSearch(!GptSearch);
    navigate("/browser/gpt")
  };

  return (
    <div className="absolute w-screen px-8 py-2 flex justify-between bg-gradient-to-b from-black z-10">
      <div>
        <img className="w-44 " src={NETFLIX_LOGO} alt="Logo" />
      </div>
      {user && (
        <div className="flex space-x-{size} ">
          <div className="text-white text-2xl justify-between">
            <ul className=" flex py-4 ">
              <li>
                {/* <h1 className="px-6">Home</h1> */}
                <Link to="/browser" className="px-6" >Home</Link>
              </li>
              {/* <li>
                <h1 className="px-6">Home</h1>
              </li>
              <li>
                <h1 className="px-6">Home</h1>
              </li>
              <li>
                <h1 className="px-6">Home</h1>
              </li> */}
            </ul>
          </div>
          <div className="items-center justify-between">
            <div className="flex text-xl text-white items-center ">
              <button
                className=" text-xl py-3 px-4 bg-red-400 rounded-lg"
                onClick={HandleGPTSearch}
              >
                GPT Search
              </button>
              <h1 className="text-3xl px-7">{user.displayName}</h1>
              <button className=" text-2xl py-4 px-4" onClick={handleSignout}>
                Sign-Out
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default Header;
