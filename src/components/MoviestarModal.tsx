import React from "react";
import { MovieStar } from "../movieStars";

type MoviestarModalProps = {
moviestar: MovieStar;
closeModal: () => void;
};

export const MoviestarModal = ({ moviestar, closeModal }: MoviestarModalProps) => {
  return (
  <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50">
  <div className="relative bg-white font-semibold px-16 py-20 rounded-lg shadow-lg w-1/2">
    <button className="absolute top-6 right-8 font-bold text-sm text-fuchsia-800 hover:text-black hover:transition-all" onClick={closeModal}>close</button>
      <h2 className="text-xl text-fuchsia-800 mb-2">{moviestar.firstName} {moviestar.lastName}</h2>
      <p>{moviestar.age} years</p>
      <p>{moviestar.height} m</p>
      <p>{moviestar.gender}</p>
  </div>
  </div>
  );
};
