let gameno = 25;
let Guess =prompt("Enter your Guess no.");

while (gameno != Guess) {
    Guess = prompt("You are wrong. Try again:");
}

console.log("Congratulations! You found it 🎉");
