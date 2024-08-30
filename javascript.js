function getComputerChoice()
{
    let choice = Math.ceil(Math.random() * 3);

    if(choice == 0)
    {
        while(choice == 0)
        {
            choice = Math.ceil(Math.random() * 3);
        }
    }
    switch(choice)
    {
        case 1:
            console.log("Computer chose rock.");
            return "rock";
        case 2:
            console.log("Computer chose paper.");
            return "paper";
        case 3:
            console.log("Computer chose scissors.");
            return "scissors";
    }
}   


function promptUser()
{
    userChoice = prompt("Rock, Paper, or Scissors? Type your choice.").toLowerCase();
    console.log(userChoice);
    return userChoice;
}


function getHumanChoice()
{
    choice = promptUser();

    while(choice != "rock" && choice != "paper" && choice != "scissors")
    {
        console.log("Invalid Choice: Try Again");
        choice = promptUser();
    }
    return choice;
}


function playRound(humanChoice, computerChoice)
{
    switch(humanChoice + "," + computerChoice)
    {
        case "rock,rock":
            console.log("You tie!");
            break;
        case "rock,paper":
            console.log("You lose! Paper beats Rock.");
            return false;
        case "rock,scissors":
            console.log("You win! Rock beats Scissors.");
            return true;


        case "paper,rock":
            console.log("You win! Paper beats Rock.");
            return true;
        case "paper,paper":
            console.log("You tie!");
            break;
        case "paper,scissors":
            console.log("You lose! Paper beats Scissors.");
            return false;

            
        case "scissors,rock":
            console.log("You lose! Rock beats Scissors");
            return false;
        case "scissors,paper":
            console.log("You win! Scissors beats Paper.");
            return true;
        case "scissors,scissors":
            console.log("You tie!");
            break;
    }
}


function playGame()
{
    let roundCount = 1;

    let computerScore = 0;
    let humanScore = 0;

    
    while(roundCount <= 5)
    {
        console.log("Round " + String(roundCount));
        const humanSelection = getHumanChoice();
        const computerSelection = getComputerChoice();
        const humanScored = playRound(humanSelection, computerSelection);

        if (humanScored == true)
        {
            humanScore++;
        }
        else if (humanScored == false)
        {
            computerScore++;
        }

        roundCount++;
    }

    console.log("Final Human Score: " + String(humanScore));
    console.log("Final Computer Score: " + String(computerScore));
}

playGame();
