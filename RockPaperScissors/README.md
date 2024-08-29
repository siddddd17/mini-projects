# RockPaperScissors

# Understand

The game is rock paper scissors. This game is going to be played by the user against the computer. 
If the user says rock and the computer says rock, the score will be draw
if the user says rock and the computer says scissors, user wins
if the user says rock and computer says paper, computer wins
If the user says scissors and the computer says scissors, it will be draw
if the user says scissors and computer says rock, computer wins
if the user says scissors and computer says paper, user wins
if the user says paper and computer says paper, the score will be draw
if the user says paper and computer says rock , the user wins
if the user says paper and computer says scissors, user wins

The game is going to be played 5 rounds and the one which has the highest score at the end of 5 rounds wins

# Plan 

-user interface: there will be 3 button for each choices. there will also be a section to display the results( the 
running score, who wins in that round and the final winner after 5 rounds)
-inputs: the user will be allowed to click the buttons based on his choice
-output: the users choice will be evaluated with the randomly generated choice of the computer. Based on this the choice, output will 
         given like this "you loose! paper beats rock" followed by the current score of the user and the computer. After 5 rounds, the 
         player with the highest score wins and the output will be 'Player wins!'

# Psuedocode
-create 3 buttons for rock paper scissors
-create a section to display the results
-create 3 variables rock, paper and scissors and assign the curresponding buttons from the document into this
-create a variable for the result section and assign the div form document into this

-attach click event listeners to each of the buttons

-declare a variable playerAssigned
    if rock button is clicked, assign the playerSelection to 'rock' and call playRound
    if paper button is clicked, assign playerSelection to paper and call playRound
    if scissor button is clicked, playerSelection to scissors. and call playRound

-create a variable called computerSelection and store undefined into this
 create a variable called userScore=0;
 create a variable called computerScore=0;


 function showResult(result){
    create an eleement para
    add text content: if result=player{
        player wins
    }
    else {
        computer wins
    }
    append para to div
}

-create a function called computerChoice()
    create a variable called number and assing math.random() to it
    if number<0.34{
        return 'rock';
    }
    if number < 0.67{
        return paper;
    }
    else return scissors

-function monitorScore(computerScore, playerScore){
    create para element and assingn text content 
        Computer Score: score  Player Score: score
    append it to the div section
}

function finalResult();
    if userScore> computerScore {
        create para element
            add text: You saved humanity
        ele 
            add text: You lost
        append para to div
    }
        


-create a function called playRound() 
        if playerSelection=rock and computerSelection=='rock'; 
            result=draw
        if playerSelection=rock and computerSelection=='paper'; 
            result='computer' comptuerScore++
        if playerSelection=rock and computerSelection==scissors; playerScore++
            result='player' playerScore++
        if playerSelection=paper, computerSelection=paper; 
            result=draw;
        if playerSelection=paper and computerSelection=rock; 
            result=player playerScore++
        if playerSelection=paper and computerSelection=scissors' 
            result=computer computerScore++
        if playerSelection=scissors and computerSelection=scissors; 
            result=draw 
        if playerSelection=scissors and computerSelection=rock; 
            result=computer  computerScore++
        if playerSelection=scissors and computerSelection=paper; 
            result=player playerScore++;
        return result


-function game(){
    while(playerScore<=5 || computerScore<=5){
        div.removeChild(para1);
        div.removeChild(para2);
        const result=playRound();
        showResult(result);
        monitorScore(computerScore,playerScore);
        
    }
    
    finalResult(computerScore,playerScore);
}




