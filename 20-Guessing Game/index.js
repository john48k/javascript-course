const minNum = 1;
const maxNum = 100;
const answer = Math.floor(Math.random() * (maxNum - minNum + 1)) + minNum;

let attempts = 0;
let guess;
let running = true;

while (running) {
  guess = window.prompt(`Guess a number between ${minNum} - ${maxNum}`);
  guess = Number(guess);
  if (isNaN(guess)) {
    window.alert("Please enter a valid number  ");
  } else if (guess < minNum || guess > maxNum) {
    window.alert("Please enter a valid number 1-100");
  } else {
    attempts++;
    if (guess < answer) {
      window.alert("TOO LOW try AGAIN!");
    } else if (guess > answer) {
      window.alert("TOO HIGH GUESS AGAIN!");
    } else {
      window.alert(
        "CORRECT!" +
          `The answer was ${answer}` +
          ` it took you ${attempts} attempts`
      );
      running = false;
    }
  }
}
