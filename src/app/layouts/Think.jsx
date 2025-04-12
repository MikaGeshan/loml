import React, { useEffect, useState } from "react";

function Think({ onBackToSuccess }) {
  const [secondsLeft, setSecondsLeft] = useState(30);
  const [showButton, setShowButton] = useState(false);

  useEffect(() => {
    const timer = setInterval(() => {
      setSecondsLeft((prev) => {
        if (prev <= 1) {
          clearInterval(timer);
          setShowButton(true);
          return 0;
        }
        return prev - 1;
      });
    }, 1000);

    return () => clearInterval(timer);
  }, []);

  return (
    <div className="w-full min-h-screen flex justify-center items-center px-4">
      <div className="w-full max-w-md sm:max-w-lg bg-white rounded-lg shadow-md p-6 sm:p-8 text-center">
        <img
          src="https://media1.tenor.com/m/B6Qj9Q3t9U8AAAAC/random.gif"
          alt="Stitch Think"
          className="mx-auto w-32 h-32 sm:w-48 sm:h-48 object-contain"
        />
        <h1 className="text-lg sm:text-2xl font-bold mt-4 text-black">
          Think About It First! 🤔
        </h1>
        <p className="mt-2 text-sm sm:text-base text-black leading-relaxed">
          I give you 30 seconds to think about it, just wait for the countdown
          to finish. I'll be waiting for you! 💕
        </p>
        <div className="flex justify-center items-center mt-6">
          {showButton ? (
            <button
              onClick={onBackToSuccess}
              className="bg-red-700 rounded-md text-white text-sm sm:text-base px-5 py-2 sm:px-6 sm:py-3 hover:bg-red-900 transition"
            >
              I'm Done
            </button>
          ) : (
            <span className="text-gray-600 text-sm sm:text-base">
              Please wait... {secondsLeft}s
            </span>
          )}
        </div>
      </div>
    </div>
  );
}

export default Think;
