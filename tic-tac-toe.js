"use strict";

document.addEventListener("DOMContentLoaded", function () {
  const squares = document.querySelectorAll("#board div");
  const board = document.getElementById("board");

  // Game state: one entry per square, null until it's claimed
  const gameState = new Array(9).fill(null);
  let currentPlayer = "X";

  // Task 1: style each square
  for (let i = 0; i < squares.length; i++) {
    squares[i].classList.add("square");
  }

  // Task 2: handle clicks
  for (let i = 0; i < squares.length; i++) {
    squares[i].addEventListener("click", function () {
      // Ignore clicks on squares that are already taken
      if (gameState[i] !== null) return;

      squares[i].textContent = currentPlayer;
      squares[i].classList.add(currentPlayer);
      gameState[i] = currentPlayer;

      // Alternate turns
      currentPlayer = currentPlayer === "X" ? "O" : "X";
    });
  }
});
