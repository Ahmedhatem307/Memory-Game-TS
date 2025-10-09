var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
import { Card } from "./card.js";
import { Utils } from "./utils.js";
import { GameAudios } from "./gameAudios.js";
export class Game {
    constructor() {
        this.board = [];
        this.utils = new Utils();
        this.CardValues = [1, 1, 2, 2, 3, 3, 4, 4, 5, 5, 6, 6, 7, 7, 8, 8, 9, 9, 10, 10];
        this.images = [
            "./src/assets/images/1.webp",
            "./src/assets/images/2.webp",
            "./src/assets/images/3.webp",
            "./src/assets/images/4.webp",
            "./src/assets/images/5.webp",
            "./src/assets/images/6.webp",
            "./src/assets/images/7.webp",
            "./src/assets/images/8.webp",
            "./src/assets/images/9.webp",
            "./src/assets/images/10.webp",
        ];
        this.shuffledValues = this.utils.shuffle(this.CardValues);
        this.firstCard = null;
        this.secondCard = null;
        this.lock = false;
        this.boardView = document.getElementById("board");
        this.progressBar = document.getElementsByClassName("progress-bar")[0];
        this.progressText = document.getElementById("progress-text");
        this.progressCounter = 0;
        this.movesCounter = 0;
        this.movesCounterText = document.getElementById("moves-counter");
        this.audio = new GameAudios();
        this.board = this.shuffledValues.map((num, index) => new Card(index, num));
    }
    gameStart() {
        return __awaiter(this, void 0, void 0, function* () {
            // preload all of the images & audios before the game starts
            yield this.utils.preloadImages(this.images);
            this.audio.preloadAudios();
            this.board.forEach((card) => {
                var _a;
                const cardDiv = document.createElement("div");
                cardDiv.classList.add("card");
                cardDiv.addEventListener("click", () => {
                    this.audio.playTrack();
                    this.movesCounter++;
                    this.movesCounterText.innerText = this.movesCounter.toString();
                    if (!card.isFlipped && !card.isMatched && !this.lock) {
                        this.audio.playFlipSound();
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
            this.audio.playMatchSound();
            this.firstCard = null;
            this.secondCard = null;
            this.lock = false;
            if (this.progressCounter === 100) {
                this.audio.playGameOverSound();
                const gameOver = document.getElementById("game-over");
                const gameOverMovesCounter = document.getElementById("game-over-moves");
                gameOver.style.display = "flex";
                gameOverMovesCounter.innerText = this.movesCounter.toString();
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
                this.audio.playCardMismatchSound();
            }, 1000);
        }
    }
}
