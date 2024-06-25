// Type for moviestars
export type MovieStar = {
  id: number;
  firstName: string;
  lastName?: string; // ? to define property as optional
  age: number;
  height: number;
  gender?: string; // ? to define property as optional
};

// Array with moviestars
export const movieStars: MovieStar[] = [
  {
    id: 1,
    firstName: "Peter",
    lastName: "Pan",
    age: 12,
    height: 1.78,
    gender: "male",
  },
  {
    id: 2,
    firstName: "Spiderman",
    age: 22,
    height: 1.85,
    gender: "male",
  },
  {
    id: 3,
    firstName: "Badman",
    age: 34,
    height: 1.87,
    gender: "male",
  },
  {
    id: 4,
    firstName: "Yoda",
    age: 110,
    height: 1.1,
  },
];
