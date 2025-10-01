export class Card {
  value: string;
  isFlipped: boolean = false;
  isMatched: boolean = false;
  image: string;

  constructor(value: number) {
    this.value = value.toString();
    this.image = `./assets/images/${value}.jpg`;
  }
}
