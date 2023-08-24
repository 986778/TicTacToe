const Game = require("./Game");

let g1=Game.newGame("Saurabh","rahul");
let g2=Game.newGame("Sarvesh","Satyam");

console.log(g1.play(0))
console.log(g1.play(3))
console.log(g1.play(1))
console.log(g1.play(4))
console.log(g1.play(2))