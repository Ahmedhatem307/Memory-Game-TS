import { Card } from "./card.js";
export class Game {
  constructor(values) {
    this.board = values.map((num) => new Card(num));
  }
}
