"use strict";

document.addEventListener("DOMContentLoaded", function () {
  const squares = document.querySelectorAll("#board div");
  const status = document.getElementById("status");

  const gameState = new Array(9).fill(null);
  let currentPlayer = "X";
  let gameOver = false;

  // All 8 winning lines, as indexes into gameState
  const winningLines = [
    [0, 1, 2], [3, 4, 5], [6, 7, 8], // rows
    [0, 3, 6], [1, 4, 7], [2, 5, 8], // columns
    [0, 4, 8], [2, 4, 6]             // diagonals
  ];

  function checkWinner() {
    for (let i = 0; i < winningLines.length; i++) {
      const [a, b, c] = winningLines[i];
      if (
        gameState[a] !== null &&
        gameState[a] === gameState[b] &&
        gameState[a] === gameState[c]
      ) {
        return gameState[a]; // "X" or "O"
      }
    }
    return null;
  }

  // Task 1: style each square
  for (let i = 0; i < squares.length; i++) {
    squares[i].classList.add("square");
  }

  // Task 2: handle clicks (now with win check)
  for (let i = 0; i < squares.length; i++) {
    squares[i].addEventListener("click", function () {
      if (gameOver || gameState[i] !== null) return;

      squares[i].textContent = currentPlayer;
      squares[i].classList.add(currentPlayer);
      gameState[i] = currentPlayer;

      // Task 4: check for a winner
      const winner = checkWinner();
      if (winner !== null) {
        status.textContent = "Congratulations! " + winner + " is the Winner!";
        status.classList.add("you-won");
        gameOver = true;
        return;
      }

      currentPlayer = currentPlayer === "X" ? "O" : "X";
    });
  }

  // Task 3: hover effect
  for (let i = 0; i < squares.length; i++) {
    squares[i].addEventListener("mouseover", function () {
      squares[i].classList.add("hover");
    });

    squares[i].addEventListener("mouseout", function () {
      squares[i].classList.remove("hover");
    });
  }
});