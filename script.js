const pSnakeListText = document.getElementById("snakeList").innerText;
const snakeListOpeningBracket = pSnakeListText.indexOf("[");
const snakeListClosingBracket = pSnakeListText.indexOf("]");
const snakeList = pSnakeListText.slice(pSnakeListText.indexOf("[") + 1, pSnakeListText.indexOf("]")).split(", ")
let sumSnake = 0;

for (let i = 0; i < snakeList.length; i++ ) {
  sumSnake += parseInt(snakeList[i]);
}

let sanityCheck = sumSnake - (snakeList.length - 1);

console.log(pSnakeListText);
console.log(snakeListOpeningBracket);
console.log(snakeListClosingBracket);
console.log(snakeList);
console.log(typeof(snakeList));
console.log(sumSnake);
console.log(snakeList.length)
console.log(sanityCheck);