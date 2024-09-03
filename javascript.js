// Get buttons from document and assign each the playRound function with the button text as input for humanChoice
const choiceButtons = document.querySelectorAll(".choice");
const resetButton = document.querySelector(".reset-button");

// Make round counter and get round count h2
let roundCount = 1;
const roundCountDisplay = document.querySelector(".round-count")

// Get divs to diplay human and computer moves
const humanMoveDiv = document.querySelector(".human-move");
const computerMoveDiv = document.querySelector(".computer-move");

// Make score counters and get divs to display current human and computer score
let humanScore = 0;
let computerScore = 0;
const humanScoreDiv = document.querySelector(".human-score");
const computerScoreDiv = document.querySelector(".computer-score");

// Get div to display winner
const winnerMessageDiv = document.querySelector(".winner-message");

let gameEnded = false;

// Determines the computer's move when the player chooses their move
function getComputerChoice()
{
    if (gameEnded) return;

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
            computerMoveDiv.textContent = "Computer chose rock.";
            return "rock";
        case 2:
            console.log("Computer chose paper.");
            computerMoveDiv.textContent = "Computer chose paper.";
            return "paper";
        case 3:
            computerMoveDiv.textContent = "Computer chose scissors.";
            return "scissors";
    }
}   

// Now obsolete due to UI
function promptUser()
{
    let userChoice = null;

    try
    {
        userChoice = prompt("Rock, Paper, or Scissors? Type your choice.").toLowerCase();
    }
    catch (err)
    {
        if (userChoice == null)
        {
            console.log("Canceled Game");
            return null;
        }
    }
    finally
    {
        console.log(userChoice);
        return userChoice;
    }
}

// Now obsolete due to UI
function getHumanChoice()
{
    choice = promptUser();

    while(choice != "rock" && choice != "paper" && choice != "scissors")
    {
        if (choice == null)
        {
            return "canceled";
        }
        console.log("Invalid Choice: Try Again");
        choice = promptUser();
    }
    return choice;
}

// Plays round of rock, paper, scissors and updates results
function playRound(humanChoice, computerChoice)
{
    if (gameEnded) return;
    roundCountDisplay.textContent = "Round " + ++roundCount;
    humanMoveDiv.textContent = "You chose " + humanChoice +".";
    switch(humanChoice + "," + computerChoice)
    {
        case "rock,rock":
            console.log("You tie!");
            break;
        case "rock,paper":
            console.log("You lose! Paper beats Rock.");
            computerScoreDiv.textContent = "Computer Score: " + ++computerScore;
            checkWinCondition()
            return false;
        case "rock,scissors":
            console.log("You win! Rock beats Scissors.");
            humanScoreDiv.textContent = "Human Score: " + ++humanScore;
            checkWinCondition()
            return true;


        case "paper,rock":
            console.log("You win! Paper beats Rock.");
            humanScoreDiv.textContent = "Human Score: " + ++humanScore;
            checkWinCondition()
            return true;
        case "paper,paper":
            console.log("You tie!");
            break;
        case "paper,scissors":
            console.log("You lose! Paper beats Scissors.");
            computerScoreDiv.textContent = "Computer Score: " + ++computerScore;
            checkWinCondition()
            return false;

            
        case "scissors,rock":
            console.log("You lose! Rock beats Scissors");
            computerScoreDiv.textContent = "Computer Score: " + ++computerScore;
            checkWinCondition()
            return false;
        case "scissors,paper":
            console.log("You win! Scissors beats Paper.");
            humanScoreDiv.textContent = "Human Score: " + ++humanScore;
            checkWinCondition()
            return true;
        case "scissors,scissors":
            console.log("You tie!");
            break;
    }
}

function checkWinCondition()
{
    if (humanScore == 5)
    {
        winnerMessageDiv.textContent = "You win!";
        gameEnded = true;
    }
    else if (computerScore == 5)
    {
        winnerMessageDiv.textContent = "You lose!";
        gameEnded = true;
    }
    return;
}

function resetGame()
{
    computerMoveDiv.textContent = "";
    computerScoreDiv.textContent = "Computer Score: 0";
    computerScore = 0;
    humanMoveDiv.textContent = "";
    humanScoreDiv.textContent = "Human Score: 0";
    humanScore = 0;
    winnerMessageDiv.textContent = "";
    roundCount = 1;
    roundCountDisplay.textContent = "Round 1";
    gameEnded = false;
}

function playGame()
{
    let roundCount = 1;

    let computerScore = 0;
    let humanScore = 0;

    
    while(roundCount <= 5)
    {
        const humanSelection = getHumanChoice();
        if (humanSelection == "canceled")
        {
            return;
        }
        console.log("Round " + String(roundCount));
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

//playGame();

choiceButtons.forEach((button) => 
    {
        button.addEventListener("click", () => 
        {
            console.log(button.textContent.toLowerCase());
            playRound(button.textContent.toLowerCase(), getComputerChoice());
        });
    });


resetButton.addEventListener("click", () => 
    {
        console.log(resetButton.textContent.toLowerCase());
        resetGame();
    });