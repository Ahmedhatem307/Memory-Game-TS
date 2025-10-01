export class Utils {
    //Fisher-Yates shuffle algorithm
    shuffle(orderedCards) {
        let currentIndex = orderedCards.length;
        let randomIndex;
        while (currentIndex !== 0) {
            randomIndex = Math.floor(Math.random() * currentIndex);
            currentIndex--;
            [orderedCards[currentIndex], orderedCards[randomIndex]] = [
                orderedCards[randomIndex],
                orderedCards[currentIndex],
            ];
        }
        return orderedCards;
    }
}
