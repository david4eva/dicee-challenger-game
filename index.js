// Generate a random number between 1 & 6 for player 1
const randomNumber1 = Math.floor(Math.random() * 6) + 1;
console.log(randomNumber1);

// Generate a random number between 1 & 6 for player 2
const randomNumber2 = Math.floor(Math.random() * 6) + 1;
console.log(randomNumber2);

// Retrieve & set the value of img src for player 1
let image1 = document.querySelectorAll('.dice img')[0];
image1.setAttribute('src', `images/dice${randomNumber1}.png`);
console.log(image1);

// Retrieve & set the value of img src for player 2
let image2 = document.querySelectorAll('.dice img')[1];
image2.setAttribute('src', `images/dice${randomNumber2}.png`);
console.log(image2);

// Function to determine the winning player on each dice roll
function decideWinner() {
    // Retrieve & set the textContent of the h1 header
    let getH1 = document.querySelector('h1');
    console.log(getH1.textContent);

    if (randomNumber1 > randomNumber2) {
        getH1.textContent = 'Player 1 Wins!'
    } else if (randomNumber2 > randomNumber1) {
        getH1.textContent = 'Player 2 Wins!'
    } else {
        getH1.textContent = 'Draw!'
    }
}
decideWinner();

