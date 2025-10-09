export class Card {
  id: number;
  value: string;
  isFlipped: boolean = false;
  isMatched: boolean = false;
  image: string;

  constructor(id: number, value: number) {
    this.id = id;
    this.value = value.toString();
    this.image = `./src/assets/images/${value}.webp`;
  }
}
