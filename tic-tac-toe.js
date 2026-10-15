"use strict";

document.addEventListener("DOMContentLoaded", function () {
  const squares = document.querySelectorAll("#board div");

  const gameState = new Array(9).fill(null);
  let currentPlayer = "X";

  // Task 1: style each square
  for (let i = 0; i < squares.length; i++) {
    squares[i].classList.add("square");
  }

  // Task 2: handle clicks
  for (let i = 0; i < squares.length; i++) {
    squares[i].addEventListener("click", function () {
      if (gameState[i] !== null) return;

      squares[i].textContent = currentPlayer;
      squares[i].classList.add(currentPlayer);
      gameState[i] = currentPlayer;

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