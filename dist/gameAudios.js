export class GameAudios {
    constructor() {
        this.gameTrack = new Audio("./assets/audio/gameTrack.mp3");
        this.flipSound = new Audio("./assets/audio/flip.mp3");
        this.cardMismatchSound = new Audio("./assets/audio/fail.mp3");
        this.cardMatchSound = new Audio("./assets/audio/success.mp3");
        this.gameOverSound = new Audio("./assets/audio/game-over.mp3");
        this.gameTrack.loop = true;
        this.cardMatchSound.volume = 0.2;
        this.gameTrack.volume = 0.2;
        this.gameOverSound.volume = 0.5;
    }
}
