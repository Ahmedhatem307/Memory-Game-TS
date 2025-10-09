export class GameAudios {
    constructor() {
        this.flipSound = "./src/assets/audio/flip.mp3";
        this.cardMismatchSound = "./src/assets/audio/fail.mp3";
        this.cardMatchSound = "./src/assets/audio/success.mp3";
        this.gameOverSound = "./src/assets/audio/game-over.mp3";
        this.track = new Audio("./src/assets/audio/gameTrack.mp3");
        this.track.loop = true;
    }
    preloadAudios() {
        [
            this.flipSound,
            this.cardMismatchSound,
            this.cardMatchSound,
            this.gameOverSound,
        ].forEach((src) => new Audio(src).load());
    }
    playTrack() {
        this.track.volume = 0.2;
        this.track.play();
    }
    playMatchSound() {
        let sound = new Audio(this.cardMatchSound);
        sound.volume = 0.2;
        sound.play();
    }
    playFlipSound() {
        let sound = new Audio(this.flipSound);
        sound.play();
    }
    playCardMismatchSound() {
        let sound = new Audio(this.cardMismatchSound);
        sound.play();
    }
    playGameOverSound() {
        let sound = new Audio(this.gameOverSound);
        sound.volume = 0.4;
        sound.play();
    }
}
