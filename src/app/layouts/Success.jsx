import React from "react";

function Success({ onContinue, onThink, onNextTime }) {
  return (
    <div className="w-full max-w-2xl mx-auto p-6 sm:p-8 bg-white rounded-lg shadow-md text-center">
      <img
        src="https://media.tenor.com/T7u6L2lExRIAAAAj/stitch-love.gif"
        alt="Stitch Love"
        className="mx-auto w-40 h-40 sm:w-48 sm:h-48 object-contain"
      />
      <h1 className="text-xl sm:text-2xl font-bold mt-4 text-black">
        YAY! IT'S YOU!
      </h1>
      <p className="mt-2 text-sm sm:text-base text-black">
        Choose one of the options after this to continue the conversation with
        me. I love you!
      </p>
      <div className="flex flex-col sm:flex-row justify-center items-center gap-4 mt-6">
        <button
          onClick={onContinue}
          className="w-full sm:w-auto bg-blue-700 rounded-md text-white text-sm px-4 py-2 hover:bg-blue-900 transition"
        >
          Yes! 😻
        </button>
        <button
          onClick={onNextTime}
          className="w-full sm:w-auto bg-red-700 rounded-md text-white text-sm px-4 py-2 hover:bg-red-900 transition"
        >
          No, sorry 😞
        </button>
        <button
          onClick={onThink}
          className="w-full sm:w-auto bg-yellow-400 rounded-md text-white text-sm px-4 py-2 hover:bg-yellow-500 transition"
        >
          I'll Think 🤔
        </button>
      </div>
    </div>
  );
}

export default Success;
