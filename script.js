let searchNumber = Math.trunc(Math.random()*20) + 1
let yourNumber
let score = 20
let highScore = 0
document.querySelector('.check').addEventListener('click', function () {
     yourNumber = document.querySelector('.guess').value
    if(searchNumber == yourNumber){

        if(highScore < score){
            highScore = score
            document.querySelector('.highscore').textContent= highScore
        }
        document.querySelector('.message').textContent = 'Correct Number - You win'
        document.querySelector('body').style.backgroundColor = 'green'

    }else if(score == 1){

        document.querySelector('.message').textContent = 'End Game You lost'
        document.querySelector('body').style.backgroundColor = 'red'

    }else if(searchNumber > yourNumber){

        score--
        document.querySelector('.message').textContent = 'Too low!'
        document.querySelector('.score').textContent = score

    }else if(searchNumber < yourNumber){

        score--
        document.querySelector('.message').textContent = 'Too high!'
        document.querySelector('.score').textContent = score

    }
})
document.querySelector('.again').addEventListener('click', function () {
    document.querySelector('body').style.backgroundColor = '#222'
    document.querySelector('.message').textContent = 'Start guessing...'
    document.querySelector('.number').textContent = '?'
    document.querySelector('.score').textContent = 20
    document.querySelector('.guess').value = null
    score = 20

})