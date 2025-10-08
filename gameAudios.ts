export class GameAudios {
  gameTrack = new Audio("./assets/audio/gameTrack.mp3");
  flipSound = new Audio("./assets/audio/flip.mp3");
  cardMismatchSound = new Audio("./assets/audio/fail2.mp3");
  cardMatchSound = new Audio("./assets/audio/success.mp3");
  gameOverSound = new Audio("./assets/audio/game-over.mp3");

  constructor() {
    this.gameTrack.loop = true;
    this.cardMatchSound.volume = 0.2;
    this.gameTrack.volume = 0.2;
    this.gameOverSound.volume = 0.5;
  }
}
