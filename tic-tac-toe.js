"use strict";

document.addEventListener("DOMContentLoaded", function () {
  const squares = document.querySelectorAll("#board div");
  const status = document.getElementById("status");
  const newGameButton = document.querySelector("button");

  const originalMessage = status.textContent;

  let gameState = new Array(9).fill(null);
  let currentPlayer = "X";
  let gameOver = false;

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
        return gameState[a];
      }
    }
    return null;
  }

  for (let i = 0; i < squares.length; i++) {
    squares[i].classList.add("square");
  }

  for (let i = 0; i < squares.length; i++) {
    squares[i].addEventListener("click", function () {
      if (gameOver || gameState[i] !== null) return;

      squares[i].textContent = currentPlayer;
      squares[i].classList.add(currentPlayer);
      gameState[i] = currentPlayer;

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

  for (let i = 0; i < squares.length; i++) {
    squares[i].addEventListener("mouseover", function () {
      squares[i].classList.add("hover");
    });

    squares[i].addEventListener("mouseout", function () {
      squares[i].classList.remove("hover");
    });
  }

  newGameButton.addEventListener("click", function () {
    for (let i = 0; i < squares.length; i++) {
      squares[i].textContent = "";
      squares[i].classList.remove("X", "O");
    }

    gameState = new Array(9).fill(null);
    currentPlayer = "X";
    gameOver = false;

    status.textContent = originalMessage;
    status.classList.remove("you-won");
  });
});