import React, { useState, useEffect } from "react";

// Tic-Tac-Toe: taller and wider board boxes with neon/glassmorphism style
// TailwindCSS required
// Footer: "Created by Ayush"

const LINES = [
  [0, 1, 2],
  [3, 4, 5],
  [6, 7, 8],
  [0, 3, 6],
  [1, 4, 7],
  [2, 5, 8],
  [0, 4, 8],
  [2, 4, 6],
];

function checkWinner(board) {
  for (let line of LINES) {
    const [a, b, c] = line;
    if (board[a] && board[a] === board[b] && board[a] === board[c]) {
      return { winner: board[a], line };
    }
  }
  if (board.every((c) => c)) return { winner: "Draw", line: null };
  return null;
}

function bestMove(board) {
  if (board.every((c) => !c)) return 0;
  const minimax = (brd, isMax) => {
    const res = checkWinner(brd);
    if (res) {
      if (res.winner === "O") return { score: 10 };
      if (res.winner === "X") return { score: -10 };
      return { score: 0 };
    }
    const free = brd.reduce((a, v, i) => (!v ? [...a, i] : a), []);
    if (isMax) {
      let best = { score: -Infinity, index: -1 };
      for (let i of free) {
        brd[i] = "O";
        const sim = minimax(brd, false);
        brd[i] = null;
        if (sim.score > best.score) best = { score: sim.score, index: i };
      }
      return best;
    } else {
      let best = { score: Infinity, index: -1 };
      for (let i of free) {
        brd[i] = "X";
        const sim = minimax(brd, true);
        brd[i] = null;
        if (sim.score < best.score) best = { score: sim.score, index: i };
      }
      return best;
    }
  };
  return minimax([...board], true).index;
}

export default function TicTacToe() {
  const [board, setBoard] = useState(Array(9).fill(null));
  const [xIsNext, setXIsNext] = useState(true);
  const [mode, setMode] = useState("computer");
  const [status, setStatus] = useState("");
  const [winningLine, setWinningLine] = useState(null);

  useEffect(() => {
    const res = checkWinner(board);
    if (res) {
      setStatus(res.winner === "Draw" ? "It's a draw!" : `${res.winner} wins!`);
      setWinningLine(res.line);
    } else {
      setWinningLine(null);
      setStatus(`${xIsNext ? "X" : "O"}'s turn`);
    }
  }, [board, xIsNext]);

  useEffect(() => {
    if (mode === "computer" && !xIsNext && !checkWinner(board)) {
      const t = setTimeout(() => {
        const idx = bestMove(board);
        if (!board[idx]) makeMove(idx);
      }, 300);
      return () => clearTimeout(t);
    }
  }, [board, xIsNext, mode]);

  const makeMove = (index) => {
    if (board[index] || checkWinner(board)) return;
    const newBoard = [...board];
    newBoard[index] = xIsNext ? "X" : "O";
    setBoard(newBoard);
    setXIsNext(!xIsNext);
  };

  const handleClick = (index) => {
    if (mode === "computer" && !xIsNext) return;
    makeMove(index);
  };

  const restart = () => {
    setBoard(Array(9).fill(null));
    setXIsNext(true);
    setWinningLine(null);
    setStatus("");
  };

  const cellClass = (i) => {
    let base =
      "w-24 h-24 md:w-28 md:h-28 flex items-center justify-center text-4xl md:text-5xl font-extrabold cursor-pointer select-none rounded-2xl transition-transform duration-250 shadow-neon hover:scale-105 hover:shadow-neon-xl bg-gradient-to-br from-purple-700 via-pink-500 to-indigo-500";
    if (winningLine?.includes(i)) base += " ring-4 ring-offset-2 ring-green-400 scale-125";
    return base;
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-black p-6">
      <div className="max-w-lg w-full bg-black/70 rounded-3xl p-8 text-white shadow-lg border border-purple-500/30 backdrop-blur-md animate-fadeIn">
        <h1 className="text-4xl md:text-5xl font-extrabold mb-6 text-center text-gradient animate-slideDown">Tic Tac Toe</h1>

        <div className="flex items-center gap-4 mb-8 justify-center">
          <button
            className={`px-5 py-3 rounded-full transition-colors duration-300 ${mode === "computer" ? "bg-purple-500 hover:bg-purple-600" : "bg-gray-600 hover:bg-gray-500"}`}
            onClick={() => setMode("computer")}
          >
            1vComputer
          </button>

          <button
            className={`px-5 py-3 rounded-full transition-colors duration-300 ${mode === "two" ? "bg-purple-500 hover:bg-purple-600" : "bg-gray-600 hover:bg-gray-500"}`}
            onClick={() => setMode("two")}
          >
            2-Player
          </button>

          <button
            onClick={restart}
            className="px-5 py-3 rounded-lg bg-red-500/70 hover:bg-red-500 transition-all duration-300 shadow-md hover:shadow-xl"
          >
            Restart
          </button>
        </div>

        <div className="grid grid-cols-3 gap-5 justify-center mb-8">
          {board.map((val, idx) => (
            <div key={idx} onClick={() => handleClick(idx)} className={cellClass(idx)}>
              <span className={`transition-opacity duration-300 ${val ? "opacity-100" : "opacity-0"}`}>{val}</span>
            </div>
          ))}
        </div>

        <div className="flex items-center justify-between mt-2 text-lg font-semibold">
          <div className="opacity-80">{status}</div>
          <div className="opacity-70">Mode: {mode === "computer" ? "Computer" : "2 Players"}</div>
        </div>

        <p className="mt-6 text-center text-xs text-green-400 font-bold animate-pulse">Created with ❤️ by Ayush</p>
      </div>
    </div>
  );
}