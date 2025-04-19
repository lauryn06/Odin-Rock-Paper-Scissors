// console.log("hello world");

//getting the computers random choice
 const getComputerChoice=()=>{
  const random=Math.random();
  if(random <1/3){
    return "rock";
  }
  else if(random < 2/3){
    return "paper";
  }
  else{
    return "scissors";
  }
};

//getting the users choice
  const getHumanChoice=()=>{
 let  choice= prompt("Enter Rock,Paper or Scissors: ");
  choice=choice.toLowerCase();
 if(choice==="rock" || choice==="paper" || choice==="scissors")
 {
  return choice;
 }
else
 {
  return "rock";
 }
}

let humanScore=0;
let ComputerScore=0;


//  const playRound=(humanChoice, computerChoice)=>{
//   console.log("You chose: "+humanChoice);
//    console.log("The computers choice: "+computerChoice);

//   if(humanChoice==="rock" && computerChoice==="scissors" 
//     || humanChoice==="paper" && computerChoice==="rock"
//     || humanChoice==="scissors" && computerChoice==="paper"
//   )
// {
//   humanScore++;
//   console.log("You Win!! "+ humanScore +" Score for you" );
// }
// else if(computerChoice==="rock" && humanChoice==="scissors" 
//   || computerChoice==="paper" && humanChoice==="rock"
//   || computerChoice==="scissors" && humanChoice==="paper"
// ){
//   ComputerScore++;
//   console.log("You lose!! " + ComputerScore+ " for computer and "+humanScore+" score for you")
// }
// else{
// console.log("It is a Tie!!");
// }
// };
// playRound(humanChoice,computerChoice);
  // let Rounds = playRound();
 const playGame=()=>{
  for(let round=1; round<=5 ;round++){

    let humanChoice= getHumanChoice();
    let computerChoice= getComputerChoice();

    console.log("This is round: "+round);
    console.log("You chose: "+humanChoice);
     console.log("The computers choice: "+computerChoice);

    if(humanChoice==="rock" && computerChoice==="scissors" 
      || humanChoice==="paper" && computerChoice==="rock"
      || humanChoice==="scissors" && computerChoice==="paper"
    )
  {
    humanScore++;
    console.log("You Won this round!! "+ humanScore +" Score for you" );
  }
  else if(computerChoice==="rock" && humanChoice==="scissors" 
    || computerChoice==="paper" && humanChoice==="rock"
    || computerChoice==="scissors" && humanChoice==="paper"
  ){
    ComputerScore++;
    console.log("You lost this round " + ComputerScore+ " for computer and "+humanScore+" score for you")

  }
  else{
console.log("It is a tie!!");
  }
  }
}
playGame();
//giving final scores and the winner
const results=()=>{
  if(humanScore>ComputerScore){
    console.log("You have won with "+humanScore +" and computer's scores: "+ComputerScore);
  }
  else if(ComputerScore>humanScore){
    console.log("you have lost!! your scores: "+humanScore +" computer's scores: "+ComputerScore);
  }
  else{
    console.log("Your scores: "+humanScore +" and computer's scores "+ComputerScore +" A tie!!");
  }
}
results();