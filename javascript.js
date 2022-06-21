const SelRock = document.querySelector('#rock')
const SelPaper = document.querySelector('#paper')
const SelScissors = document.querySelector('#scissors')


let word="";
let playerScore = 0;
let computerScore = 0;
SelRock.addEventListener('click', () => Game(1))
SelPaper.addEventListener('click', () => Game(2))
SelScissors.addEventListener('click', () => Game(3))
//const Text = ("Player chose "+ toword(PlayerChoice)+ " and computer chose " + toword(ComputerChoice))
function Game(PlayerChoice, ComputerChoice) {
    ComputerChoice = (Math.floor(Math.random() * 3) + 1)
    if(computerScore <5 && playerScore<5) {
        //createP("state","Player chose "+ toword(PlayerChoice)+ " and computer chose " + toword(ComputerChoice))
        //document.getElementById('state').innerHTML = "Player chose "+ toword(PlayerChoice)+ " and computer chose "+ toword(ComputerChoice);
        if (PlayerChoice === ComputerChoice) {
            score();
            createP('state',"Player chose "+ toword(PlayerChoice)+ " and computer chose " + toword(ComputerChoice) + ", no one gets point, it's a tie");
        } else if (((PlayerChoice === 1 && ComputerChoice === 3) || (PlayerChoice === 2 && ComputerChoice === 1) || (PlayerChoice === 3 && ComputerChoice === 2)) && (playerScore <= 5 && computerScore <= 5)) {
            playerScore++;
            score();
            createP('state',"Player chose "+ toword(PlayerChoice)+ " and computer chose " + toword(ComputerChoice) + ", player gets point")
            if (playerScore === 5) {
                document.getElementById('winner').innerHTML = "Player WON!"
            }
        } else {
            computerScore++;
            score();
            createP('state',"Player chose "+ toword(PlayerChoice)+ " and computer chose " + toword(ComputerChoice) + ", computer gets point");
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
    function toword(int){
    switch (int){
        case 1:
             word = "Rock"
            break;
        case 2:
             word = "Paper"
            break;
        case 3:
            word = "Scissors"
            break;
        default:
            break;
    }
    return word;
    }
    /*function color(){
    if(int = 1){
        document.getElementById('rock').style.background="green";
    }

    }*/
    function createP(id, text){
    const newElement = document.createElement("p");
    const newText = document.createTextNode(text);
    newElement.appendChild(newText);
    document.getElementById(id).appendChild(newElement);
    console.log(newElement)
    //document.body.insertBefore(newElement,current);
        //current.appendChild(newElement);


    }

