import { Card } from "./card";

export class Game {
  board: Card[] = [];

  constructor(values: number[]) {
    this.board = values.map((num) => new Card(num));
  }
}
