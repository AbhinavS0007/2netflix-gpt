import React from "react";
import MovieCards from "./MovieCards";

const MovieList = ({ title, movies }) => {
  //   console.log(title);
  //   console.log(movies[0].node.primaryImage.url);
//   console.log(movies[0].node.certificate.id);
// .node.certificate.id

  return (
    <div className="px-6" >
      <h1 className="text-lg md:text-3xl py-4 text-white">{title}</h1>
      <div className="flex overflow-x-scroll">
        <div className="flex">
        {movies.map((movie) => (
          <MovieCards   movieIMG={movie.node.primaryImage.url} />
        ))}
        </div>
      </div>
    </div>
  );
};

export default MovieList;
