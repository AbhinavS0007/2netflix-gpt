import React from "react";

const MovieCards = ({ MovieIMG }) => {
  return (
    <div className="w-44  pr-4">
      <img  src={MovieIMG} alt="movieimg"></img> 
    </div>
  );
};

export default MovieCards;
