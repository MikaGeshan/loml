import React from "react";

function NextTime({ onReset }) {
  return (
    <div className="w-full max-w-md mx-auto p-6 sm:p-8 bg-white rounded-lg shadow-md text-center">
      <img
        src="https://media.tenor.com/mQgsdMciwSQAAAAi/kuromi-crying.gif"
        alt="Kuromi Sad"
        className="mx-auto w-40 h-40 sm:w-48 sm:h-48 object-contain"
      />
      <h1 className="text-xl sm:text-2xl font-bold mt-4 text-black">
        Maybe next time! 😞
      </h1>
      <p className="mt-2 text-sm sm:text-base text-black">
        Maybe next time, we can meet at <strong>somewhere special</strong>!
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

export default NextTime;
