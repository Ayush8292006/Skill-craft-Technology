import { useState, useEffect } from "react";

export default function App() {
  const [input, setInput] = useState("");

  const handleClick = (value) => {
    if (value === "C") return setInput("");
    if (value === "=") {
      try {
        const result = eval(input);
        setInput(String(result));
      } catch {
        setInput("Error");
      }
      return;
    }
    setInput((prev) => prev + value);
  };

  const handleKeyDown = (e) => {
    const allowed = "0123456789+-*/.";
    if (allowed.includes(e.key)) setInput((prev) => prev + e.key);
    else if (e.key === "Enter") {
      try {
        const result = eval(input);
        setInput(String(result));
      } catch {
        setInput("Error");
      }
    } else if (e.key === "Backspace") setInput((prev) => prev.slice(0, -1));
    else if (e.key === "Escape") setInput("");
  };

  useEffect(() => {
    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  });

  return (
    <div className="min-h-screen bg-gradient-to-br from-[#0a0a0a] via-[#111] to-black text-white flex flex-col justify-between p-6">

      {/* Header */}
      <header className="text-center mt-4">
        <h1 className="text-4xl font-extrabold tracking-wide drop-shadow-[0_0_10px_#3b82f6] text-blue-400 animate-pulse">
        "A fast, modern calculator designed for smart, effortless daily calculations."
        </h1>
      </header>

      {/* Calculator */}
      <div className="flex justify-center items-center">
        <div className="p-6 w-80 rounded-3xl bg-[#1a1a1a]/80 backdrop-blur-lg shadow-[0_0_25px_#3b82f6] border border-blue-500/20">

          {/* Display */}
          <div className="mb-5">
            <input
              type="text"
              value={input}
              readOnly
              className="w-full p-4 rounded-xl bg-black text-right text-2xl font-semibold tracking-widest shadow-inner border border-gray-700 text-blue-400 animate-fadeIn"
            />
          </div>

          {/* Buttons */}
          <div className="grid grid-cols-4 gap-3">
            {['7','8','9','/','4','5','6','*','1','2','3','-','.','0','C','+'].map(btn => (
              <button
                key={btn}
                onClick={() => handleClick(btn)}
                className="p-4 bg-[#232323] text-white rounded-xl font-bold text-lg shadow-md hover:bg-[#2e2e2e] active:scale-95 transition-all duration-200 hover:shadow-[0_0_15px_#3b82f6]"
              >
                {btn}
              </button>
            ))}

            {/* Equal button */}
            <button
              onClick={() => handleClick('=')}
              className="col-span-4 p-4 bg-blue-600 rounded-xl text-xl font-extrabold shadow-lg hover:bg-blue-500 active:scale-95 transition-all duration-200 hover:shadow-[0_0_25px_#3b82f6]"
            >
              =
            </button>
          </div>
        </div>
      </div>

      {/* Footer */}
      <footer className="text-center text-gray-400 text-sm tracking-wide mb-2 animate-pulse">
        Created by <span className="text-blue-400 font-semibold">Ayush Kumar</span>
      </footer>

    </div>
  );
}