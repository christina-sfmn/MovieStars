import React, { useState } from "react";

type MoviestarInputProps = {
  addMoviestar: (
    firstName: string,
    lastName: string,
    age: number,
    height: number,
    gender: string
  ) => void;
};

export const MoviestarInput = ({ addMoviestar }: MoviestarInputProps) => {
  // Variables for input
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [age, setAge] = useState("");
  const [height, setHeight] = useState("");
  const [gender, setGender] = useState("");

  const handleAddMoviestar = () => {
    // Convert age + height into number
    const ageNumber = parseInt(age);
    const heightNumber = parseFloat(height);

    // Error handling
    if (firstName === "" || age === "" || height === "") {
      alert("Bitte Werte in den mit * markierten Feldern eingeben!");
    }
    // Add moviestar
    else { addMoviestar(firstName, lastName, ageNumber, heightNumber, gender);
    }

    // Reset input fields
    setFirstName("");
    setLastName("");
    setAge("");
    setHeight("");
    setGender("");
  };

  return (
    <>
      <h2 className="uppercase text-2xl font-bold text-fuchsia-800 mt-12">
        Add moviestar
      </h2>
      <section className="grid grid-cols-2 gap-5 bg-neutral-200 rounded shadow p-10 my-3">
        <div className="form-section">
          <label htmlFor="firstname" className="font-semibold">
            First name: <span className="highlight">*</span>
          </label>
          <input
            id="firstname"
            type="text"
            placeholder="First name"
            value={firstName}
            onChange={(event) => setFirstName(event.target.value)}
            required
            className="input-field"></input>
        </div>
        <div className="form-section">
          <label htmlFor="lastname" className="font-semibold">
            Last name:
          </label>
          <input
            id="lastname"
            type="text"
            placeholder="Last name"
            value={lastName}
            onChange={(event) => setLastName(event.target.value)}
            className="input-field"></input>
        </div>
        <div className="form-section">
          <label htmlFor="age" className="font-semibold">
            Age: <span className="highlight">*</span>
          </label>
          <input
            id="age"
            type="number"
            placeholder="Age"
            value={age}
            onChange={(event) => setAge(event.target.value)}
            required
            className="input-field"></input>
        </div>
        <div className="form-section">
          <label htmlFor="height" className="font-semibold">
            Height: <span className="highlight">*</span>
          </label>
          <input
            id="height"
            type="number"
            placeholder="Height"
            value={height}
            onChange={(event) => setHeight(event.target.value)}
            required
            className="input-field"></input>
        </div>
        <div className="form-section">
          <label htmlFor="gender" className="font-semibold">
            Gender:
          </label>
          <select
            id="gender"
            name="gender"
            value={gender}
            onChange={(event) => setGender(event.target.value)}
            className="input-field">
            <option value="">-</option>
            <option value="female">female</option>
            <option value="male">male</option>
          </select>
        </div>
      </section>
      <button
        className="bg-fuchsia-800 hover:bg-black hover:transition-all text-white font-semibold rounded-full px-10 py-3 w-fit"
        onClick={handleAddMoviestar}>
        Submit
      </button>
    </>
  );
};
