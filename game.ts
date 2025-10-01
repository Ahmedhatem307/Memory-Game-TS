import { Card } from "./card.js";

export class Game {
  board: Card[] = [];

  constructor(values: number[]) {
    this.board = values.map((num, index) => new Card(index, num));
  }
}
