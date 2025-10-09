export class Card {
    constructor(id, value) {
        this.isFlipped = false;
        this.isMatched = false;
        this.id = id;
        this.value = value.toString();
        this.image = `./src/assets/images/${value}.webp`;
    }
}
