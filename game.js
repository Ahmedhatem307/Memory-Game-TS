import { Card } from "./card.js";
import { Utils } from "./utils.js";
import { GameAudios } from "./gameAudios.js";
export class Game {
    constructor() {
        this.board = [];
        this.utils = new Utils();
        this.CardValues = [1, 1, 2, 2, 3, 3, 4, 4, 5, 5, 6, 6, 7, 7, 8, 8, 9, 9, 10, 10];
        this.shuffledValues = this.utils.shuffle(this.CardValues);
        this.firstCard = null;
        this.secondCard = null;
        this.lock = false;
        this.boardView = document.getElementById("board");
        this.progressBar = document.getElementsByClassName("progress-bar")[0];
        this.progressText = document.getElementById("progress-text");
        this.progressCounter = 0;
        this.audio = new GameAudios();
        this.board = this.shuffledValues.map((num, index) => new Card(index, num));
    }
    gameStart() {
        this.board.forEach((card) => {
            var _a;
            const cardDiv = document.createElement("div");
            cardDiv.classList.add("card");
            cardDiv.addEventListener("click", () => {
                this.audio.gameTrack.play();
                if (!card.isFlipped && !card.isMatched && !this.lock) {
                    this.audio.flipSound.play();
                    card.isFlipped = true;
                    this.utils.flipCard(cardDiv, card, true);
                    if (!this.firstCard) {
                        this.firstCard = card;
                    }
                    else {
                        this.secondCard = card;
                        this.checkMatch();
                    }
                }
            });
            (_a = this.boardView) === null || _a === void 0 ? void 0 : _a.appendChild(cardDiv);
        });
    }
    checkMatch() {
        var _a, _b;
        if (((_a = this.firstCard) === null || _a === void 0 ? void 0 : _a.value) === ((_b = this.secondCard) === null || _b === void 0 ? void 0 : _b.value)) {
            this.firstCard.isMatched = true;
            this.secondCard.isMatched = true;
            this.progressCounter += 10;
            this.progressBar.style.width = `${this.progressCounter}%`;
            this.progressText.innerText = `${this.progressCounter} %`;
            this.audio.cardMatchSound.play();
            this.firstCard = null;
            this.secondCard = null;
            this.lock = false;
            if (this.progressCounter === 100) {
                this.audio.gameOverSound.play();
                const gameOver = document.getElementById("game-over");
                gameOver.style.display = "flex";
            }
        }
        else {
            this.lock = true;
            setTimeout(() => {
                var _a, _b;
                let firstElement = (_a = document.getElementById("board")) === null || _a === void 0 ? void 0 : _a.children[this.firstCard.id];
                let secondElement = (_b = document.getElementById("board")) === null || _b === void 0 ? void 0 : _b.children[this.secondCard.id];
                this.utils.flipCard(firstElement, this.firstCard, false);
                this.utils.flipCard(secondElement, this.secondCard, false);
                this.firstCard.isFlipped = false;
                this.secondCard.isFlipped = false;
                this.firstCard = null;
                this.secondCard = null;
                this.lock = false;
                this.audio.cardMismatchSound.play();
            }, 1000);
        }
    }
}
