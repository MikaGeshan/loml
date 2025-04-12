import React, { useState } from "react";

function Choose({ onNext, onBackToSuccess }) {
  const [selectedOption, setSelectedOption] = useState("");

  const nextChoice = () => {
    if (selectedOption === "chill") {
      onNext();
    } else if (selectedOption === "church") {
      onNext("Church");
    } else if (selectedOption === "afterSchool") {
      onNext("After School", "Afternoon");
    }
  };

  return (
    <div className="w-full max-w-md mx-auto px-6 py-8 bg-white rounded-lg shadow-md flex flex-col items-center text-center">
      <img
        src="https://media.tenor.com/DpJdyKQKgYkAAAAi/cat-jump.gif"
        alt="Cat Happy"
        width={100}
        height={100}
        className="object-contain mb-4"
      />
      <h1 className="text-black text-2xl sm:text-3xl font-semibold mb-2">
        Awesome! 💞
      </h1>
      <p className="text-black text-sm sm:text-base mb-4">
        What type of date do you prefer???
      </p>

      <select
        value={selectedOption}
        onChange={(e) => setSelectedOption(e.target.value)}
        className="border border-black rounded-md p-2 text-black text-sm sm:text-base w-full mb-6"
      >
        <option value="" disabled>
          Choose a type
        </option>
        <option value="chill"> 🛵 Chill Hangout</option>
        <option value="church"> ⛪️ Church Date</option>
        <option value="afterSchool"> 📚 After School</option>
        <option value="other">Other...</option>
      </select>

      <div className="w-full flex flex-col sm:flex-row sm:justify-center items-center gap-4">
        <button
          onClick={nextChoice}
          className="w-full sm:w-auto bg-blue-700 rounded-md text-white text-sm px-6 py-2 hover:bg-blue-900 transition"
          disabled={!selectedOption}
        >
          Next
        </button>
        <button
          onClick={onBackToSuccess}
          className="w-full sm:w-auto bg-red-700 rounded-md text-white text-sm px-6 py-2 hover:bg-red-900 transition"
        >
          Cancel
        </button>
      </div>
    </div>
  );
}

export default Choose;
