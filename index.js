let cards = []
let sum = 0
let hasBlackJack = false
let isAlive = false
let message = ""
let messageEl = document.getElementById("message")
let sumEl = document.getElementById("sumEl")
let cardEl = document.getElementById("cardEl")

let player = {
    name: "Eddy",
    chips: 145
}

let playerEl = document.getElementById("playerEl")
playerEl.textContent = player.name + ": $" + player.chips

function getRandomCard() {
    let randomNumber = Math.floor(Math.random() * 13) + 1

    if (randomNumber === 1) {
        return 11;
    }
    else if (randomNumber > 10) {
        return 10
    }
    else { return randomNumber }
}

function startGame() {
    isAlive = true
    firstCard = getRandomCard()
    secondCard = getRandomCard()
    cards = [firstCard, secondCard]
    sum = firstCard + secondCard
    renderGame();
}

function renderGame() {
    cardEl.textContent = "Cards:"

    for (let i = 0; i < cards.length; i++) {
        cardEl.textContent += cards[i] + " "
    }

    sumEl.textContent = "Sum:" + sum
    if (sum <= 20) {
        message = "Do you want to draw a new card?"
    }
    else if (sum === 21) {
        message = "Wohoo! You got BlackJack!!"
        hasBlackJack = true
    }
    else {
        message = "You are out of BlackJack"
        isAlive = false
    }
    messageEl.textContent = message

}
function newCard() {
    if (isAlive === true && hasBlackJack === false) {
        let card = getRandomCard()
        sum += card
        cards.push(card)
        renderGame()
    }else{
        alert("You are out of the game")
    }


}

// let mySelf = [
//     "Edidiong",
//     23,
//     true
// ]


// let featuredPosts = [
//     "Check out my netflix account",
//     "heres the code for my prject",
//     "ive relaunced my portfolio"
// ]

// console.log(featuredPosts.length)

// let mySkills = [
//     "Graphics Design",
//     "UI & UX Design",
//     "Frontend Web Development",
//     "Backend Web Development",
//     "CryptoCurrency Trading"
// ]

// experience[1]
// experience[2]
// experience[0]

// cards.push(6)
// console.log(cards)

// let messages = [
//     "hey, hows it going?",
//     "im great, thank you! How about you?",
//     "All good. Been Working on my portfolio lately.",
//     "Thats Beautiful"
// ]

// for(let i = 0; i < messages.length; i++){
//     console.log(messages[i])
// }

// let newMessage = "Same here!"

// messages.push(newMessage)
// console.log(messages)

// messages.pop(newMessage)
// console.log(messages)

// for(let i = 10; i <= 100; i += 10){
//     console.log(i)
// }


// let myCard = [7,3,9,10,7,9]

// for(i = 0; i < myCard.length; i++ ){
//     console.log(myCard[i])
// }

// let sentence = [
//     "Hello",
//     "my",
//     "Name",
//     "is",
//     "Edidiong",
// ]
// let greetingEl = document.getElementById("greetingEl")

// for (let i = 0; i < sentence.length; i++){
//     greetingEl.textContent += sentence[i] + " "
// }

// let player1Time = 102
// let player2Time = 107

// function getTotalRaceTime(){
//     let totalRaceTime = player1Time + player2Time
//     return totalRaceTime
// }

// let totalRaceTime = getTotalRaceTime()
// console.log(totalRaceTime)


// let flooredNum = Math.floor(randomNumber)


// function rollDice(){
//     let randomNumber = Math.floor(Math.random() * 6) + 1
//     console.log(randomNumber)
// }
// rollDice()

// let hasSolvedChallenge = false
// let hasHintsLeft = false

// if(hasSolvedChallenge === false && hasHintsLeft === false){
//     console.log("Showing Certificates...............")
// }

// let likesDocumentaries = false
// let likesStartups = true

// if(likesDocumentaries === true || likesStartups === true){
//     console.log("hey Check out this new movie, think you might like")
// }

// let course = {
//     title: "learn css grid for free",
//     lessons: 16,
//     creator:"Edidiong",
//     length: 63,
//     level: 2, 
//     isFree: true,
//     tags:["html", "css"]
// }

// console.log(course.length)

// let airBnb = {
//     location: "Uyo",
//     price: 140,
//     isClass: true,
//     tags: ["yes", "no"]
// }

// console.log(airBnb.price)
// console.log(airBnb.tags)