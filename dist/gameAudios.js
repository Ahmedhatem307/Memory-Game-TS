export class GameAudios {
    constructor() {
        this.gameTrack = new Audio("./src/assets/audio/gameTrack.mp3");
        this.flipSound = new Audio("./src/assets/audio/flip.mp3");
        this.cardMismatchSound = new Audio("./src/assets/audio/fail.mp3");
        this.cardMatchSound = new Audio("./src/assets/audio/success.mp3");
        this.gameOverSound = new Audio("./src/assets/audio/game-over.mp3");
        this.gameTrack.loop = true;
        this.cardMatchSound.volume = 0.2;
        this.gameTrack.volume = 0.2;
        this.gameOverSound.volume = 0.5;
    }
}
