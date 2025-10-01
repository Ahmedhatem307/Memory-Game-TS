import type { Card } from "./card.js";
import { Game } from "./game.js";
import { Utils } from "./utils.js";

let utils = new Utils();
const CardValues = [
  1, 1, 2, 2, 3, 3, 4, 4, 5, 5, 6, 6, 7, 7, 8, 8, 9, 9, 10, 10,
];

let shuffledValues = utils.shuffle(CardValues);
let game = new Game(shuffledValues);
let clickCounter = 0;
let firstCard: Card | null = null;
let secondCard: Card | null = null;

const board = document.getElementById("board");

game.board.forEach((card) => {
  const cardDiv = document.createElement("div");
  cardDiv.classList.add("card");
  cardDiv.addEventListener("click", () => {
    if (!card.isFlipped && !card.isMatched) {
      card.isFlipped = true;
      cardDiv.style.background = `url('${card.image}')`;
      cardDiv.style.backgroundSize = "contain";
      cardDiv.style.backgroundPosition = "center";
      cardDiv.style.backgroundRepeat = "no-repeat";
      if (!firstCard) {
        firstCard = card;
        console.log(firstCard);
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

    firstCard = null;
    secondCard = null;
  } else {
    setTimeout(() => {
      let firstElement = document.getElementById("board")?.children[
        firstCard!.id
      ] as HTMLElement;
      let secondElement = document.getElementById("board")?.children[
        secondCard!.id
      ] as HTMLElement;

      firstElement.style.backgroundImage = "url(./assets/back.jpg)";
      secondElement.style.backgroundImage = "url(./assets/back.jpg)";

      firstCard!.isFlipped = false;
      secondCard!.isFlipped = false;

      firstCard = null;
      secondCard = null;
    }, 1000);
  }
}
