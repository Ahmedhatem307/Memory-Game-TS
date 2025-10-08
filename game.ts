import { Card } from "./card.js";
import { Utils } from "./utils.js";
import { GameAudios } from "./gameAudios.js";

export class Game {
  board: Card[] = [];
  utils = new Utils();
  CardValues = [1, 1, 2, 2, 3, 3, 4, 4, 5, 5, 6, 6, 7, 7, 8, 8, 9, 9, 10, 10];
  images = [
    "1.jpg",
    "2.jpg",
    "3.jpg",
    "4jpg",
    "5.jpg",
    "6.jpg",
    "7.jpg",
    "8.jpg",
    "9.jpg",
    "10.jpg",
  ];
  shuffledValues = this.utils.shuffle(this.CardValues);
  firstCard: Card | null = null;
  secondCard: Card | null = null;
  lock: boolean = false;
  boardView = document.getElementById("board");
  progressBar: HTMLElement = document.getElementsByClassName(
    "progress-bar"
  )[0] as HTMLElement;
  progressText: HTMLElement = document.getElementById(
    "progress-text"
  ) as HTMLElement;
  progressCounter: number = 0;
  audio = new GameAudios();

  constructor() {
    this.board = this.shuffledValues.map((num, index) => new Card(index, num));
  }

  async gameStart() {
    // preload all of the images before the game starts
    await this.utils.preloadImages(this.images);

    this.board.forEach((card) => {
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
          } else {
            this.secondCard = card;
            this.checkMatch();
          }
        }
      });

      this.boardView?.appendChild(cardDiv);
    });
  }

  checkMatch() {
    if (this.firstCard?.value === this.secondCard?.value) {
      this.firstCard!.isMatched = true;
      this.secondCard!.isMatched = true;
      this.progressCounter += 10;
      this.progressBar.style.width = `${this.progressCounter}%`;
      this.progressText.innerText = `${this.progressCounter} %`;
      this.audio.cardMatchSound.play();
      this.firstCard = null;
      this.secondCard = null;
      this.lock = false;

      if (this.progressCounter === 100) {
        this.audio.gameOverSound.play();
        const gameOver = document.getElementById("game-over") as HTMLElement;
        gameOver.style.display = "flex";
      }
    } else {
      this.lock = true;

      setTimeout(() => {
        let firstElement = document.getElementById("board")?.children[
          this.firstCard!.id
        ] as HTMLElement;
        let secondElement = document.getElementById("board")?.children[
          this.secondCard!.id
        ] as HTMLElement;

        this.utils.flipCard(firstElement, this.firstCard!, false);
        this.utils.flipCard(secondElement, this.secondCard!, false);

        this.firstCard!.isFlipped = false;
        this.secondCard!.isFlipped = false;

        this.firstCard = null;
        this.secondCard = null;
        this.lock = false;
        this.audio.cardMismatchSound.play();
      }, 1000);
    }
  }
}
