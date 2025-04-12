import React, { useState } from "react";

function Time({ location, onNext }) {
  const [selectedTime, setSelectedTime] = useState("");

  const nextResult = () => {
    if (selectedTime) {
      onNext(selectedTime);
    }
  };

  return (
    <div className="w-full max-w-md mx-auto px-4 sm:px-6 py-8 bg-white rounded-lg shadow-md flex flex-col items-center text-center">
      <img
        src="https://media1.tenor.com/m/yz_7VcX0WjYAAAAd/cat-changing-the-clock-changing-the-time.gif"
        alt="Cat Think"
        className="object-contain mb-4 w-24 h-24 sm:w-28 sm:h-28"
      />

      <h1 className="text-black text-2xl sm:text-3xl font-semibold mb-2">
        Time is money! 💰
      </h1>

      <p className="text-black text-sm sm:text-base mb-6">
        What time should we meet at{" "}
        <span className="font-medium">{location}</span>?
      </p>

      <select
        value={selectedTime}
        onChange={(e) => setSelectedTime(e.target.value)}
        className="border border-black rounded-md p-2 text-black text-sm sm:text-base w-full mb-6"
      >
        <option value="" disabled>
          Select a time
        </option>
        <option value="morning">🌅 Morning</option>
        <option value="noon">🌞 Noon</option>
        <option value="afternoon">🌇 Afternoon</option>
      </select>

      <div className="w-full flex flex-col sm:flex-row justify-center items-center gap-4">
        <button
          onClick={nextResult}
          disabled={!selectedTime}
          className={`w-full sm:w-auto rounded-md text-white text-sm sm:text-base px-6 py-2 transition ${
            selectedTime
              ? "bg-blue-700 hover:bg-blue-900"
              : "bg-blue-400 cursor-not-allowed"
          }`}
        >
          Next
        </button>
      </div>
    </div>
  );
}

export default Time;
