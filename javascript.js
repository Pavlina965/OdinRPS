const SelRock = document.querySelector('#rock')
const SelPaper = document.querySelector('#paper')
const SelScissors = document.querySelector('#scissors')


let playerScore = 0;
let computerScore = 0;
SelRock.addEventListener('click', () => Game(1))
SelPaper.addEventListener('click', () => Game(2))
SelScissors.addEventListener('click', () => Game(3))

function Game(PlayerChoice, ComputerChoice) {
    ComputerChoice = (Math.floor(Math.random() * 3) + 1)
    if((computerScore||playerScore) <5) {
        if (PlayerChoice === ComputerChoice) {
            console.log("tie")
            score();
        } else if (((PlayerChoice === 1 && ComputerChoice === 3) || (PlayerChoice === 2 && ComputerChoice === 1) || (PlayerChoice === 3 && ComputerChoice === 2)) && (playerScore <= 5 && computerScore <= 5)) {
            console.log("player wins")
            playerScore++;
            score();
            if (playerScore === 5) {
                document.getElementById('winner').innerHTML = "Player WON!"
            }
        } else {
            console.log("Computer wins")
            computerScore++;
            score();
            if (computerScore === 5) {
                document.getElementById('winner').innerHTML = "Computer WON!"

            }
        }
    }
}
    function score() {
        document.getElementById('player').innerHTML = playerScore;
        console.log(playerScore)

        document.getElementById('computer').innerHTML = computerScore;
        console.log(computerScore)


    }

