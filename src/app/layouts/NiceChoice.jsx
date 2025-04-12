import React, { useState } from "react";

function NiceChoice({ onNext, onBackToSuccess }) {
  const [location, setLocation] = useState("");

  const handleNext = () => {
    const trimmed = location.trim();
    if (trimmed) {
      onNext?.(trimmed);
    }
  };

  return (
    <div className="w-full max-w-md mx-auto px-6 py-8 bg-white rounded-lg shadow-md flex flex-col items-center text-center">
      <h1 className="text-black text-2xl sm:text-3xl font-semibold mb-2">
        Nice Choice! ✨
      </h1>

      <p className="text-black text-sm sm:text-base mb-4">
        Where would you like to have a chill hangout???
      </p>

      <input
        type="text"
        className="border border-black rounded-lg px-4 py-2 w-full mb-6 text-black"
        placeholder="Let's go to..."
        value={location}
        onChange={(e) => setLocation(e.target.value)}
      />

      <div className="w-full flex flex-col sm:flex-row justify-center gap-4">
        <button
          className={`bg-blue-700 rounded-md text-white text-sm px-6 py-2 transition w-full sm:w-auto ${
            location.trim()
              ? "hover:bg-blue-900"
              : "opacity-50 cursor-not-allowed"
          }`}
          onClick={handleNext}
          disabled={!location.trim()}
        >
          Next
        </button>

        <button
          className="bg-red-700 rounded-md text-white text-sm px-6 py-2 hover:bg-red-900 transition w-full sm:w-auto"
          onClick={onBackToSuccess}
        >
          Cancel
        </button>
      </div>
    </div>
  );
}

export default NiceChoice;
