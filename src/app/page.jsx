"use client";

import { useState } from "react";
import Success from "./layouts/Success";
import Rejected from "./layouts/Rejected";
import Choose from "./layouts/Choose";
import NiceChoice from "./layouts/NiceChoice";
import Time from "./layouts/Time";
import Result from "./layouts/Result";
import Think from "./layouts/Think";
import NextTime from "./layouts/NextTime";

export default function Page() {
  const [name, setName] = useState("");
  const [status, setStatus] = useState(null);
  const [step, setStep] = useState("start");
  const [location, setLocation] = useState("");
  const [time, setTime] = useState("");

  const onSubmit = (e) => {
    e.preventDefault();
    if (name.trim().toLowerCase() === "marlice") {
      setStatus("success");
      setStep("success");
    } else {
      setStatus("rejected");
    }
  };

  const goBack = () => {
    setName("");
    setStatus(null);
    setStep("start");
    setLocation("");
  };

  const goBackToSuccess = () => {
    setStep("success");
  };

  return (
    <div className="w-full min-h-screen bg-blue-200 flex justify-center items-center p-4">
      {status === "rejected" && <Rejected onReset={goBack} />}

      {status === "success" && step === "success" && (
        <Success
          onReset={goBack}
          onContinue={() => setStep("choose")}
          onNextTime={() => setStep("nextTime")}
          onThink={() => setStep("think")}
        />
      )}

      {status === "success" && step === "nextTime" && (
        <NextTime onReset={goBack} />
      )}

      {status === "success" && step === "think" && (
        <Think onBackToSuccess={goBackToSuccess} />
      )}

      {status === "success" && step === "choose" && (
        <Choose
          onNext={(location) => {
            if (location === "Church") {
              setStep("time");
              setLocation("Church");
            } else if (location === "After School") {
              setLocation("After School");
              setTime("Afternoon");
              setStep("result");
            } else {
              setStep("niceChoice");
            }
          }}
          onBackToSuccess={goBackToSuccess}
        />
      )}

      {status === "success" && step === "niceChoice" && (
        <NiceChoice
          onNext={(chosenLocation) => {
            setLocation(chosenLocation);
            setStep("time");
          }}
          onBackToSuccess={() => setStep("success")}
        />
      )}

      {status === "success" && step === "time" && (
        <Time
          location={location}
          onNext={(selectedTime) => {
            setTime(selectedTime);
            setStep("result");
          }}
        />
      )}

      {status === "success" && step === "result" && (
        <Result location={location} time={time} onReset={goBack} />
      )}

      {status === null && (
        <form
          onSubmit={onSubmit}
          className="w-full max-w-sm bg-white rounded-xl items-center justify-center flex flex-col gap-4 p-6 shadow-md"
        >
          <h1 className="text-black font-semibold font-sans text-2xl text-center">
            Who are you?
          </h1>
          <div className="flex flex-row items-center gap-2 w-full">
            <input
              className="border border-black rounded-lg px-2 py-1 flex-1 text-black"
              name="name"
              value={name}
              onChange={(e) => setName(e.target.value)}
              placeholder="My name is..."
            />
            <button
              type="submit"
              className="text-white bg-blue-300 rounded-md text-sm px-4 py-1 hover:bg-blue-400 transition"
            >
              Enter
            </button>
          </div>
        </form>
      )}
    </div>
  );
}
