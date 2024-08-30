console.log("Hello World");


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

console.log(getComputerChoice());