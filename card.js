export class Card {
    constructor(value) {
        this.isFlipped = false;
        this.isMatched = false;
        this.value = value.toString();
        this.image = `./assets/images/${value}.jpg`;
    }
}
