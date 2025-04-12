import React from "react";

function Result({ location, time, onReset }) {
  return (
    <div className="w-full max-w-2xl mx-auto p-6 sm:p-8 bg-white rounded-lg shadow-md text-center">
      <img
        src="https://media1.tenor.com/m/YHuCtEtVdqUAAAAC/kuromi-sanrio.gif"
        alt="Kuromi Happy"
        className="mx-auto w-40 h-40 sm:w-48 sm:h-48 object-contain"
      />
      <h1 className="text-xl sm:text-2xl font-bold mt-4 text-black">
        YAY! AJSDADKAKJDSKJAKSDJ ITS A DATE!!!! 😍
      </h1>
      <p className="mt-2 text-sm sm:text-base text-black">
        I can't wait to see you at <strong>{location}</strong> around {""}
        <strong>{time}</strong>! I'll pick you up
      </p>
      <p className="mt-2 text-sm sm:text-base text-black">
        (Don't forget to screenshoot this and send to your lovely BF!!! 💕)
      </p>
      <div className="flex flex-col sm:flex-row justify-center items-center gap-4 mt-6">
        <button
          onClick={onReset}
          className="w-full sm:w-auto bg-blue-700 rounded-md text-white text-sm px-4 py-2 hover:bg-blue-900 transition"
        >
          Continue! 💕
        </button>
      </div>
    </div>
  );
}
export default Result;
