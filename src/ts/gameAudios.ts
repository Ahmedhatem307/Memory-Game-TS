export class GameAudios {
  gameTrack = new Audio("./src/assets/audio/gameTrack.mp3");
  flipSound = new Audio("./src/assets/audio/flip.mp3");
  cardMismatchSound = new Audio("./src/assets/audio/fail.mp3");
  cardMatchSound = new Audio("./src/assets/audio/success.mp3");
  gameOverSound = new Audio("./src/assets/audio/game-over.mp3");

  constructor() {
    this.gameTrack.loop = true;
    this.cardMatchSound.volume = 0.2;
    this.gameTrack.volume = 0.2;
    this.gameOverSound.volume = 0.5;
  }
}
