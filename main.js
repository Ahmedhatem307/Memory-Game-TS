import { Game } from "./game.js";
import { Utils } from "./utils.js";
let utils = new Utils();
const CardValues = [
    1, 1, 2, 2, 3, 3, 4, 4, 5, 5, 6, 6, 7, 7, 8, 8, 9, 9, 10, 10,
];
let shuffledValues = utils.shuffle(CardValues);
let game = new Game(shuffledValues);
let firstCard = null;
let secondCard = null;
let lock = false;
let progressBar = document.getElementsByClassName("progress-bar")[0];
let progressText = document.getElementById("progress-text");
let progressCounter = 0;
const board = document.getElementById("board");
game.board.forEach((card) => {
    const cardDiv = document.createElement("div");
    cardDiv.classList.add("card");
    cardDiv.addEventListener("click", () => {
        if (!card.isFlipped && !card.isMatched && !lock) {
            card.isFlipped = true;
            flipCard(cardDiv, card, true);
            if (!firstCard) {
                firstCard = card;
            }
            else {
                secondCard = card;
                checkMatch();
            }
        }
    });
    board === null || board === void 0 ? void 0 : board.appendChild(cardDiv);
});
function checkMatch() {
    if ((firstCard === null || firstCard === void 0 ? void 0 : firstCard.value) === (secondCard === null || secondCard === void 0 ? void 0 : secondCard.value)) {
        firstCard.isMatched = true;
        secondCard.isMatched = true;
        progressCounter += 10;
        progressBar.style.width = `${progressCounter}%`;
        progressText.innerText = `Progress ${progressCounter} %`;
        firstCard = null;
        secondCard = null;
        lock = false;
    }
    else {
        lock = true;
        setTimeout(() => {
            var _a, _b;
            let firstElement = (_a = document.getElementById("board")) === null || _a === void 0 ? void 0 : _a.children[firstCard.id];
            let secondElement = (_b = document.getElementById("board")) === null || _b === void 0 ? void 0 : _b.children[secondCard.id];
            flipCard(firstElement, firstCard, false);
            flipCard(secondElement, secondCard, false);
            firstCard.isFlipped = false;
            secondCard.isFlipped = false;
            firstCard = null;
            secondCard = null;
            lock = false;
        }, 1000);
    }
}
function flipCard(cardDiv, card, showFront) {
    cardDiv.classList.add("flipping");
    if (showFront) {
        cardDiv.style.transition = "transform 0.3s";
        cardDiv.style.transform = "rotateY(90deg)";
    }
    else {
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
        }
        else {
            cardDiv.style.background = "url(./assets/back.jpg)";
            cardDiv.style.backgroundSize = "contain";
            cardDiv.style.backgroundPosition = "center";
            cardDiv.style.backgroundRepeat = "no-repeat";
        }
        cardDiv.classList.remove("flipping");
        cardDiv.style.transform = "rotateY(0deg)";
    }, 300);
}
