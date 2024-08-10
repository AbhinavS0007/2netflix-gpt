import React from "react";

const MovieCards = (props) => {
//   console.log(props.movieIMG);
  return (
    <div className="w-48  pr-4">
      <img  src={props.movieIMG} alt="movieimg"></img>
    </div>
  );
};

export default MovieCards;
