function computerPlay(){
    //  Creating random number from 0 to 1 and multiply it by 100, then clearing decimals
    const choiceList = ["Rock", "Paper", "Scissors"]
    return choiceList[Math.floor(Math.random() * choiceList.length)]
}
function playRockPaperScissors(playerSelection){
    // Checking if playerMade a selection
    const playerSelectionLowercase = playerSelection ? playerSelection.toLowerCase() : "Not correct value";
    // Checking if selection is rock, paper or scissors
    if(playerSelectionLowercase !== "rock" && playerSelectionLowercase !=="scissors" && playerSelectionLowercase !== "paper"){
        return "Invalid choice. Try using Rock, Paper or Scissors"
    }
    // Grabbing selection from computer and checking if selections are equal
    const computerSelection = computerPlay()
    if(computerSelection.toLowerCase() === playerSelectionLowercase){
        return `Your choice - ${playerSelection}, computers choice - ${computerSelection}. Tie🏳`
    }
    // Checking winning combinations
    switch(playerSelectionLowercase){
        case "scissors":
            return `Your choice - ${playerSelection}, computers choice - ${computerSelection}. ${computerSelection === "Rock" ? "You lost❌" : "You win✔"}`;
            break;
        case "paper":
            return `Your choice - ${playerSelection}, computers choice - ${computerSelection}. ${computerSelection === "Scissors" ? "You lost❌" : "You win✔"}`;
            break;
        case "rock":
            return `Your choice - ${playerSelection}, computers choice - ${computerSelection}. ${computerSelection === "Paper" ? "You lost❌" : "You win✔"}`;
            break;
    }
}
// Invoking game for users
for(let i = 0; i < 5; i++)
{
    const playerSelection = prompt("Please right your choice (Rock, Paper, Scissors)", "Scissors")
    console.log(playRockPaperScissors(playerSelection))
}
