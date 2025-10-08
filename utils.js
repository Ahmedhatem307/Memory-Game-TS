import { Card } from "./card.js";
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
    flipCard(cardDiv, card, showFront) {
        cardDiv.classList.add("flipping");
        if (showFront) {
            cardDiv.style.transition = "transform 0.3s";
            cardDiv.style.transform = "rotateY(90deg)";
        }
        else {
            cardDiv.style.transition = "transform 0.3s";
            cardDiv.style.transform = "rotateY(-90deg)";
        }
        setTimeout(() => {
            if (showFront) {
                cardDiv.style.background = `url(${card.image})`;
                cardDiv.style.backgroundSize = "cover";
                cardDiv.style.backgroundPosition = "center";
                cardDiv.style.backgroundRepeat = "no-repeat";
                cardDiv.style.backgroundColor = "white";
            }
            else {
                cardDiv.style.background = "url(./assets/back.jpg)";
                cardDiv.style.backgroundSize = "contain";
                cardDiv.style.backgroundPosition = "center";
                cardDiv.style.backgroundRepeat = "no-repeat";
            }
            cardDiv.classList.remove("flipping");
            cardDiv.style.transform = "rotateY(0deg)";
        }, 300);
    }
}
