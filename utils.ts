export class Utils {
  //Fisher-Yates shuffle algorithm
  shuffle<T>(orderedCards: T[]) {
    let currentIndex = orderedCards.length;
    let randomIndex: number;

    while (currentIndex !== 0) {
      randomIndex = Math.floor(Math.random() * currentIndex);
      currentIndex--;

      [orderedCards[currentIndex]!, orderedCards[randomIndex]!] = [
        orderedCards[randomIndex]!,
        orderedCards[currentIndex]!,
      ];
    }

    return orderedCards;
  }
}
