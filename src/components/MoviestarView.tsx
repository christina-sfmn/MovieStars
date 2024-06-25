import React, { useState } from "react";
import { MovieStar } from "../movieStars";
import { MoviestarElement } from "./MoviestarElement";
import { MoviestarInput } from "./MoviestarInput";
import { MoviestarModal } from "./MoviestarModal";

type MoviestarViewProps = {
  moviestars: MovieStar[];
};

export const MoviestarView = ({ moviestars }: MoviestarViewProps) => {
  // Variable for selected movie star
  const [selectedMovieStar, setSelectedMovieStar] = useState<MovieStar | null>(
    null
  ); // set initial state to "null"

  // Handle click on view button
  const handleView = (moviestar: MovieStar) => {
    setSelectedMovieStar(moviestar);
  };

  // Handle click on close button
  const handleClose = () => {
    setSelectedMovieStar(null);
  };

  // Create and set array with initial moviestars
  const [allMoviestars, setAllMoviestars] = useState<MovieStar[]>([
    ...moviestars,
  ]);

  // Function to add new moviestars to array
  const addMoviestar = (
    firstName: string,
    lastName: string,
    age: number,
    height: number,
    gender: string
  ) => {
    const newMoviestar: MovieStar = {
      id: allMoviestars.length + 1,
      firstName,
      lastName,
      age,
      height,
      gender,
    };
    setAllMoviestars([...allMoviestars, newMoviestar]);
  };

  return (
    <div className="flex flex-col gap-2">
      {allMoviestars.map((moviestar) => (
        <MoviestarElement
          key={moviestar.id}
          moviestar={moviestar}
          viewMoviestar={handleView}
        />
      ))}
      <MoviestarInput addMoviestar={addMoviestar} />
      {selectedMovieStar && (
        <MoviestarModal
          moviestar={selectedMovieStar}
          closeModal={handleClose}
        />
      )}
    </div>
  );
};
