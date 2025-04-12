import React from "react";

function Rejected({ onReset }) {
  return (
    <div className="w-full max-w-md mx-auto p-6 sm:p-8 bg-white rounded-lg shadow-md text-center">
      <img
        src="https://media1.tenor.com/m/mtravEFg-9wAAAAC/lilo-and-stitch-stitch.gif"
        alt="Stitch Angry"
        className="mx-auto w-40 h-40 sm:w-48 sm:h-48 object-contain"
      />
      <h1 className="text-xl sm:text-2xl font-bold mt-4 text-black">
        You're not my GF!
      </h1>
      <p className="mt-2 text-sm sm:text-base text-black">
        Who the hell are you? I don't know you! Get out of here!
      </p>
      <div className="flex justify-center items-center mt-6">
        <button
          onClick={onReset}
          className="bg-red-700 rounded-md text-white text-sm sm:text-base px-5 py-2 sm:px-6 sm:py-3 hover:bg-red-900 transition"
        >
          Go Back
        </button>
      </div>
    </div>
  );
}

export default Rejected;
