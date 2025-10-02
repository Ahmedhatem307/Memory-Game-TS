import type { Card } from "./card.js";
import { Game } from "./game.js";
import { Utils } from "./utils.js";

let utils = new Utils();
const CardValues = [
  1, 1, 2, 2, 3, 3, 4, 4, 5, 5, 6, 6, 7, 7, 8, 8, 9, 9, 10, 10,
];

let shuffledValues = utils.shuffle(CardValues);
let game = new Game(shuffledValues);
let firstCard: Card | null = null;
let secondCard: Card | null = null;
let lock: boolean = false;
let progressBar: HTMLElement = document.getElementsByClassName(
  "progress-bar"
)[0] as HTMLElement;
let progressText: HTMLElement = document.getElementById(
  "progress-text"
) as HTMLElement;
let progressCounter: number = 0;

const gameTrack = new Audio("./assets/audio/fulltrack.mp3");
const flipSound = new Audio("./assets/audio/flip.mp3");
const cardMishmatchSound = new Audio("./assets/audio/fail.mp3");
const cardMatchSound = new Audio("./assets/audio/good.mp3");
const gameOverSound = new Audio("./assets/audio/game-over.mp3");

const board = document.getElementById("board");

const restartButton = document.getElementById("restart-btn");
const resetGame = document.getElementById("reset");

resetGame!.addEventListener("click", restartGame);
restartButton!.addEventListener("click", restartGame);

game.board.forEach((card) => {
  const cardDiv = document.createElement("div");
  cardDiv.classList.add("card");
  cardDiv.addEventListener("click", () => {
    gameTrack.play();
    if (!card.isFlipped && !card.isMatched && !lock) {
      flipSound.play();
      card.isFlipped = true;
      flipCard(cardDiv, card, true);

      if (!firstCard) {
        firstCard = card;
      } else {
        secondCard = card;
        checkMatch();
      }
    }
  });

  board?.appendChild(cardDiv);
});

function checkMatch() {
  if (firstCard?.value === secondCard?.value) {
    firstCard!.isMatched = true;
    secondCard!.isMatched = true;
    progressCounter += 10;
    console.log(progressCounter);
    progressBar.style.width = `${progressCounter}%`;
    progressText.innerText = `${progressCounter} %`;
    cardMatchSound.play();
    firstCard = null;
    secondCard = null;
    lock = false;

    if (progressCounter === 100) {
      gameOverSound.play();
      const gameOver = document.getElementById("game-over") as HTMLElement;
      gameOver.style.display = "flex";
    }
  } else {
    lock = true;

    setTimeout(() => {
      let firstElement = document.getElementById("board")?.children[
        firstCard!.id
      ] as HTMLElement;
      let secondElement = document.getElementById("board")?.children[
        secondCard!.id
      ] as HTMLElement;

      flipCard(firstElement, firstCard!, false);
      flipCard(secondElement, secondCard!, false);

      firstCard!.isFlipped = false;
      secondCard!.isFlipped = false;

      firstCard = null;
      secondCard = null;
      lock = false;
      cardMishmatchSound.play();
    }, 1000);
  }
}

function flipCard(cardDiv: HTMLElement, card: Card, showFront: boolean) {
  cardDiv.classList.add("flipping");

  if (showFront) {
    cardDiv.style.transition = "transform 0.3s";
    cardDiv.style.transform = "rotateY(90deg)";
  } else {
    cardDiv.style.transition = "transform 0.3s";
    cardDiv.style.transform = "rotateY(-90deg)";
  }

  setTimeout(() => {
    if (showFront) {
      cardDiv.style.background = `url(${card.image})`;
      cardDiv.style.backgroundSize = "contain";
      cardDiv.style.backgroundPosition = "center";
      cardDiv.style.backgroundRepeat = "no-repeat";
      cardDiv.style.backgroundColor = "white";
    } else {
      cardDiv.style.background = "url(./assets/back.jpg)";
      cardDiv.style.backgroundSize = "contain";
      cardDiv.style.backgroundPosition = "center";
      cardDiv.style.backgroundRepeat = "no-repeat";
    }

    cardDiv.classList.remove("flipping");
    cardDiv.style.transform = "rotateY(0deg)";
  }, 300);
}
function restartGame() {
  window.location.reload();
}
