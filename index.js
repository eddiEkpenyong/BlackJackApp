let firstCard = 10
let secondCard = 3  
let sum = firstCard + secondCard
let hasBlackJack = false
let isAlive = true
let message = ""
let messageEl = document.getElementById("message")
let sumEl = document.getElementById("sumEl")

function startGame(){

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
    sumEl.textContent = "Sum:" + sum
    
}


