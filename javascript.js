let computerScore = 0;
let humanScore = 0;

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
            return "rock";
        case 2:
            return "paper";
        case 3:
            return "scissors";
    }
}   


function promptUser()
{
    userChoice = prompt("Rock, Paper, or Scissors? Type your choice.").toLowerCase();
    return userChoice;
}


function getHumanChoice()
{
    choice = promptUser();

    while(choice != "rock" || choice != "paper" || choice != "scissors")
    {
        choice = promptUser();
    }
    return choice;
}


console.log(getComputerChoice());