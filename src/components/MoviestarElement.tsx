import React from "react";
import { MovieStar } from "../movieStars";

type MoviestarElementProps = {
  moviestar: MovieStar;
  viewMoviestar: (moviestar: MovieStar) => void;
};

export const MoviestarElement = ({ moviestar, viewMoviestar }: MoviestarElementProps) => {

  // Create array with moviestar details
  const moviestarDetails = [
    `${moviestar.firstName} ${moviestar.lastName ? ` ${moviestar.lastName}` : ""}`,
    `${moviestar.age} years`,
    `${moviestar.height} m`,
    moviestar.gender
  ].filter(Boolean);

  // Filter out empty values (only booleans with value "true" remain in array) + join remaining values with "/"
const moviestarDetailsString = moviestarDetails.filter(Boolean).join(" / ");

  return (
    <div className="flex items-center justify-between bg-neutral-200 rounded-full shadow">
      <p className="font-bold px-5 py-3">
        {moviestarDetailsString}
      </p>
      <button className="bg-fuchsia-800 hover:bg-black hover:transition-all text-white font-semibold px-8 py-3 rounded-r-full" onClick={() => viewMoviestar(moviestar)}>View</button>
    </div>
  );
};
