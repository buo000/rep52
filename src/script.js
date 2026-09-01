let trash = []

const suits = ["Spades", "Clubs", "Hearts", "Diamonds"];
const ranks = ["Ace", "2", "3", "4", "5", "6", "7", "8", "9", "10", "Jack", "Queen", "King"];

const drawButton = document.getElementById("draw-button")

const spadesInput = document.getElementById("spades-input")
const clubsInput = document.getElementById("clubs-input")
const heartsInput = document.getElementById("hearts-input")
const diamondsInput = document.getElementById("diamonds-input")

const cardDisplay = document.getElementById("card-display")
const exerciseDisplay = document.getElementById("exercise-display")

let cardsLeft = document.getElementById("cards-left")

let cardsLeftCount = 52

drawButton.addEventListener("click", () => {
    let randomSuit = suits[Math.floor(Math.random() * suits.length)]
    let randomRank = ranks[Math.floor(Math.random() * ranks.length)]

    while (trash.some(card => card[randomSuit] === randomRank)) {
        randomSuit = suits[Math.floor(Math.random() * suits.length)]
        randomRank = ranks[Math.floor(Math.random() * ranks.length)]
    }

    if (randomSuit === "Spades") {
        cardDisplay.innerHTML = randomRank + " &spades;"
        exerciseDisplay.textContent = randomRank + " " + spadesInput.value.toUpperCase()
    } else if (randomSuit === "Clubs") {
        cardDisplay.innerHTML = randomRank + " &clubs;"
        exerciseDisplay.textContent = randomRank + " " + clubsInput.value.toUpperCase()
    } else if (randomSuit === "Hearts") {
        cardDisplay.innerHTML = randomRank + " &hearts;"
        exerciseDisplay.textContent = randomRank + " " + heartsInput.value.toUpperCase()
    } else if (randomSuit === "Diamonds") {
        cardDisplay.innerHTML = randomRank + " &diamondsuit;"
        exerciseDisplay.textContent = randomRank + " " + diamondsInput.value.toUpperCase()
    }

    console.log(randomRank + " " + spadesInput.value)

    trash.push({[randomSuit]: randomRank})
    console.log(trash)

    cardsLeftCount -= 1

    cardsLeft.innerText = cardsLeftCount + " cards left"

    if (cardsLeftCount === 0) {
        drawButton.disabled = true
    }
});