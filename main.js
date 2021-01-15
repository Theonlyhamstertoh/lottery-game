const userMoney = document.getElementById('userMoney');
const startButton = document.querySelector('.startButton');
let moneyRemaining = document.querySelector('.moneyRemaining');
let moneySpent = document.querySelector('.moneySpent');
const buyTicket = document.getElementById('buyTicket');
let winOrNot = document.querySelector('.winOrNot');
let attempts = document.getElementById('attempts')
const placeLabel = document.getElementById('placelabel');
const restart = document.querySelector('.restart');

userMoney.focus();
startButton.addEventListener('click', startGame);

let totalTries = 0;
let cashUsed = 0;

let lotteryNumber = Math.floor(Math.random() * 100) + 1;
console.log('lottery Number == ' + lotteryNumber)
restart.addEventListener('click', restartGame);

function startGame() {
    if(userMoney.value == '') {
        alert('Please input numbers');
        userMoney.value = '';
        userMoney.focus();
    } else if(userMoney.value < 5) {
        alert('You need at least $5');
        userMoney.value = '';
        userMoney.focus();
    } else if(userMoney.value >= 1000) {
        alert('Hey Mary, thank you for putting so much money and as fee, I will take $500 away. Thank you for your act of kindness)')
        
        userMoney.value -= 500;

        moneyRemaining.textContent = `$${userMoney.value}`;
        moneySpent.textContent = `$${cashUsed}`;
        hideStartGame();
        attempts.textContent = totalTries;
        buyTicket.addEventListener('click', ticketCost);
    } else {
        moneyRemaining.textContent = `$${userMoney.value}`;
        moneySpent.textContent = `$${cashUsed}`;
        hideStartGame();
        attempts.textContent = totalTries;
        buyTicket.addEventListener('click', ticketCost);
    } 

}

function hideStartGame() {
    userMoney.classList.add('hidden');
    startButton.classList.add('hidden');
    placeLabel.classList.add('hidden');
    

}

function ticketCost() {
    let costOfTicket = 5;
    if(userMoney.value >= 5) {
        totalTries++;
        
        attempts.textContent = totalTries;
        userMoney.value -=  costOfTicket;
        cashUsed += costOfTicket;
        moneyRemaining.textContent = `$${userMoney.value}`;
        moneySpent.textContent = `- $${cashUsed}`;
        checkNumber();
    } else {
        winOrNot.textContent = 'You ran out of money. Restart to play again'
        buyTicket.disabled = true;
        
    }    
}

function checkNumber() {
    winOrNot.classList.remove('hidden')
    let randomNumber = Math.floor(Math.random() * 100) + 1;
    console.log(randomNumber)
    
  
    
    if(randomNumber === lotteryNumber) {
        winOrNot.textContent = 'You.... won $500,000! The money has been added to your bank';
        gameOver();
    } else {
        winOrNot.textContent = 'You were... unlucky';

        
    }
}

function gameOver() {
    let prizeMoney = parseInt(userMoney.value) + 500000;
    buyTicket.disabled = true;
    moneyRemaining.textContent =  `$${prizeMoney}`;
    cashUsed = 500000 - cashUsed;
    moneySpent.textContent = `+ $${cashUsed}`;
    moneySpent.style.color = 'green'; 
    
    
    // You have run out of money!
    // click restart to play again!
}

function restartGame() {
    console.log('game restarted');
    userMoney.classList.remove('hidden');
    startButton.classList.remove('hidden');
    placeLabel.classList.remove('hidden');
    
    winOrNot.textContent = '';
    totalTries = 0;
    attempts.textContent = totalTries;
    userMoney.value = '';
    userMoney.focus();
    moneySpent.textContent = '';
    cashUsed = 0
    moneyRemaining.textContent = '';
  
    lotteryNumber = Math.floor(Math.random() * 100) + 1;
    console.log('lottery Number == ' + lotteryNumber)
    startButton.addEventListener('click', startGame);
    
}