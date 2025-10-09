import { Game } from "./game.js";

let game = new Game();
game.gameStart();

const restartButton = document.getElementById("restart-btn");
const resetGame = document.getElementById("reset");

resetGame!.addEventListener("click", restartGame);
restartButton!.addEventListener("click", restartGame);

function restartGame() {
  window.location.reload();
}
