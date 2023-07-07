
let user = {
    high: false,
    low: false,
    points: 100
}
let currentNumber = Math.floor(Math.random() * 100) + 1
let helloEl = document.getElementById("hello-el")
let numberEl = document.getElementById("number-el")
let resultTextEl = document.getElementById("result-text-el")
let guessEl = document.getElementById("guess-el")
let highButtonEl = document.getElementById("high-el")
let lowButtonEl = document.getElementById("'low-el")
let userPointsEl = document.getElementById("points-el")
let betEl = document.getElementById("bet-el")
let currentBet = 0
let betButtonEl = document.getElementById("bet-button-el")
let bettingTextEl = document.getElementById("betting-gesture-text")
let bettingNumberEl = document.getElementById("betting-number-el")
helloEl.innerText = "Welcome to the Hi-Lo Game!"
numberEl.innerText = currentNumber.toString()

userPointsEl.innerText = `Your current points: ${user.points}`
betEl.innerText = `Your current bet: ${currentBet}`


function highOrLow(){
    if(!currentBet){
        return guessEl.innerText = "Place a bet!"
    }
    let bettingNumber = parseInt(currentBet)
    let guessingNumber = parseInt(currentNumber)
    let randomNumber = Math.floor(Math.random() * 100) + 1
    let newNumber = 0
    switch (true) {
        case (randomNumber > guessingNumber && user.high === true):
            numberEl.innerText = randomNumber.toString();
            guessEl.innerText = "The number is high!";
            resultTextEl.innerText = "You won!";
            newNumber = randomNumber;
            user.points += bettingNumber * 2;
            break;

        case (randomNumber < guessingNumber && user.low === true):
            numberEl.innerText = randomNumber.toString();
            guessEl.innerText = "The number is low!";
            resultTextEl.innerText = "You won!";
            newNumber = randomNumber;
            user.points += bettingNumber * 2;
            break;

        case (randomNumber > guessingNumber && user.high !== true):
            numberEl.innerText = randomNumber.toString();
            guessEl.innerText = "The number is high!";
            resultTextEl.innerText = "You lost!";
            newNumber = randomNumber;
            break;

        case (randomNumber < guessingNumber && user.high !== false):
            numberEl.innerText = randomNumber.toString();
            guessEl.innerText = "The number is low!";
            resultTextEl.innerText = "You lost!";
            newNumber = randomNumber;
            break;

        default:
            numberEl.innerText = randomNumber.toString();
            guessEl.innerText = "Same number, try again!";
            break;
    }
    currentNumber = newNumber
    user.high = false
    user.low = false
    currentBet = 0
    betEl.textContent= `Your current bet: ${currentBet}`
    userPointsEl.innerText = `Your current points: ${user.points}`
}

betButtonEl.addEventListener("click", function(){
    let bettingNumber = parseInt(bettingNumberEl.value)
    if(!bettingNumber){
        return guessEl.innerText = "Place a bet!"
    }
    if(bettingNumber > user.points){
        Toastify({
            text:"You don't have enough points!",
            duration: 3000,
            gravity: 'top',
            position: 'center',
            backgroundColor: '#ff0000',
            stopOnFocus: true
        }).showToast()
        return bettingTextEl.innerText = "You don't have enough points!"
    }else{
        console.log('got here')
        bettingTextEl.innerText = ""
        currentBet += bettingNumber
        user.points -= bettingNumber
    }
    betEl.textContent= `Your current bet: ${currentBet}`
    userPointsEl.innerText = `Your current points: ${user.points}`
    bettingNumberEl.value = ""
})




highButtonEl.addEventListener("click", function(){
    user.high = true;
    highOrLow()
})
lowButtonEl.addEventListener("click", function(){
    user.low = true;
    highOrLow()
})

