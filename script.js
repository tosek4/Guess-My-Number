let searchNumber = Math.trunc(Math.random()*20) + 1
let yourNumber
let score = 20
let highScore = 0
const winMessages = 'Correct Number - You win'
const endGameMessages = 'End Game You lost'
const tooHighMessages = 'Too high!'
const tooLowMessages = 'Too low!'
const startGuessingMessages = 'Start guessing...'

const displayMessages = function (message){
    document.querySelector('.message').textContent = message
}
document.querySelector('.check').addEventListener('click', function () {
     yourNumber = Number(document.querySelector('.guess').value)
    if(searchNumber === yourNumber){
        if(highScore < score){
            highScore = score
            document.querySelector('.highscore').textContent= highScore
        }
        displayMessages(winMessages)
        document.querySelector('body').style.backgroundColor = 'green'

    }else if(score === 1){
        displayMessages(endGameMessages)
        document.querySelector('body').style.backgroundColor = 'red'

    }else if(searchNumber !== yourNumber) {
        score--
        displayMessages(searchNumber < yourNumber ? tooHighMessages  : tooLowMessages)
        document.querySelector('.score').textContent = score
    }
})
document.querySelector('.again').addEventListener('click', function () {
    searchNumber = Math.trunc(Math.random()*20) + 1
    document.querySelector('body').style.backgroundColor = '#222'
    displayMessages(startGuessingMessages)
    document.querySelector('.number').textContent = '?'
    document.querySelector('.score').textContent = 20
    document.querySelector('.guess').value = null
    score = 20

})