import { Game } from "./game.js";
import { Utils } from "./utils.js";
const CardValues = [
    1, 1, 2, 2, 3, 3, 4, 4, 5, 5, 6, 6, 7, 7, 8, 8, 9, 9, 10, 10,
];
let utils = new Utils();
let shuffledValues = utils.shuffle(CardValues);
let game = new Game(shuffledValues);
console.log(game.board);
const board = document.getElementById("board");
console.log(board);
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
        }
    });
    board === null || board === void 0 ? void 0 : board.appendChild(cardDiv);
});
